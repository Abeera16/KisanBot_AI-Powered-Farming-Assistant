import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiGooglegemini } from 'react-icons/si'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-primary-800 to-primary-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold mb-3">{t('aboutTitle')}</h3>
            <p className="text-primary-100 text-sm leading-relaxed">
              {t('aboutDesc')}
            </p>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-3">{t('poweredBy')}</h3>
            <div className="space-y-2 text-sm text-primary-100">
              <div className="flex items-center space-x-2">
                <SiGooglegemini className="text-primary-300" />
                <span>{t('googleGemini')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary-300">🎙</span>
                <span>{t('speechRecognition')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary-300">🔊</span>
                <span>{t('textToSpeech')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary-300">⚛️</span>
                <span>{t('techStack')}</span>
              </div>
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-3">{t('connect')}</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-700 hover:bg-primary-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-700 hover:bg-primary-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:contact@agrobot.com"
                className="bg-primary-700 hover:bg-primary-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-primary-700 mt-8 pt-6 text-center"
        >
          <p className="text-primary-200 text-sm">
            {t('copyright')}
          </p>
          <p className="text-primary-300 text-xs mt-2">
            {t('projectNote')}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
