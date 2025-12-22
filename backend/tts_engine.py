# -*- coding: utf-8 -*-
"""
TTS Engine for AgroBot
----------------------
Converts text responses to speech using gTTS.
Supports translation to Indian languages via Deep Translator.
Returns playable audio bytes for Streamlit + saves MP3 file locally.
"""

from gtts import gTTS
from deep_translator import GoogleTranslator
import os
import io

def text_to_speech(text: str, lang_code: str = "en", filename: str = "speech.mp3"):
    """
    Converts text into speech audio.
    Returns (filename, audio_bytes) for playback.
    """

    try:
        # Create temp directory if it doesn't exist
        temp_dir = os.path.join(os.path.dirname(__file__), 'temp')
        os.makedirs(temp_dir, exist_ok=True)
        
        # Update filename to include temp directory path
        filename = os.path.join(temp_dir, os.path.basename(filename))
        
        # Validate input
        if not text or not text.strip():
            print("[TTS] No text provided for speech.")
            return None, None

        print(f"[TTS] Requested language: {lang_code}")
        print(f"[TTS] Original text (first 50 chars): {text[:50]}...")

        # Language mapping - ensure consistency
        # Map common codes to what gTTS supports
        lang_map = {
            'en': 'en',   # English
            'ur': 'ur',   # Urdu
            'pnb': 'ur',  # Pakistani Punjabi -> use Urdu for TTS (similar script)
            'sd': 'ur',   # Sindhi -> use Urdu for TTS (limited support)
            'ps': 'ur',   # Pashto -> use Urdu for TTS (limited support)
            'bal': 'ur',  # Balochi -> use Urdu for TTS (limited support)
            'ta': 'ta',   # Tamil
            'mr': 'mr',   # Marathi
            'bn': 'bn',   # Bengali
            'gu': 'gu',   # Gujarati
        }
        
        # Get normalized language code
        normalized_lang = lang_map.get(lang_code.lower(), 'en')
        print(f"[TTS] Normalized language: {normalized_lang}")

        # Step 1: Use text as-is since chat system now handles translation
        # The chat system already provides text in the correct language
        translated_text = text
        print(f"[TTS] Using text as provided (already in target language): {lang_code}")

        # Step 2: Generate TTS
        print(f"[TTS] Generating speech in language: {normalized_lang}")
        tts = gTTS(text=translated_text, lang=normalized_lang, slow=False)
        tts.save(filename)
        print(f"[TTS] Audio saved as '{filename}'")

        # Step 3: Return audio bytes and translated text for playback
        with open(filename, "rb") as f:
            audio_bytes = f.read()

        return filename, audio_bytes, translated_text

    except Exception as e:
        print(f"[TTS ERROR] Error in TTS: {e}")
        return None, None, None
