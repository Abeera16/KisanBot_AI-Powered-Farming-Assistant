# agrobot_chat.py
import google.generativeai as genai
import os
from dotenv import load_dotenv
from deep_translator import GoogleTranslator
from groq import Groq
import re

load_dotenv()

# Configure multiple AI providers
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Initialize AI clients
if GOOGLE_API_KEY:
    genai.configure(api_key=GOOGLE_API_KEY)
    gemini_model = genai.GenerativeModel("gemini-2.5-flash")

if GROQ_API_KEY:
    groq_client = Groq(api_key=GROQ_API_KEY)

# AI Provider preference (Groq first due to higher quota)
AI_PROVIDER = "groq" if GROQ_API_KEY else "gemini"
print(f"[CHAT] Using AI Provider: {AI_PROVIDER}")

def get_ai_response(prompt, provider="groq"):
    """
    Get AI response from specified provider
    """
    try:
        if provider == "groq" and GROQ_API_KEY:
            response = groq_client.chat.completions.create(
                model="openai/gpt-oss-120b",  # Latest high-quality model
                messages=[{"role": "user", "content": prompt}],
                temperature=0.7,
                max_tokens=500
            )
            return response.choices[0].message.content.strip()
        
        elif provider == "gemini" and GOOGLE_API_KEY:
            chat = gemini_model.start_chat(history=[])
            response = chat.send_message(prompt)
            return response.text.strip()
        
        else:
            raise Exception(f"Provider {provider} not available or not configured")
            
    except Exception as e:
        print(f"[AI] Error with {provider}: {e}")
        # Try fallback provider
        if provider == "groq" and GOOGLE_API_KEY:
            print("[AI] Falling back to Gemini...")
            return get_ai_response(prompt, "gemini")
        elif provider == "gemini" and GROQ_API_KEY:
            print("[AI] Falling back to Groq...")
            return get_ai_response(prompt, "groq")
        else:
            raise e

def translate_to_shahmukhi_punjabi(english_text):
    """
    Custom function to translate English to Punjabi Shahmukhi script
    Uses multiple strategies to maintain Shahmukhi script
    """
    try:
        # Strategy 1: Try direct Urdu translation (similar script to Shahmukhi)
        print("[SHAHMUKHI] Attempting Urdu translation for Shahmukhi Punjabi...")
        urdu_translation = GoogleTranslator(source="en", target="ur").translate(english_text)
        
        # Strategy 2: Try to get a more Punjabi-specific version
        # Add Punjabi-specific terms and modifications
        punjabi_urdu = urdu_translation
        
        # Common Urdu to Punjabi Shahmukhi word replacements
        replacements = {
            'استعمال کریں': 'ورتو',
            'کے لیے': 'لئی', 
            'اور': 'تے',
            'یہ': 'ایہہ',
            'کو': 'نوں',
            'میں': 'وچ',
            'سے': 'توں',
            'کا': 'دا',
            'کی': 'دی',
            'کے': 'دے',
            'ہے': 'اے',
            'ہیں': 'نیں',
            'کرنا': 'کرنا',
            'کریں': 'کرو',
            'پانی': 'پانی',
            'مٹی': 'مٹی',
            'پودے': 'پودے',
            'بیماری': 'بیماری',
            'علاج': 'علاج'
        }
        
        # Apply replacements to make it more Punjabi-like
        for urdu_word, punjabi_word in replacements.items():
            punjabi_urdu = punjabi_urdu.replace(urdu_word, punjabi_word)
        
        print(f"[SHAHMUKHI] Converted to Shahmukhi Punjabi: {punjabi_urdu[:100]}...")
        return punjabi_urdu
        
    except Exception as e:
        print(f"[SHAHMUKHI] Translation failed: {e}")
        # Fallback to Urdu
        try:
            return GoogleTranslator(source="en", target="ur").translate(english_text)
        except:
            return english_text

