import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Translation data
const translations = {
  en: {
    // App Name
    appName: 'KisanBot',
    tagline: 'Your AI Farming Assistant',
    
    // Landing Page
    heroSubtitle: '🌾 AI-Powered Farming Assistant',
    heroTitle: 'Smart Farming',
    heroTitleHighlight: 'Made Simple',
    heroDescription: 'Get instant farming advice through voice, text, or images. Speak in your language, get expert solutions powered by AI.',
    startChatting: 'Start Chatting Now',
    
    // Stats
    languages: 'Languages',
    available: 'Available',
    aiPowered: 'AI Powered',
    
    // Features Section
    featuresTitle: 'Three Ways to Get Answers',
    featuresSubtitle: 'Choose the method that works best for you',
    
    // Voice Mode
    voiceMode: 'Voice Mode',
    voiceModeDesc: 'Speak naturally in your language. Ask questions hands-free while working on your farm.',
    multiLanguageSupport: 'Multi-language support',
    audioResponses: 'Audio responses',
    
    // Text Chat
    textChat: 'Text Chat',
    textChatDesc: 'Type your questions and get instant detailed responses. Perfect for quick queries.',
    fastResponses: 'Fast responses',
    easyReference: 'Easy to reference',
    
    // Image Analysis
    imageAnalysis: 'Image Analysis',
    imageAnalysisDesc: 'Upload photos of crops or pests. Get instant disease identification and treatment advice.',
    diseaseDetection: 'Disease detection',
    treatmentSuggestions: 'Treatment suggestions',
    
    // CTA Section
    ctaTitle: 'Ready to Transform Your Farming?',
    ctaSubtitle: 'Join thousands of farmers getting instant AI-powered advice',
    startFirstChat: 'Start Your First Chat →',
    
    // Footer
    aboutTitle: 'About KisanBot',
    aboutDesc: 'An AI-powered farming assistant that helps farmers with crop advice, disease detection, and agricultural guidance in multiple languages.',
    poweredBy: 'Powered By',
    googleGemini: 'Google Gemini AI',
    speechRecognition: 'Groq Whisper (Speech Recognition)',
    textToSpeech: 'gTTS (Text-to-Speech)',
    techStack: 'React + Flask',
    connect: 'Connect',
    copyright: '© 2025 KisanBot — Built with 💚 for Farmers',
    projectNote: 'Project Expo Demo | AI for Agriculture',
    
    // Chat Interface
    backToHome: 'Back to Home',
    clearChat: 'Clear Chat',
    kisanBotOnline: 'KisanBot Online',
    startConversation: 'Start a conversation',
    conversationSubtitle: 'Type a message, record voice, or upload an image',
    chatPlaceholder: 'Ask about farming, crops, pests...',
    playAudio: 'Play audio',
    pause: 'Pause',
    resume: 'Resume',
    stop: 'Stop',
    youSaid: 'You said:',
    
    // Language Options
    english: 'English',
    urdu: 'Urdu',
    punjabi: 'Punjabi',
    sindhi: 'Sindhi',
    pashto: 'Pashto',
    balochi: 'Balochi',
    
    // Settings
    languageSettings: 'Language Settings',
    selectLanguage: 'Select your preferred language',
    
    // Demo Chat
    demoQuestion: 'How do I prevent tomato blight?',
    demoAnswer: 'Use copper-based fungicides and ensure proper spacing for air circulation...',
    
    // Innovation Section
    innovatingFuture: 'INNOVATING THE FUTURE',
    ofAgriculture: 'OF AGRICULTURE',
    kisanBotCombines: 'KisanBot combines modern technology and sustainable methods to help farmers grow better crops and increase productivity.',
    smartFarmingTech: 'Smart Farming Technology',
    sustainableAgriculture: 'Sustainable Agriculture',
    customerSatisfaction: 'Customer Satisfaction',
    farmersTrust: 'Farmers trust our AI-powered agricultural guidance',
    languagesSupported: 'Languages Supported',
    multipleLanguages: 'Multiple languages for better farmer accessibility',
    aiPoweredStat: 'AI Powered',
    advancedAI: 'Advanced artificial intelligence for smart farming solutions',
    
    // Technology Section
    technologyMeets: 'WHERE TECHNOLOGY MEETS',
    rootsOfNature: 'THE ROOTS OF NATURE',
    sustainableFarmingClimate: 'Sustainable Farming in the Age of Climate Change',
    climateDescription: 'Advanced AI technology helps farmers adapt to changing climate conditions and implement sustainable practices.',
    greenerFuture: 'Building a Greener Future Through Regenerative Farming',
    regenerativeDescription: 'Our platform promotes regenerative agriculture practices that restore soil health and biodiversity.',
    realWorldTech: 'Real-World Technology is Transforming Modern Agriculture',
    techDescription: 'From AI-powered crop monitoring to precision agriculture, technology is revolutionizing farming.',
    sustainableBiodiversity: 'Sustainable Farming is the Biodiversity',
    biodiversityDescription: 'Promoting biodiversity through sustainable farming practices for a healthier ecosystem.',
    
    // FAQ Section
    gotQuestions: 'GOT QUESTIONS? WE\'VE',
    gotYouCovered: 'GOT YOU COVERED.',
    faqDescription: 'Find answers to common questions about our AI farming assistant and how it can help improve your agricultural practices.',
    whatSolutions: 'What kind of farming solutions do you offer?',
    solutionsAnswer: 'We provide AI-powered advice on crop management, pest control, disease identification, and sustainable farming practices.',
    howToStart: 'How can I start using KisanBot\'s platform?',
    startAnswer: 'Simply click "Start Chatting" and begin asking questions in your preferred language. No registration required!',
    ecoFriendly: 'Are your technologies eco-friendly?',
    ecoAnswer: 'Yes! We promote sustainable and organic farming practices that are environmentally responsible.',
    supportTraining: 'Do you provide support and training?',
    supportAnswer: 'Our AI assistant provides 24/7 support in multiple languages with voice, text, and image-based guidance.',
    
    // Common
    online: 'Online',
    loading: 'Loading...',
    error: 'Error occurred',
    tryAgain: 'Try again'
  },
  
  ur: {
    // App Name
    appName: 'کسان بوٹ',
    tagline: 'آپ کا AI کاشتکاری مددگار',
    
    // Landing Page
    heroSubtitle: '🌾 AI سے چلنے والا کاشتکاری مددگار',
    heroTitle: 'ذہین کاشتکاری',
    heroTitleHighlight: 'آسان بنایا گیا',
    heroDescription: 'آواز، متن، یا تصاویر کے ذریعے فوری کاشتکاری مشورہ حاصل کریں۔ اپنی زبان میں بولیں، AI سے ماہرانہ حل پائیں۔',
    startChatting: 'ابھی بات چیت شروع کریں',
    
    // Stats
    languages: 'زبانیں',
    available: 'دستیاب',
    aiPowered: 'AI سے چلنے والا',
    
    // Features Section
    featuresTitle: 'جوابات حاصل کرنے کے تین طریقے',
    featuresSubtitle: 'وہ طریقہ منتخب کریں جو آپ کے لیے بہترین ہو',
    
    // Voice Mode
    voiceMode: 'آواز کا طریقہ',
    voiceModeDesc: 'اپنی زبان میں قدرتی طور پر بولیں۔ کھیت میں کام کرتے وقت ہاتھ آزاد رکھ کر سوالات پوچھیں۔',
    multiLanguageSupport: 'کئی زبانوں کی سپورٹ',
    audioResponses: 'آڈیو جوابات',
    
    // Text Chat
    textChat: 'متنی بات چیت',
    textChatDesc: 'اپنے سوالات ٹائپ کریں اور فوری تفصیلی جوابات حاصل کریں۔ فوری سوالات کے لیے بہترین۔',
    fastResponses: 'تیز جوابات',
    easyReference: 'آسان حوالہ',
    
    // Image Analysis
    imageAnalysis: 'تصویری تجزیہ',
    imageAnalysisDesc: 'فصلوں یا کیڑوں کی تصاویر اپ لوڈ کریں۔ فوری بیماری کی شناخت اور علاج کا مشورہ حاصل کریں۔',
    diseaseDetection: 'بیماری کی شناخت',
    treatmentSuggestions: 'علاج کی تجاویز',
    
    // CTA Section
    ctaTitle: 'اپنی کاشتکاری کو تبدیل کرنے کے لیے تیار ہیں؟',
    ctaSubtitle: 'ہزاروں کسانوں کے ساتھ شامل ہوں جو فوری AI مشورہ حاصل کر رہے ہیں',
    startFirstChat: 'اپنی پہلی بات چیت شروع کریں ←',
    
    // Footer
    aboutTitle: 'کسان بوٹ کے بارے میں',
    aboutDesc: 'ایک AI سے چلنے والا کاشتکاری مددگار جو کسانوں کو فصلی مشورہ، بیماری کی شناخت، اور کئی زبانوں میں زرعی رہنمائی فراہم کرتا ہے۔',
    poweredBy: 'طاقت فراہم کنندہ',
    googleGemini: 'گوگل جیمینی AI',
    speechRecognition: 'گروق وِسپر (تقریر کی شناخت)',
    textToSpeech: 'gTTS (متن سے آواز)',
    techStack: 'ری ایکٹ + فلاسک',
    connect: 'رابطہ',
    copyright: '© 2025 کسان بوٹ — کسانوں کے لیے 💚 کے ساتھ بنایا گیا',
    projectNote: 'پروجیکٹ ایکسپو ڈیمو | زراعت کے لیے AI',
    
    // Chat Interface
    backToHome: 'گھر واپس',
    clearChat: 'بات چیت صاف کریں',
    kisanBotOnline: 'کسان بوٹ آن لائن',
    startConversation: 'بات چیت شروع کریں',
    conversationSubtitle: 'پیغام ٹائپ کریں، آواز ریکارڈ کریں، یا تصویر اپ لوڈ کریں',
    chatPlaceholder: 'کاشتکاری، فصلوں، کیڑوں کے بارے میں پوچھیں...',
    playAudio: 'آڈیو چلائیں',
    pause: 'رک جائیں',
    resume: 'دوبارہ شروع کریں',
    stop: 'رک جائیں',
    youSaid: 'آپ نے کہا:',
    
    // Language Options
    english: 'انگریزی',
    urdu: 'اردو',
    punjabi: 'پنجابی',
    
    // Settings
    languageSettings: 'زبان کی ترتیبات',
    selectLanguage: 'اپنی پسندیدہ زبان منتخب کریں',
    
    // Demo Chat
    demoQuestion: 'ٹماٹر کی بیماری سے کیسے بچاؤں؟',
    demoAnswer: 'تانبے پر مبنی فنگی سائیڈ استعمال کریں اور ہوا کی گردش کے لیے مناسب فاصلہ رکھیں...',
    
    // Innovation Section
    innovatingFuture: 'مستقبل میں جدت',
    ofAgriculture: 'زراعت کا',
    kisanBotCombines: 'کسان بوٹ جدید ٹیکنالوجی اور پائیدار طریقوں کو ملا کر کسانوں کو بہتر فصلیں اگانے اور پیداوار بڑھانے میں مدد کرتا ہے۔',
    smartFarmingTech: 'سمارٹ فارمنگ ٹیکنالوجی',
    sustainableAgriculture: 'پائیدار زراعت',
    customerSatisfaction: 'کسٹمر کی اطمینان',
    farmersTrust: 'کسان ہماری AI سے چلنے والی زرعی رہنمائی پر بھروسہ کرتے ہیں',
    languagesSupported: 'زبانوں کی سپورٹ',
    multipleLanguages: 'کسانوں کی بہتر رسائی کے لیے متعدد زبانیں',
    aiPoweredStat: 'AI سے چلنے والا',
    advancedAI: 'سمارٹ فارمنگ حل کے لیے جدید مصنوعی ذہانت',
    
    // Technology Section
    technologyMeets: 'جہاں ٹیکنالوجی ملتی ہے',
    rootsOfNature: 'قدرت کی جڑوں سے',
    sustainableFarmingClimate: 'موسمیاتی تبدیلی کے دور میں پائیدار کاشتکاری',
    climateDescription: 'جدید AI ٹیکنالوجی کسانوں کو بدلتے موسمیاتی حالات کے ساتھ ڈھالنے اور پائیدار طریقے اپنانے میں مدد کرتی ہے۔',
    greenerFuture: 'تجدیدی کاشتکاری کے ذریعے سبز مستقبل کی تعمیر',
    regenerativeDescription: 'ہمارا پلیٹ فارم تجدیدی زرعی طریقوں کو فروغ دیتا ہے جو مٹی کی صحت اور حیاتیاتی تنوع کو بحال کرتے ہیں۔',
    realWorldTech: 'حقیقی دنیا کی ٹیکنالوجی جدید زراعت کو تبدیل کر رہی ہے',
    techDescription: 'AI سے چلنے والی فصل کی نگرانی سے لے کر درست زراعت تک، ٹیکنالوجی کاشتکاری میں انقلاب لا رہی ہے۔',
    sustainableBiodiversity: 'پائیدار کاشتکاری حیاتیاتی تنوع ہے',
    biodiversityDescription: 'صحت مند ماحولیاتی نظام کے لیے پائیدار کاشتکاری کے طریقوں کے ذریعے حیاتیاتی تنوع کو فروغ دینا۔',
    
    // FAQ Section
    gotQuestions: 'سوالات ہیں؟ ہم نے',
    gotYouCovered: 'آپ کا خیال رکھا ہے۔',
    faqDescription: 'ہمارے AI کاشتکاری مددگار کے بارے میں عام سوالات کے جوابات تلاش کریں اور یہ جانیں کہ یہ آپ کی زرعی طریقوں کو بہتر بنانے میں کیسے مدد کر سکتا ہے۔',
    whatSolutions: 'آپ کس قسم کے کاشتکاری حل پیش کرتے ہیں؟',
    solutionsAnswer: 'ہم فصل کے انتظام، کیڑوں کی کنٹرول، بیماری کی شناخت، اور پائیدار کاشتکاری کے طریقوں پر AI سے چلنے والا مشورہ فراہم کرتے ہیں۔',
    howToStart: 'میں کسان بوٹ کا پلیٹ فارم کیسے استعمال شروع کر سکتا ہوں؟',
    startAnswer: 'بس "بات چیت شروع کریں" پر کلک کریں اور اپنی پسندیدہ زبان میں سوالات پوچھنا شروع کریں۔ رجسٹریشن کی ضرورت نہیں!',
    ecoFriendly: 'کیا آپ کی ٹیکنالوجیز ماحول دوست ہیں؟',
    ecoAnswer: 'جی ہاں! ہم پائیدار اور نامیاتی کاشتکاری کے طریقوں کو فروغ دیتے ہیں جو ماحولیاتی طور پر ذمہ دار ہیں۔',
    supportTraining: 'کیا آپ سپورٹ اور تربیت فراہم کرتے ہیں؟',
    supportAnswer: 'ہمارا AI مددگار آواز، متن، اور تصویر پر مبنی رہنمائی کے ساتھ متعدد زبانوں میں 24/7 سپورٹ فراہم کرتا ہے۔',
    
    // Common
    online: 'آن لائن',
    loading: 'لوڈ ہو رہا ہے...',
    error: 'خرابی ہوئی',
    tryAgain: 'دوبارہ کوشش کریں'
  },
  
  pnb: {
    // App Name
    appName: 'کسان بوٹ',
    tagline: 'توانڈی سمارٹ کھیتی دا ساتھی',
    
    // Landing Page
    heroSubtitle: '🌾 AI نال چلن والا کھیتی دا ساتھی',
    heroTitle: 'سمارٹ کھیتی',
    heroTitleHighlight: 'آسان بنایا گیا',
    heroDescription: 'آواز، متن، یا تصویراں دے ذریعے فوری کھیتی دا مشورہ حاصل کرو۔ اپنی زبان وچ بولو، AI توں ماہر حل پاؤ۔',
    startChatting: 'ہن گل بات شروع کرو',
    
    // Stats
    languages: 'زبانیں',
    available: 'دستیاب',
    aiPowered: 'AI نال چلن والا',
    
    // Features Section
    featuresTitle: 'جواب حاصل کرن دے تین طریقے',
    featuresSubtitle: 'اوہ طریقہ چنو جو تہاڈے لئی بہترین اے',
    
    // Voice Mode
    voiceMode: 'آواز دا طریقہ',
    voiceModeDesc: 'اپنی زبان وچ قدرتی طور تے بولو۔ کھیت وچ کم کردے ویلے ہتھ آزاد رکھ کے سوال پچھو۔',
    multiLanguageSupport: 'کئی زبانیں دی سپورٹ',
    audioResponses: 'آڈیو جواب',
    
    // Text Chat
    textChat: 'متنی گل بات',
    textChatDesc: 'اپنے سوال ٹائپ کرو تے فوری تفصیلی جواب حاصل کرو۔ فوری سوالیں لئی بہترین۔',
    fastResponses: 'تیز جواب',
    easyReference: 'آسان حوالہ',
    
    // Image Analysis
    imageAnalysis: 'تصویری تجزیہ',
    imageAnalysisDesc: 'فصلیں یا کیڑیں دیاں تصویراں اپ لوڈ کرو۔ فوری بیماری دی شناخت تے علاج دا مشورہ حاصل کرو۔',
    diseaseDetection: 'بیماری دی شناخت',
    treatmentSuggestions: 'علاج دیاں تجاویز',
    
    // CTA Section
    ctaTitle: 'اپنی کھیتی نوں بدلن لئی تیار او؟',
    ctaSubtitle: 'ہزاراں کسانیں نال شامل ہوو جو فوری AI مشورہ حاصل کر رہے نیں',
    startFirstChat: 'اپنی پہلی گل بات شروع کرو ←',
    
    // Footer
    aboutTitle: 'کسان بوٹ بارے',
    aboutDesc: 'اک AI نال چلن والا کھیتی دا ساتھی جو کسانیں نوں فصلی مشورہ، بیماری دی شناخت، تے کئی زبانیں وچ زرعی رہنمائی فراہم کردا اے۔',
    poweredBy: 'طاقت فراہم کنندہ',
    googleGemini: 'گوگل جیمینی AI',
    speechRecognition: 'گروق وسپر (تقریر دی شناخت)',
    textToSpeech: 'gTTS (متن توں آواز)',
    techStack: 'ری ایکٹ + فلاسک',
    connect: 'رابطہ',
    copyright: '© 2025 کسان بوٹ — کسانیں لئی 💚 نال بنایا گیا',
    projectNote: 'پروجیکٹ ایکسپو ڈیمو | زراعت لئی AI',
    
    // Chat Interface
    backToHome: 'گھر واپس',
    clearChat: 'گل بات صاف کرو',
    kisanBotOnline: 'کسان بوٹ آن لائن',
    startConversation: 'گل بات شروع کرو',
    conversationSubtitle: 'پیغام ٹائپ کرو، آواز ریکارڈ کرو، یا تصویر اپ لوڈ کرو',
    chatPlaceholder: 'کھیتی، فصلیں، کیڑیں بارے پچھو...',
    playAudio: 'آڈیو چلاؤ',
    pause: 'رک جاؤ',
    resume: 'دوبارہ شروع کرو',
    stop: 'رک جاؤ',
    youSaid: 'تسیں کیہا:',
    
    // Language Options
    english: 'انگریزی',
    urdu: 'اردو',
    punjabi: 'پنجابی',
    sindhi: 'سندھی',
    pashto: 'پشتو',
    balochi: 'بلوچی',
    
    // Settings
    languageSettings: 'زبان دیاں ترتیبیں',
    selectLanguage: 'اپنی پسندیدہ زبان چنو',
    
    // Demo Chat
    demoQuestion: 'ٹماٹر دی بیماری توں کیویں بچاؤں؟',
    demoAnswer: 'تانبے والے فنگی سائیڈ ورتو تے ہوا دے گیر لئی صحیح فاصلہ رکھو...',
    
    // Innovation Section
    innovatingFuture: 'مستقبل وچ نویں ایجاد',
    ofAgriculture: 'کھیتی دا',
    kisanBotCombines: 'کسان بوٹ جدید ٹیکنالوجی تے پائیدار طریقیاں نوں ملا کے کسانیں نوں بہتر فصلیں اگان تے پیداوار ودھان وچ مدد کردا اے۔',
    smartFarmingTech: 'سمارٹ کھیتی ٹیکنالوجی',
    sustainableAgriculture: 'پائیدار کھیتی',
    customerSatisfaction: 'کسٹمر دی اطمینان',
    farmersTrust: 'کسان ساڈی AI نال چلن والی کھیتی دی رہنمائی تے بھروسہ کردے نیں',
    languagesSupported: 'زبانیں دی سپورٹ',
    multipleLanguages: 'کسانیں دی بہتر رسائی لئی کئی زبانیں',
    aiPoweredStat: 'AI نال چلن والا',
    advancedAI: 'سمارٹ کھیتی حل لئی جدید مصنوعی ذہانت',
    
    // Technology Section
    technologyMeets: 'جتھے ٹیکنالوجی ملدی اے',
    rootsOfNature: 'قدرت دیاں جڑاں نال',
    sustainableFarmingClimate: 'موسمیاتی تبدیلی دے دور وچ پائیدار کھیتی',
    climateDescription: 'جدید AI ٹیکنالوجی کسانیں نوں بدلدے موسمیاتی حالات نال ڈھلن تے پائیدار طریقے اپنان وچ مدد کردی اے۔',
    greenerFuture: 'تجدیدی کھیتی دے ذریعے سبز مستقبل دی تعمیر',
    regenerativeDescription: 'ساڈا پلیٹ فارم تجدیدی کھیتی دے طریقیاں نوں فروغ دیندا اے جو مٹی دی صحت تے حیاتیاتی تنوع نوں بحال کردے نیں۔',
    realWorldTech: 'حقیقی دنیا دی ٹیکنالوجی جدید کھیتی نوں بدل رہی اے',
    techDescription: 'AI نال چلن والی فصل دی نگرانی توں لے کے درست کھیتی تک، ٹیکنالوجی کھیتی وچ انقلاب لیا رہی اے۔',
    sustainableBiodiversity: 'پائیدار کھیتی حیاتیاتی تنوع اے',
    biodiversityDescription: 'صحت مند ماحولیاتی نظام لئی پائیدار کھیتی دے طریقیاں دے ذریعے حیاتیاتی تنوع نوں فروغ دینا۔',
    
    // FAQ Section
    gotQuestions: 'سوال نیں؟ اساں',
    gotYouCovered: 'تہاڈا خیال رکھیا اے۔',
    faqDescription: 'ساڈے AI کھیتی مددگار بارے عام سوالیں دے جواب لبھو تے جانو کہ ایہہ تہاڈے کھیتی دے طریقیاں نوں بہتر بنان وچ کیویں مدد کر سکدا اے۔',
    whatSolutions: 'تسیں کس قسم دے کھیتی حل پیش کردے او؟',
    solutionsAnswer: 'اساں فصل دے انتظام، کیڑیاں دی کنٹرول، بیماری دی شناخت، تے پائیدار کھیتی دے طریقیاں تے AI نال چلن والا مشورہ فراہم کردے آں۔',
    howToStart: 'میں کسان بوٹ دا پلیٹ فارم کیویں استعمال شروع کر سکاں؟',
    startAnswer: 'بس "گل بات شروع کرو" تے کلک کرو تے اپنی پسندیدہ زبان وچ سوال پچھنا شروع کرو۔ رجسٹریشن دی لوڑ نہیں!',
    ecoFriendly: 'کی تہاڈی ٹیکنالوجیز ماحول دوست نیں؟',
    ecoAnswer: 'جی ہاں! اساں پائیدار تے نامیاتی کھیتی دے طریقیاں نوں فروغ دیندے آں جو ماحولیاتی طور تے ذمہ دار نیں۔',
    supportTraining: 'کی تسیں سپورٹ تے تربیت فراہم کردے او؟',
    supportAnswer: 'ساڈا AI مددگار آواز، متن، تے تصویر تے مبنی رہنمائی نال کئی زبانیں وچ 24/7 سپورٹ فراہم کردا اے۔',
    
    // Common
    online: 'آن لائن',
    loading: 'لوڈ ہو رہیا اے...',
    error: 'خرابی ہوئی',
    tryAgain: 'دوبارہ کوشش کرو'
  },

  sd: {
    // App Name
    appName: 'کسان بوٽ',
    tagline: 'توھانجو سمارٽ زراعت جو مددگار',
    
    // Landing Page
    heroSubtitle: '🌾 AI سان هلندڙ زراعت جو مددگار',
    heroTitle: 'سمارٽ زراعت',
    heroTitleHighlight: 'آسان ٺاهيو ويو',
    heroDescription: 'آواز، متن، يا تصويرن جي ذريعي فوري زراعت جو صلاح حاصل کرو۔ پنهنجي ٻولي ۾ ڳالهايو، AI کان ماهر حل حاصل کرو۔',
    startChatting: 'هاڻي ڳالهه ٻولهه شروع کرو',
    
    // Stats
    languages: 'ٻوليون',
    available: 'دستياب',
    aiPowered: 'AI سان هلندڙ',
    
    // Features Section
    featuresTitle: 'جواب حاصل ڪرڻ جا ٽي طريقا',
    featuresSubtitle: 'اهو طريقو چونڊيو جيڪو توهان لاءِ بهترين آهي',
    
    // Voice Mode
    voiceMode: 'آواز جو طريقو',
    voiceModeDesc: 'پنهنجي ٻولي ۾ قدرتي طور تي ڳالهايو۔ زمين ۾ ڪم ڪندي وقت هٿ آزاد رکي سوال پڇو۔',
    multiLanguageSupport: 'ڪيترن ئي ٻولين جي سپورٽ',
    audioResponses: 'آڊيو جواب',
    
    // Text Chat
    textChat: 'متني ڳالهه ٻولهه',
    textChatDesc: 'پنهنجا سوال ٽائپ کرو ۽ فوري تفصيلي جواب حاصل کرو۔ فوري سوالن لاءِ بهترين۔',
    fastResponses: 'تيز جواب',
    easyReference: 'آسان حوالو',
    
    // Image Analysis
    imageAnalysis: 'تصويري تجزيو',
    imageAnalysisDesc: 'فصلن يا کيڙن جون تصويرون اپ لوڊ کرو۔ فوري بيماري جي سڃاڻپ ۽ علاج جو صلاح حاصل کرو۔',
    diseaseDetection: 'بيماري جي سڃاڻپ',
    treatmentSuggestions: 'علاج جون تجويزون',
    
    // CTA Section
    ctaTitle: 'پنهنجي زراعت کي تبديل ڪرڻ لاءِ تيار آهيو؟',
    ctaSubtitle: 'هزارين هارين سان شامل ٿيو جيڪي فوري AI صلاح حاصل ڪري رهيا آهن',
    startFirstChat: 'پنهنجي پهرين ڳالهه ٻولهه شروع کرو ←',
    
    // Footer
    aboutTitle: 'کسان بوٽ بابت',
    aboutDesc: 'هڪ AI سان هلندڙ زراعت جو مددگار جيڪو هارين کي فصلي صلاح، بيماري جي سڃاڻپ، ۽ ڪيترن ئي ٻولين ۾ زرعي رهنمائي فراهم ڪري ٿو۔',
    poweredBy: 'طاقت فراهم ڪندڙ',
    googleGemini: 'گوگل جيميني AI',
    speechRecognition: 'گروق وسپر (تقرير جي سڃاڻپ)',
    textToSpeech: 'gTTS (متن کان آواز)',
    techStack: 'ري ايڪٽ + فلاسڪ',
    connect: 'رابطو',
    copyright: '© 2025 کسان بوٽ — هارين لاءِ 💚 سان ٺاهيو ويو',
    projectNote: 'پروجيڪٽ ايڪسپو ڊيمو | زراعت لاءِ AI',
    
    // Chat Interface
    backToHome: 'گهر واپس',
    clearChat: 'ڳالهه ٻولهه صاف کرو',
    kisanBotOnline: 'کسان بوٽ آن لائن',
    startConversation: 'ڳالهه ٻولهه شروع کرو',
    conversationSubtitle: 'پيغام ٽائپ کرو، آواز رڪارڊ کرو، يا تصوير اپ لوڊ کرو',
    chatPlaceholder: 'زراعت، فصلن، کيڙن بابت پڇو...',
    playAudio: 'آڊيو هلايو',
    pause: 'رڪو',
    resume: 'ٻيهر شروع کرو',
    stop: 'رڪو',
    youSaid: 'توهان چيو:',
    
    // Language Options
    english: 'انگريزي',
    urdu: 'اردو',
    punjabi: 'پنجابي',
    sindhi: 'سنڌي',
    pashto: 'پشتو',
    balochi: 'بلوچي',
    
    // Settings
    languageSettings: 'ٻولي جون سيٽنگون',
    selectLanguage: 'پنهنجي پسنديده ٻولي چونڊيو',
    
    // Demo Chat
    demoQuestion: 'ٽماٽر جي بيماري کان ڪيئن بچاءُ؟',
    demoAnswer: 'ٽامبي جي بنياد تي فنگي سائيڊ استعمال کرو ۽ هوا جي گردش لاءِ مناسب فاصلو رکو...',
    
    // Innovation Section
    innovatingFuture: 'مستقبل ۾ جدت',
    ofAgriculture: 'زراعت جو',
    kisanBotCombines: 'کسان بوٽ جديد ٽيڪنالاجي ۽ پائيدار طريقن کي ملائي هارين کي بهتر فصل پوکڻ ۽ پيداوار وڌائڻ ۾ مدد ڪري ٿو۔',
    smartFarmingTech: 'سمارٽ زراعت ٽيڪنالاجي',
    sustainableAgriculture: 'پائيدار زراعت',
    customerSatisfaction: 'ڪسٽمر جي اطمينان',
    farmersTrust: 'هاري اسان جي AI سان هلندڙ زرعي رهنمائي تي ڀروسو ڪن ٿا',
    languagesSupported: 'ٻولين جي سپورٽ',
    multipleLanguages: 'هارين جي بهتر رسائي لاءِ ڪيتريون ئي ٻوليون',
    aiPoweredStat: 'AI سان هلندڙ',
    advancedAI: 'سمارٽ زراعت حل لاءِ جديد مصنوعي ذهانت',
    
    // Technology Section
    technologyMeets: 'جتي ٽيڪنالاجي ملي ٿي',
    rootsOfNature: 'فطرت جي پاڙن سان',
    sustainableFarmingClimate: 'موسمياتي تبديلي جي دور ۾ پائيدار زراعت',
    climateDescription: 'جديد AI ٽيڪنالاجي هارين کي بدلجندڙ موسمياتي حالتن سان ڍلڻ ۽ پائيدار طريقا اپنائڻ ۾ مدد ڪري ٿي۔',
    greenerFuture: 'تجديدي زراعت ذريعي سبز مستقبل جي تعمير',
    regenerativeDescription: 'اسان جو پليٽ فارم تجديدي زرعي طريقن کي فروغ ڏئي ٿو جيڪي مٽي جي صحت ۽ حياتياتي تنوع کي بحال ڪن ٿا۔',
    realWorldTech: 'حقيقي دنيا جي ٽيڪنالاجي جديد زراعت کي تبديل ڪري رهي آهي',
    techDescription: 'AI سان هلندڙ فصل جي نگراني کان وٺي درست زراعت تائين، ٽيڪنالاجي زراعت ۾ انقلاب آڻي رهي آهي۔',
    sustainableBiodiversity: 'پائيدار زراعت حياتياتي تنوع آهي',
    biodiversityDescription: 'صحتمند ماحولياتي نظام لاءِ پائيدار زراعت جي طريقن ذريعي حياتياتي تنوع کي فروغ ڏيڻ۔',
    
    // FAQ Section
    gotQuestions: 'سوال آهن؟ اسان',
    gotYouCovered: 'توهان جو خيال رکيو آهي۔',
    faqDescription: 'اسان جي AI زراعت مددگار بابت عام سوالن جا جواب ڳوليو ۽ ڄاڻو ته اهو توهان جي زرعي طريقن کي بهتر بنائڻ ۾ ڪيئن مدد ڪري سگهي ٿو۔',
    whatSolutions: 'توهان ڪهڙي قسم جا زراعت حل پيش ڪندا آهيو؟',
    solutionsAnswer: 'اسان فصل جي انتظام، کيڙن جي ڪنٽرول، بيماري جي سڃاڻپ، ۽ پائيدار زراعت جي طريقن تي AI سان هلندڙ صلاح فراهم ڪندا آهيون۔',
    howToStart: 'مان کسان بوٽ جو پليٽ فارم ڪيئن استعمال شروع ڪري سگهان ٿو؟',
    startAnswer: 'بس "ڳالهه ٻولهه شروع ڪريو" تي ڪلڪ ڪريو ۽ پنهنجي پسنديده ٻولي ۾ سوال پڇڻ شروع ڪريو۔ رجسٽريشن جي ضرورت ناهي!',
    ecoFriendly: 'ڇا توهان جون ٽيڪنالاجيون ماحول دوست آهن؟',
    ecoAnswer: 'جي ها! اسان پائيدار ۽ نامياتي زراعت جي طريقن کي فروغ ڏيندا آهيون جيڪي ماحولياتي طور تي ذميوار آهن۔',
    supportTraining: 'ڇا توهان سپورٽ ۽ تربيت فراهم ڪندا آهيو؟',
    supportAnswer: 'اسان جو AI مددگار آواز، متن، ۽ تصوير تي ٻڌل رهنمائي سان ڪيترن ئي ٻولين ۾ 24/7 سپورٽ فراهم ڪري ٿو۔',
    
    // Common
    online: 'آن لائن',
    loading: 'لوڊ ٿي رهيو آهي...',
    error: 'خرابي ٿي',
    tryAgain: 'ٻيهر ڪوشش ڪريو'
  },

  ps: {
    // App Name
    appName: 'کسان بوټ',
    tagline: 'ستاسو د هوښیار کرنې مرستیال',
    
    // Landing Page
    heroSubtitle: '🌾 د AI سره د کرنې مرستیال',
    heroTitle: 'هوښیار کرنه',
    heroTitleHighlight: 'اسانه شوې',
    heroDescription: 'د غږ، متن، یا انځورونو له لارې د کرنې سمدستي مشوره واخلئ. په خپله ژبه خبرې وکړئ، د AI څخه ماهرانه حلونه واخلئ۔',
    startChatting: 'اوس خبرې پیل کړئ',
    
    // Stats
    languages: 'ژبې',
    available: 'شتون لري',
    aiPowered: 'د AI سره پرمخ وړل کیږي',
    
    // Features Section
    featuresTitle: 'د ځوابونو د ترلاسه کولو درې لارې',
    featuresSubtitle: 'هغه لاره وټاکئ چې ستاسو لپاره غوره وي',
    
    // Voice Mode
    voiceMode: 'د غږ طریقه',
    voiceModeDesc: 'په خپله ژبه طبیعي ډول خبرې وکړئ. په کروندو کې د کار پر مهال لاسونه وړیا ساتل سره پوښتنې وکړئ۔',
    multiLanguageSupport: 'د ډیرو ژبو ملاتړ',
    audioResponses: 'د غږ ځوابونه',
    
    // Text Chat
    textChat: 'د متن خبرې',
    textChatDesc: 'خپلې پوښتنې ټایپ کړئ او سمدستي تفصیلي ځوابونه واخلئ. د چټکو پوښتنو لپاره غوره۔',
    fastResponses: 'چټک ځوابونه',
    easyReference: 'اسانه حواله',
    
    // Image Analysis
    imageAnalysis: 'د انځور تحلیل',
    imageAnalysisDesc: 'د فصلونو یا حشراتو انځورونه اپ لوډ کړئ. د ناروغۍ سمدستي پیژندنه او د درملنې مشوره واخلئ۔',
    diseaseDetection: 'د ناروغۍ پیژندنه',
    treatmentSuggestions: 'د درملنې وړاندیزونه',
    
    // CTA Section
    ctaTitle: 'ستاسو د کرنې د بدلولو لپاره چمتو یاست؟',
    ctaSubtitle: 'د زرګونو بزګرانو سره یوځای شئ چې د AI سمدستي مشوره ترلاسه کوي',
    startFirstChat: 'خپلې لومړۍ خبرې پیل کړئ ←',
    
    // Footer
    aboutTitle: 'د کسان بوټ په اړه',
    aboutDesc: 'د AI سره پرمخ وړل کیدونکی د کرنې مرستیال چې بزګرانو ته د فصلونو مشوره، د ناروغۍ پیژندنه، او په ډیرو ژبو کې د کرنې لارښوونه وړاندې کوي۔',
    poweredBy: 'د ځواک چمتو کوونکی',
    googleGemini: 'ګوګل جیمیني AI',
    speechRecognition: 'ګروق ویسپر (د وینا پیژندنه)',
    textToSpeech: 'gTTS (د متن څخه غږ)',
    techStack: 'ری ایکټ + فلاسک',
    connect: 'اړیکه',
    copyright: '© 2025 کسان بوټ — د بزګرانو لپاره د 💚 سره جوړ شوی',
    projectNote: 'د پروژې ایکسپو ډیمو | د کرنې لپاره AI',
    
    // Chat Interface
    backToHome: 'کور ته بیرته',
    clearChat: 'خبرې پاکې کړئ',
    kisanBotOnline: 'کسان بوټ آن لاین',
    startConversation: 'خبرې پیل کړئ',
    conversationSubtitle: 'پیغام ټایپ کړئ، غږ ثبت کړئ، یا انځور اپ لوډ کړئ',
    chatPlaceholder: 'د کرنې، فصلونو، حشراتو په اړه پوښتنه وکړئ...',
    playAudio: 'غږ پیل کړئ',
    pause: 'ودرول',
    resume: 'بیا پیل کړئ',
    stop: 'ودرول',
    youSaid: 'تاسو وویل:',
    
    // Language Options
    english: 'انګلیسي',
    urdu: 'اردو',
    punjabi: 'پنجابي',
    sindhi: 'سندهي',
    pashto: 'پښتو',
    balochi: 'بلوڅي',
    
    // Settings
    languageSettings: 'د ژبې تنظیمات',
    selectLanguage: 'خپله غوره ژبه وټاکئ',
    
    // Demo Chat
    demoQuestion: 'د روميانو د ناروغۍ څخه څنګه مخنیوی وکړم؟',
    demoAnswer: 'د مسو پر بنسټ فنګي سایډ وکاروئ او د هوا د جریان لپاره مناسبه فاصله وساتئ...',
    
    // Innovation Section
    innovatingFuture: 'د راتلونکي ښه کول',
    ofAgriculture: 'د کرنې',
    kisanBotCombines: 'کسان بوټ د عصري ټیکنالوژۍ او دوامداره میتودونو سره یوځای کوي ترڅو بزګرانو ته د ښو فصلونو کرلو او د تولیداتو د زیاتوالي کې مرسته وکړي۔',
    smartFarmingTech: 'د هوښیار کرنې ټیکنالوژي',
    sustainableAgriculture: 'دوامداره کرنه',
    customerSatisfaction: 'د پیرودونکي خوښي',
    farmersTrust: 'بزګران زموږ د AI لخوا پرمخ وړل کیدونکي د کرنې لارښوونې باندې باور لري',
    languagesSupported: 'د ژبو ملاتړ',
    multipleLanguages: 'د بزګرانو د ښه لاسرسي لپاره ډیرې ژبې',
    aiPoweredStat: 'د AI لخوا پرمخ وړل کیږي',
    advancedAI: 'د هوښیار کرنې د حلونو لپاره پرمختللی مصنوعي ذهانت',
    
    // Technology Section
    technologyMeets: 'چیرته چې ټیکنالوژي ملي',
    rootsOfNature: 'د طبیعت د ریښو سره',
    sustainableFarmingClimate: 'د اقلیمي بدلون په دور کې دوامداره کرنه',
    climateDescription: 'پرمختللی AI ټیکنالوژي بزګرانو ته د بدلیدونکو اقلیمي شرایطو سره د موافقت او د دوامدارو طریقو د پلي کولو کې مرسته کوي۔',
    greenerFuture: 'د بیا رغونې کرنې له لارې د شنه راتلونکي جوړول',
    regenerativeDescription: 'زموږ پلیټ فارم د بیا رغونې د کرنې طریقو ته وده ورکوي چې د خاورې روغتیا او د ژوندیو تنوع بیا رغوي۔',
    realWorldTech: 'د ریښتیني نړۍ ټیکنالوژي د عصري کرنې بدلون کوي',
    techDescription: 'د AI لخوا پرمخ وړل کیدونکي د فصلونو څارنې څخه نیولې تر دقیقې کرنې پورې، ټیکنالوژي په کرنه کې انقلاب راوړي۔',
    sustainableBiodiversity: 'دوامداره کرنه د ژوندیو تنوع دی',
    biodiversityDescription: 'د روغ چاپیریال د سیسټم لپاره د دوامدارو کرنې طریقو له لارې د ژوندیو تنوع ته وده ورکول۔',
    
    // FAQ Section
    gotQuestions: 'پوښتنې لرئ؟ موږ',
    gotYouCovered: 'ستاسو پاملرنه کړې۔',
    faqDescription: 'زموږ د AI کرنې مرستیال په اړه د عامو پوښتنو ځوابونه ومومئ او پوه شئ چې دا ستاسو د کرنې طریقو ښه کولو کې څنګه مرسته کولی شي۔',
    whatSolutions: 'تاسو د کرنې د کومو ډولونو حلونه وړاندې کوئ؟',
    solutionsAnswer: 'موږ د فصلونو د مدیریت، د آفتونو د کنټرول، د ناروغیو د پیژندنې، او د دوامدارو کرنې طریقو په اړه د AI لخوا پرمخ وړل کیدونکي مشوره وړاندې کوو۔',
    howToStart: 'زه د کسان بوټ پلیټ فارم څنګه کارول پیل کړم؟',
    startAnswer: 'یوازې "خبرې پیل کړئ" باندې کلیک وکړئ او په خپله خوښه ژبه کې پوښتنې پیل کړئ۔ د ثبت نوم ته اړتیا نشته!',
    ecoFriendly: 'ایا ستاسو ټیکنالوژي د چاپیریال دوستانه دي؟',
    ecoAnswer: 'هو! موږ د دوامدارو او عضوي کرنې طریقو ته وده ورکوو چې د چاپیریال له پلوه مسؤل دي۔',
    supportTraining: 'ایا تاسو ملاتړ او روزنه وړاندې کوئ؟',
    supportAnswer: 'زموږ AI مرستیال د غږ، متن، او انځور پر بنسټ لارښوونې سره په ډیرو ژبو کې 24/7 ملاتړ وړاندې کوي۔',
    
    // Common
    online: 'آن لاین',
    loading: 'لوډ کیږي...',
    error: 'تېروتنه رامنځته شوه',
    tryAgain: 'بیا هڅه وکړئ'
  },

  bal: {
    // App Name
    appName: 'کسان بوٹ',
    tagline: 'شماہِ ہوشیار زراعتءَ مددگار',
    
    // Landing Page
    heroSubtitle: '🌾 AI گون زراعتءِ مددگار',
    heroTitle: 'ہوشیار زراعت',
    heroTitleHighlight: 'آسان کتگ',
    heroDescription: 'آواز، نبشتہ، یا تصویرانی وسیلہ گون زراعتءِ فوری مشورہ بگیرت۔ وتی زبانا تقریر کنت، AI گون ماہرانہ حل بگیرت۔',
    startChatting: 'ایشا گپ شروع کنت',
    
    // Stats
    languages: 'زبانان',
    available: 'دستیاب',
    aiPowered: 'AI گون چلگ',
    
    // Features Section
    featuresTitle: 'جوابانی حاصل کنگءِ سہ طریقہ',
    featuresSubtitle: 'اے طریقہ انتخاب کنت کہ شمی واستہ بہترین انت',
    
    // Voice Mode
    voiceMode: 'آوازءِ طریقہ',
    voiceModeDesc: 'وتی زبانا قدرتی طورا تقریر کنت۔ کشت و کارا وختا دست آزاد داشتگ گون سوال پرست۔',
    multiLanguageSupport: 'گیشترین زبانانی سپورٹ',
    audioResponses: 'آڈیو جوابان',
    
    // Text Chat
    textChat: 'نبشتگین گپ',
    textChatDesc: 'وتی سوالان ٹائپ کنت و فوری تفصیلی جوابان بگیرت۔ فوری سوالانی واستہ بہترین۔',
    fastResponses: 'تیز جوابان',
    easyReference: 'آسان حوالہ',
    
    // Image Analysis
    imageAnalysis: 'تصویرءِ تجزیہ',
    imageAnalysisDesc: 'پیداوارانی یا کیڑانی تصویران اپ لوڈ کنت۔ فوری بیماریءِ شناخت و علاجءِ مشورہ بگیرت۔',
    diseaseDetection: 'بیماریءِ شناخت',
    treatmentSuggestions: 'علاجءِ تجویزان',
    
    // CTA Section
    ctaTitle: 'وتی زراعت بدل کنگ واستہ تیار انت؟',
    ctaSubtitle: 'ہزاران کسانانی گون شامل بیت کہ فوری AI مشورہ گرگ انت',
    startFirstChat: 'وتی اولین گپ شروع کنت ←',
    
    // Footer
    aboutTitle: 'کسان بوٹءِ بابتا',
    aboutDesc: 'یک AI گون چلگین زراعتءِ مددگار کہ کسانانا پیداوارءِ مشورہ، بیماریءِ شناخت، و گیشترین زبانانا زرعی رہنمائی دیت۔',
    poweredBy: 'طاقتءِ فراہم کنوک',
    googleGemini: 'گوگل جیمینی AI',
    speechRecognition: 'گروق وسپر (تقریرءِ شناخت)',
    textToSpeech: 'gTTS (نبشتہ گون آواز)',
    techStack: 'ری ایکٹ + فلاسک',
    connect: 'رابطہ',
    copyright: '© 2025 کسان بوٹ — کسانانی واستہ 💚 گون جاہ کتگ',
    projectNote: 'پروجیکٹ ایکسپو ڈیمو | زراعت واستہ AI',
    
    // Chat Interface
    backToHome: 'لوگا پدا برگشت',
    clearChat: 'گپ پاک کنت',
    kisanBotOnline: 'کسان بوٹ آن لائن',
    startConversation: 'گپ شروع کنت',
    conversationSubtitle: 'پیام ٹائپ کنت، آواز ریکارڈ کنت، یا تصویر اپ لوڈ کنت',
    chatPlaceholder: 'زراعت، پیداوار، کیڑانی بابتا پرست...',
    playAudio: 'آڈیو چلاءِت',
    pause: 'وادار',
    resume: 'دوبارہ شروع کنت',
    stop: 'وادار',
    youSaid: 'شما گوت:',
    
    // Language Options
    english: 'انگریزی',
    urdu: 'اردو',
    punjabi: 'پنجابی',
    sindhi: 'سندھی',
    pashto: 'پشتو',
    balochi: 'بلوچی',
    
    // Settings
    languageSettings: 'زبانءِ ترتیبان',
    selectLanguage: 'وتی پسندیدہ زبان انتخاب کنت',
    
    // Demo Chat
    demoQuestion: 'ٹماٹرءِ بیماری گون چون محفوظ بمانم؟',
    demoAnswer: 'تانبہءِ بنیادا فنگی سائیڈ استعمال کنت و ہوائی گردشءِ واستہ مناسب فاصلہ داشت...',
    
    // Innovation Section
    innovatingFuture: 'آیندہءِ نوکیں کتگ',
    ofAgriculture: 'زراعتءِ',
    kisanBotCombines: 'کسان بوٹ نوکیں ٹیکنالوجی و پائیدار طریقہ انی یکجا کنت تا کسانانا بہتر پیداوار کشت کتگ و تولید زیات کتگ ءِ واستہ کمک کنت۔',
    smartFarmingTech: 'ہوشیار زراعتءِ ٹیکنالوجی',
    sustainableAgriculture: 'پائیدار زراعت',
    customerSatisfaction: 'کسٹمرءِ اطمینان',
    farmersTrust: 'کسانان ما ءِ AI گون چلگین زرعی رہنمائی ءَ باور کنت',
    languagesSupported: 'زبانانی سپورٹ',
    multipleLanguages: 'کسانانی بہتر رسائی واستہ گیشترین زبانان',
    aiPoweredStat: 'AI گون چلگ',
    advancedAI: 'ہوشیار زراعت حل واستہ پیش رپتہ مصنوعی ذہانت',
    
    // Technology Section
    technologyMeets: 'کجا ٹیکنالوجی ملگ بیت',
    rootsOfNature: 'قدرتءِ ریشہ انی گون',
    sustainableFarmingClimate: 'آب و ہوائی تبدیلیءِ دورا پائیدار زراعت',
    climateDescription: 'پیش رپتہ AI ٹیکنالوجی کسانانا بدل بوکین آب و ہوائی حالت انی گون سازگار بوہگ و پائیدار طریقہ اپنائگ ءِ واستہ کمک کنت۔',
    greenerFuture: 'تجدیدی زراعتءِ وسیلہ گون سبز آیندہءِ جاہ کتگ',
    regenerativeDescription: 'ما ءِ پلیٹ فارم تجدیدی زرعی طریقہ انا فروغ دیت کہ خاک ءِ تندرستی و حیاتیاتی تنوع بحال کنت۔',
    realWorldTech: 'حقیقی دنیاءِ ٹیکنالوجی نوکیں زراعت بدل کنت',
    techDescription: 'AI گون چلگین فصل ءِ نگرانی گون شروع کتگ تا درست زراعت تک، ٹیکنالوجی زراعت ءَ انقلاب آورت۔',
    sustainableBiodiversity: 'پائیدار زراعت حیاتیاتی تنوع انت',
    biodiversityDescription: 'تندرست ماحولیاتی نظام واستہ پائیدار زراعتءِ طریقہ انی وسیلہ گون حیاتیاتی تنوع ءَ فروغ دیگ۔',
    
    // FAQ Section
    gotQuestions: 'سوال ہست؟ ما',
    gotYouCovered: 'شمی خیال داشتگ۔',
    faqDescription: 'ما ءِ AI زراعت مددگار ءِ بابتا عام سوالانی جواب بگیرت و زانت کہ ای شمی زرعی طریقہ انی بہتر کتگ ءَ چون کمک کنت بیت۔',
    whatSolutions: 'شما چہ نوعءِ زراعت حل پیش کنت؟',
    solutionsAnswer: 'ما فصل ءِ انتظام، کیڑانی کنٹرول، بیماریءِ شناخت، و پائیدار زراعتءِ طریقہ انی سرا AI گون چلگین مشورہ فراہم کنیں۔',
    howToStart: 'من کسان بوٹءِ پلیٹ فارم چون استعمال شروع کنم؟',
    startAnswer: 'بس "گپ شروع کنت" ءَ کلک کنت و وتی پسندیدہ زبانا سوال پرسگ شروع کنت۔ رجسٹریشن ءِ ضرورت نیست!',
    ecoFriendly: 'آیا شمی ٹیکنالوجی ان ماحول دوست انت؟',
    ecoAnswer: 'بلے! ما پائیدار و نامیاتی زراعتءِ طریقہ انا فروغ دیں کہ ماحولیاتی لحاظا ذمہ دار انت۔',
    supportTraining: 'آیا شما سپورٹ و تربیت فراہم کنت؟',
    supportAnswer: 'ما ءِ AI مددگار آواز، نبشتہ، و تصویر ءِ بنیادا رہنمائی گون گیشترین زبانانا 24/7 سپورٹ فراہم کنت۔',
    
    // Common
    online: 'آن لائن',
    loading: 'لوڈ بیت...',
    error: 'خرابی بوتگ',
    tryAgain: 'دوبارہ کوشش کنت'
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Load language from localStorage or default to English
    return localStorage.getItem('kisanbot_language') || 'en'
  })

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('kisanbot_language', language)
  }, [language])

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage)
    }
  }

  const value = {
    language,
    setLanguage: changeLanguage,
    t,
    availableLanguages: [
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'ur', name: 'اردو', flag: '🇵🇰' },
      { code: 'pnb', name: 'پنجابی', flag: '🟢' },
      { code: 'sd', name: 'سنڌي', flag: '🔵' },
      { code: 'ps', name: 'پښتو', flag: '🟠' },
      { code: 'bal', name: 'بلوچی', flag: '🔴' }
    ]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}