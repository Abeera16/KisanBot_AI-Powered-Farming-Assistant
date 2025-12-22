import React from 'react'
import { GiPlantWatering, GiWheat } from 'react-icons/gi'
import { FaMicrophone, FaImage, FaComments, FaRobot, FaLeaf, FaGlobe } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const LandingPage = ({ onStartChat }) => {
  const { t, language, setLanguage, availableLanguages } = useLanguage()
  return (
    <div className="min-h-screen">
      {/* Language Selector Header */}
      <div className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-xl shadow-lg">
                <GiPlantWatering className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  {t('appName')}
                </h1>
                <p className="text-xs text-gray-600 font-medium">{t('tagline')}</p>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 font-medium">{t('languageSettings')}:</span>
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl bg-white hover:bg-gray-50 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all cursor-pointer font-medium text-gray-700 text-sm"
                >
                  {availableLanguages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
                <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Full Background */}
      <section 
        className="relative overflow-hidden py-20 px-4 min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/hero-image.jpg)` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 border border-white/20"
            >
              <div className="inline-block px-4 py-2 bg-primary-500/90 backdrop-blur-sm rounded-full text-white font-semibold mb-4">
                {t('heroSubtitle')}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {t('heroTitle')}
                <span className="block text-primary-300">{t('heroTitleHighlight')}</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                {t('heroDescription')}
              </p>
              
              {/* CTA Button */}
              <motion.button
                onClick={onStartChat}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-3">
                  <FaComments className="text-2xl" />
                  <span>{t('startChatting')}</span>
                </span>
                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </motion.button>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <div className="text-3xl font-bold text-primary-300">6+</div>
                  <div className="text-sm text-white/80">{t('languages')}</div>
                </div>
                <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <div className="text-3xl font-bold text-primary-300">24/7</div>
                  <div className="text-sm text-white/80">{t('available')}</div>
                </div>
                <div className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <div className="text-3xl font-bold text-primary-300">AI</div>
                  <div className="text-sm text-white/80">{t('aiPowered')}</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Demo Chat */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Chat Demo Card */}
                <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-glow">
                      <FaRobot className="text-white text-2xl" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">{t('appName')}</div>
                      <div className="text-sm text-primary-200 flex items-center">
                        <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse"></span>
                        {t('online')}
                      </div>
                    </div>
                  </div>
                  
                  {/* Demo Chat Bubbles */}
                  <div className="space-y-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 ml-8">
                      <p className="text-white/90">{t('demoQuestion')}</p>
                    </div>
                    <div className="bg-primary-500/90 backdrop-blur-sm text-white rounded-2xl p-4 mr-8">
                      <p>{t('demoAnswer')}</p>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-glow float-animation"
                >
                  <GiPlantWatering className="text-white text-3xl" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-glow float-animation"
                >
                  <GiWheat className="text-white text-2xl" />
                </motion.div>
                
                {/* Additional floating element */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-xl flex items-center justify-center shadow-glow float-animation"
                >
                  <FaLeaf className="text-white text-lg" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Stats Section - Inspired by Design */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {t('innovatingFuture')}
                <span className="block text-primary-600">{t('ofAgriculture')}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('kisanBotCombines')}
              </p>
              
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 border border-primary-200 rounded-2xl p-4 h-32 flex items-center justify-center">
                  <span className="text-primary-700 text-sm text-center font-medium">{t('smartFarmingTech')}</span>
                </div>
                <div className="bg-primary-50 border border-primary-200 rounded-2xl p-4 h-32 flex items-center justify-center">
                  <span className="text-primary-700 text-sm text-center font-medium">{t('sustainableAgriculture')}</span>
                </div>
              </div>
            </div>

            {/* Right Stats */}
            <div className="space-y-8">
              <div className="text-center bg-primary-50 rounded-3xl p-6 border border-primary-200">
                <div className="text-6xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-xl font-semibold mb-2 text-gray-900">{t('customerSatisfaction')}</div>
                <div className="text-gray-600 text-sm">{t('farmersTrust')}</div>
              </div>
              
              <div className="text-center bg-white rounded-3xl p-6 border border-primary-200 shadow-soft">
                <div className="text-6xl font-bold text-primary-600 mb-2">6+</div>
                <div className="text-xl font-semibold mb-2 text-gray-900">{t('languagesSupported')}</div>
                <div className="text-gray-600 text-sm">{t('multipleLanguages')}</div>
              </div>
              
              <div className="text-center bg-primary-50 rounded-3xl p-6 border border-primary-200">
                <div className="text-6xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-xl font-semibold mb-2 text-gray-900">{t('aiPoweredStat')}</div>
                <div className="text-gray-600 text-sm">{t('advancedAI')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Meets Nature Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('technologyMeets')}
              <span className="block text-primary-600">{t('rootsOfNature')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technology Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-primary-200 shadow-soft">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('sustainableFarmingClimate')}</h3>
                <p className="text-gray-600 text-sm">{t('climateDescription')}</p>
              </div>
              
              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-200">
                <h3 className="text-xl font-bold text-primary-700 mb-3">{t('greenerFuture')}</h3>
                <p className="text-gray-600 text-sm">{t('regenerativeDescription')}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-200">
                <h3 className="text-xl font-bold text-primary-700 mb-3">{t('realWorldTech')}</h3>
                <p className="text-gray-600 text-sm">{t('techDescription')}</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-primary-200 shadow-soft">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('sustainableBiodiversity')}</h3>
                <p className="text-gray-600 text-sm">{t('biodiversityDescription')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - FAQ Title */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('gotQuestions')}
                <span className="block text-primary-600">{t('gotYouCovered')}</span>
              </h2>
              <p className="text-gray-600">
                {t('faqDescription')}
              </p>
            </div>
            
            {/* Right - FAQ Items */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{t('whatSolutions')}</h3>
                <p className="text-gray-600 text-sm">{t('solutionsAnswer')}</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{t('howToStart')}</h3>
                <p className="text-gray-600 text-sm">{t('startAnswer')}</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{t('ecoFriendly')}</h3>
                <p className="text-gray-600 text-sm">{t('ecoAnswer')}</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{t('supportTraining')}</h3>
                <p className="text-gray-600 text-sm">{t('supportAnswer')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('featuresTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('featuresSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Voice */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <FaMicrophone className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('voiceMode')}</h3>
              <p className="text-gray-600 mb-4">
                {t('voiceModeDesc')}
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  {t('multiLanguageSupport')}
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  {t('audioResponses')}
                </li>
              </ul>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <FaComments className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('textChat')}</h3>
              <p className="text-gray-600 mb-4">
                {t('textChatDesc')}
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  {t('fastResponses')}
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  {t('easyReference')}
                </li>
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <FaImage className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('imageAnalysis')}</h3>
              <p className="text-gray-600 mb-4">
                {t('imageAnalysisDesc')}
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  {t('diseaseDetection')}
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  {t('treatmentSuggestions')}
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              {t('ctaSubtitle')}
            </p>
            <motion.button
              onClick={onStartChat}
              className="px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('startFirstChat')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <GiPlantWatering className="text-primary-500 text-2xl" />
            <span className="text-white font-bold text-xl">{t('appName')}</span>
          </div>
          <p className="text-sm">{t('copyright')}</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