def get_system_prompt(language="en"):
    """
    Generate system prompt based on language
    """
    language_instructions = {
        "en": "CRITICAL: You MUST respond in ENGLISH only. Do not use any other language.",
        "ur": "CRITICAL: You MUST respond in URDU (اردو) only. Use proper Urdu script, vocabulary, and grammar. Do not use English or any other language.",
        "pnb": "CRITICAL: You MUST respond in PUNJABI using Shahmukhi script (پنجابی) only. Use proper Pakistani Punjabi vocabulary, grammar, and Shahmukhi script. Do not use English, Urdu, or any other language.",
        "sd": "CRITICAL: You MUST respond in SINDHI (سنڌي) only. Use proper Sindhi script, vocabulary, and grammar. Do not use English, Urdu, or any other language.",
        "ps": "CRITICAL: You MUST respond in PASHTO (پښتو) only. Use proper Pashto script, vocabulary, and grammar. Do not use English, Urdu, or any other language.",
        "bal": "CRITICAL: You MUST respond in BALOCHI (بلوچی) only. Use proper Balochi script, vocabulary, and grammar. Do not use English, Urdu, or any other language."
    }
    
    lang_instruction = language_instructions.get(language, language_instructions["en"])
    
    # Add examples for better understanding
    examples = {
        "en": "Example: 'Use organic fertilizer for better soil health.'",
        "ur": "مثال: 'بہتر مٹی کی صحت کے لیے نامیاتی کھاد استعمال کریں۔'",
        "pnb": "مثال: 'بہتر مٹی دی صحت لئی نامیاتی کھاد ورتو۔'",
        "sd": "مثال: 'بهتر مٽي جي صحت لاءِ نامياتي کاد استعمال کريو۔'",
        "ps": "مثال: 'د ښه خاورې د روغتیا لپاره طبیعي سره استعمال کړئ۔'",
        "bal": "مثال: 'بہتر خاک ءِ تندرستی واستہ طبیعی کھاد استعمال کنت۔'"
    }
    
    example = examples.get(language, examples["en"])
    
    return f"""
You are a friendly AI farming assistant who talks with farmers in a simple and natural way.

{lang_instruction}

{example}

Always give short, clear, and direct answers using plain everyday words in the specified language.
Avoid asking questions back unless it is absolutely necessary to give a correct answer.
Speak in a natural, human-like tone that sounds good when spoken aloud.
Do not use markdown, lists, or any formatting.
Keep replies brief and conversational, as if chatting with a farmer face to face.

Only talk about farming, crops, soil, irrigation, fertilizers, pests, livestock, 
or related topics. If the question is not about farming, politely say that you only talk about farming in the specified language.

REMEMBER: Your entire response must be in the specified language. Never mix languages or use English if another language is specified.
"""





