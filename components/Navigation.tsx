'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navigation.module.scss'
import ChipIcon from './icons/ChipIcon'

const navItems = [
  { id: 'hero', label: 'Context', layer: null, icon: '🎯' },
  { id: 'layer3', label: 'Experience', layer: null, icon: '💼' },
  { id: 'stack', label: 'Chip-Agent Stack', layer: null, icon: '📚' },
  { id: 'layer0', label: 'Silicon', layer: 0, icon: 'chip' },
  { id: 'layer1', label: 'Models', layer: 1, icon: '🧠' },
  { id: 'layer2', label: 'Agents', layer: 2, icon: '🤖' },
  { id: 'publications', label: 'Publications', layer: null, icon: '📄' },
  { id: 'contact', label: 'Contact', layer: null, icon: '✉️' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPos = window.scrollY + window.innerHeight / 3

      // Find the section that's currently most visible
      let currentSection = 'hero'
      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop
          const offsetBottom = offsetTop + section.offsetHeight

          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            currentSection = navItems[index].id
          }
        }
      })
      
      setActiveSection(currentSection)
    }

    handleScroll() // Call once on mount
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('hero')}
        >
          <span className={styles.logoText}>MOTASEM SAKR</span>
        </motion.div>

        <div className={styles.navItems}>
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.navIcon}>
                {item.icon === 'chip' ? (
                  <ChipIcon className={styles.chipIconSvg} />
                ) : (
                  item.icon
                )}
              </span>
              {item.layer !== null && (
                <span className={styles.layerIndicator} data-layer={item.layer}>
                  L{item.layer}
                </span>
              )}
              <span>{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

