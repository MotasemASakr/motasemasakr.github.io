'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Contact.module.scss'
import EmailIcon from './icons/EmailIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import GitHubIcon from './icons/GitHubIcon'
import LocationIcon from './icons/LocationIcon'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const contactMethods = [
    {
      icon: EmailIcon,
      label: 'Email',
      value: 'motasemsakr@gmail.com',
      link: 'mailto:motasemsakr@gmail.com'
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/motasem-sakr',
      link: 'https://www.linkedin.com/in/motasem-sakr/'
    },
    {
      icon: GitHubIcon,
      label: 'GitHub',
      value: 'github.com/MotasemASakr',
      link: 'https://github.com/MotasemASakr'
    },
    {
      icon: LocationIcon,
      label: 'Location',
      value: 'Toronto, Canada',
      link: null
    }
  ]

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🔌</span>
            <span>Interface</span>
          </div>
          <h2 className={styles.title}>Let&apos;s Connect</h2>
          <p className={styles.subtitle}>
            Interested in full-stack AI systems? Let&apos;s talk about building the future.
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.contactGrid}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className={styles.contactMethod}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {method.link ? (
                  <a href={method.link} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    <div className={styles.contactIcon}>
                      <method.icon className={styles.iconSvg} />
                    </div>
                    <div className={styles.contactInfo}>
                      <div className={styles.contactLabel}>{method.label}</div>
                      <div className={styles.contactValue}>{method.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className={styles.contactLink}>
                    <div className={styles.contactIcon}>
                      <method.icon className={styles.iconSvg} />
                    </div>
                    <div className={styles.contactInfo}>
                      <div className={styles.contactLabel}>{method.label}</div>
                      <div className={styles.contactValue}>{method.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className={styles.ctaTitle}>Open to Opportunities</h3>
            <p className={styles.ctaText}>
              Seeking roles in AI infrastructure, hardware-aware ML, or agentic platform engineering.
              Let&apos;s build systems that span silicon to agents.
            </p>
            <div className={styles.ctaButtons}>
              <motion.a
                href="mailto:motasemsakr@gmail.com"
                className={styles.ctaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
                <span className={styles.arrow}>→</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/motasem-sakr/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonSecondary}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            © 2025 Motasem Sakr.
          </p>
          <p className={styles.footerTagline}>
            <span className={styles.footerIcon}>⚡</span>
            Chip → Agent Stack
          </p>
        </div>
      </motion.footer>
    </section>
  )
}