def get_agro_response(user_input: str, language: str = "en") -> str:
    """
    Takes user query as input and language, returns agriculture advice text.
    Implements bidirectional translation for regional languages.
    """
    if not user_input.strip():
        return "Please enter a valid question."
    
    # Languages that work well with direct AI response
    direct_support_languages = ["en", "ur"]
    
    # Languages that need bidirectional translation
    translation_needed_languages = ["pnb", "sd", "ps", "bal"]
    
    if language in direct_support_languages:
        # Use direct AI response for English and Urdu
        try:
            system_prompt = get_system_prompt(language)
            prompt = f"{system_prompt}\n\nUser question: {user_input}"
            return get_ai_response(prompt, AI_PROVIDER)
        except Exception as ai_error:
            print(f"[CHAT] AI API Error for {language}: {ai_error}")
            # Provide language-specific fallback responses
            if "quota" in str(ai_error).lower() or "429" in str(ai_error):
                fallback_responses = {
                    "en": "I'm sorry, the AI service is temporarily unavailable due to quota limits. Please try again later. For general farming advice, ensure proper watering, use organic fertilizers, and maintain good soil drainage.",
                    "ur": "معذرت، AI سروس عارضی طور پر دستیاب نہیں ہے۔ براہ کرم بعد میں کوشش کریں۔ عام کاشتکاری کے لیے: مناسب پانی دیں، نامیاتی کھاد استعمال کریں، اور مٹی کی نکاسی اچھی رکھیں۔"
                }
                return fallback_responses.get(language, fallback_responses["en"])
            else:
                return "I'm sorry, I'm having trouble processing your request right now. Please try again later."
    
    elif language in translation_needed_languages:
        # Bidirectional translation approach
        try:
            # Language mapping for translation - INPUT (question translation)
            input_translate_map = {
                'pnb': 'auto',  # Pakistani Punjabi -> auto-detect for input
                'sd': 'auto',   # Sindhi -> auto-detect for input
                'ps': 'auto',   # Pashto -> auto-detect for input
                'bal': 'auto',  # Balochi -> auto-detect for input
            }
            
            # Language mapping for translation - OUTPUT (response translation)
            output_translate_map = {
                'pnb': 'shahmukhi',  # Pakistani Punjabi -> keep in Shahmukhi script
                'sd': 'sd',          # Sindhi -> translate to Sindhi
                'ps': 'ps',          # Pashto -> translate to Pashto
                'bal': 'bal',        # Balochi -> translate to Balochi
            }
            
            input_lang = input_translate_map.get(language, 'en')
            output_lang = output_translate_map.get(language, 'en')
            
            # Step 1: Translate user question from regional language to English
            english_question = user_input
            if input_lang != 'en':
                print(f"[CHAT] Translating user question from {language} to English...")
                try:
                    # Use auto-detect for better input recognition
                    english_question = GoogleTranslator(source="auto", target="en").translate(user_input)
                    print(f"[CHAT] Translated question: {english_question[:100]}...")
                except Exception as e:
                    print(f"[CHAT] Question translation failed: {e}, using original text")
                    english_question = user_input
            
            # Step 2: Get AI response in English
            try:
                english_prompt = get_system_prompt("en")
                prompt = f"{english_prompt}\n\nUser question: {english_question}"
                english_response = get_ai_response(prompt, AI_PROVIDER)
                print(f"[CHAT] English AI response: {english_response[:100]}...")
            except Exception as ai_error:
                print(f"[CHAT] AI API Error: {ai_error}")
                # Provide a fallback response when API quota is exceeded
                if "quota" in str(ai_error).lower() or "429" in str(ai_error):
                    english_response = "I'm sorry, the AI service is temporarily unavailable due to quota limits. Please try again later. For general farming advice, ensure proper watering, use organic fertilizers, and maintain good soil drainage."
                    print("[CHAT] Using fallback response due to quota limits")
                else:
                    english_response = "I'm sorry, I'm having trouble processing your request right now. Please try again later."
                    print("[CHAT] Using generic fallback response")
            
            # Step 3: Translate English response back to the EXACT same language as user query
            if output_lang != 'en':
                print(f"[CHAT] Translating English response back to {language} (target: {output_lang})...")
                
                # Special handling for Punjabi Shahmukhi
                if language == 'pnb' and output_lang == 'shahmukhi':
                    try:
                        print("[CHAT] Using custom Shahmukhi Punjabi translation...")
                        translated_response = translate_to_shahmukhi_punjabi(english_response)
                        print(f"[CHAT] Shahmukhi Punjabi response: {translated_response[:100]}...")
                        return translated_response
                    except Exception as e:
                        print(f"[CHAT] Shahmukhi translation failed: {e}")
                        return english_response
                
                # Standard translation for other languages
                try:
                    translated_response = GoogleTranslator(source="en", target=output_lang).translate(english_response)
                    print(f"[CHAT] Final translated response in {language}: {translated_response[:100]}...")
                    return translated_response
                except Exception as e:
                    print(f"[CHAT] Direct translation to {output_lang} failed: {e}")
                    
                    # Fallback strategies for each language
                    if language == 'pnb':  # Punjabi - shouldn't reach here with new logic
                        try:
                            print("[CHAT] Fallback: Using Shahmukhi translation...")
                            return translate_to_shahmukhi_punjabi(english_response)
                        except Exception as e2:
                            print(f"[CHAT] All Punjabi attempts failed: {e2}")
                            return english_response
                    
                    elif language == 'sd':  # Sindhi
                        try:
                            print("[CHAT] Trying alternative Sindhi translation...")
                            # Try Urdu as fallback for Sindhi
                            urdu_response = GoogleTranslator(source="en", target="ur").translate(english_response)
                            print("[CHAT] Using Urdu as Sindhi fallback")
                            return urdu_response
                        except Exception as e2:
                            print(f"[CHAT] Sindhi fallback failed: {e2}")
                            return english_response
                    
                    elif language == 'ps':  # Pashto
                        try:
                            print("[CHAT] Trying alternative Pashto translation...")
                            pashto_response = GoogleTranslator(source="en", target="ps").translate(english_response)
                            print("[CHAT] Pashto translation successful")
                            return pashto_response
                        except Exception as e2:
                            print(f"[CHAT] Pashto translation failed: {e2}")
                            return english_response
                    
                    elif language == 'bal':  # Balochi
                        try:
                            print("[CHAT] Trying Urdu as Balochi fallback...")
                            urdu_response = GoogleTranslator(source="en", target="ur").translate(english_response)
                            print("[CHAT] Using Urdu as Balochi fallback")
                            return urdu_response
                        except Exception as e2:
                            print(f"[CHAT] Balochi fallback failed: {e2}")
                            return english_response
                    
                    else:
                        return english_response
            else:
                return english_response
                
        except Exception as e:
            print(f"[CHAT ERROR] Bidirectional translation failed: {e}")
            # Fallback to English response
            chat = model.start_chat(history=[])
            english_prompt = get_system_prompt("en")
            prompt = f"{english_prompt}\n\nUser question: {user_input}"
            response = chat.send_message(prompt)
            return response.text.strip()
    
    else:
        # Default to English for unknown languages
        chat = model.start_chat(history=[])
        system_prompt = get_system_prompt("en")
        prompt = f"{system_prompt}\n\nUser question: {user_input}"
        response = chat.send_message(prompt)
        return response.text.strip()
