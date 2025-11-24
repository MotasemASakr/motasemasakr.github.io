'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ParticleBackground from './ParticleBackground'
import styles from './Hero.module.scss'

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const pillars = [
    { label: 'ASIC Performance', layer: 0, color: 'var(--layer-0)', description: 'Hardware-Efficient Accelerators' },
    { label: 'Model Efficiency', layer: 1, color: 'var(--layer-1)', description: 'Fine-tuned LLMs & Training' },
    { label: 'Agentic Systems', layer: 2, color: 'var(--layer-2)', description: 'Multi-Agent Orchestration' },
  ]

  return (
    <section id="hero" className={styles.hero}>
      <ParticleBackground />
      
      <motion.div
        ref={ref}
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className={styles.badge} variants={itemVariants}>
          <span className={styles.badgeIcon}>⚡</span>
          <span>Full-Stack AI Engineer</span>
        </motion.div>

        <motion.h1 className={styles.title} variants={itemVariants}>
          <span className={styles.titleMain}>Engineering the full AI pipeline</span>
          <span className={styles.titleSub}>
            From custom <span className={styles.highlight}>silicon</span> to autonomous{' '}
            <span className={styles.highlight}>agents</span> that ship
          </span>
        </motion.h1>

        <motion.p className={styles.description} variants={itemVariants}>
          Designing the silicon, training the brains, orchestrating the agents.
        </motion.p>

        <motion.div className={styles.pillars} variants={itemVariants}>
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={styles.pillar}
              style={{ '--pillar-color': pillar.color } as React.CSSProperties}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.pillarLayer}>L{pillar.layer}</div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarLabel}>{pillar.label}</div>
                <div className={styles.pillarDesc}>{pillar.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={styles.cta} variants={itemVariants}>
          <motion.button
            className={styles.ctaPrimary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('layer0')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the Stack
            <span className={styles.arrow}>→</span>
          </motion.button>
          <motion.button
            className={styles.ctaSecondary}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div className={styles.stats} variants={itemVariants}>
          <div className={styles.stat}>
            <div className={styles.statValue}>10+</div>
            <div className={styles.statLabel}>Industry-Level ASIC Chips</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>4</div>
            <div className={styles.statLabel}>Top-Tier Publications</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>8+</div>
            <div className={styles.statLabel}>Years Industry Experience</div>
          </div>
        </motion.div>
      </motion.div>

      <div className={styles.scrollIndicator}>
        <motion.div
          className={styles.scrollMouse}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className={styles.scrollWheel}></div>
        </motion.div>
      </div>
    </section>
  )
}

