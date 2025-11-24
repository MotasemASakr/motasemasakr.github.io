'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Publications.module.scss'

export default function Publications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const publications = [
    {
      id: 1,
      title: "39 000-Subexposures/s Dual-ADC CMOS Image Sensor With Dual-Tap Coded-Exposure Pixels for Single-Shot HDR and 3-D Computational Imaging",
      authors: "Co-author",
      journal: "IEEE Journal of Solid-State Circuits (JSSC)",
      year: 2023,
      type: "Journal",
      badge: "JSSC 2023",
      description: "Novel dual-ADC CMOS image sensor architecture enabling high-speed computational imaging with HDR capabilities."
    },
    {
      id: 2,
      title: "Dual-Port CMOS Image Sensor with Regression-Based HDR Flux-to-Digital Conversion and 80ns Rapid-Update Pixel-Wise Exposure Coding",
      authors: "Co-author",
      journal: "International Solid-State Circuits Conference (ISSCC)",
      year: 2023,
      type: "Conference",
      badge: "ISSCC 2023",
      description: "Advanced regression-based HDR imaging system with ultra-fast pixel-wise exposure control for computational photography."
    },
    {
      id: 3,
      title: "A 39,000 Subexposures/s CMOS Image Sensor with Dual-tap Coded-exposure Data-memory Pixel for Adaptive Single-shot Computational Imaging",
      authors: "Co-author",
      journal: "IEEE Symposium on VLSI Technology and Circuits",
      year: 2022,
      type: "Conference",
      badge: "Invited to JSSC",
      description: "Groundbreaking work on adaptive computational imaging using coded-exposure techniques with dual-tap memory architecture."
    }
  ]

  return (
    <section id="publications" className={styles.publications}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>📚</span>
            <span>Research Publications</span>
          </div>
          <h2 className={styles.title}>Publications</h2>
          <p className={styles.subtitle}>
            Published research in top-tier circuits and systems conferences
          </p>
        </motion.div>

        <div className={styles.publicationsList}>
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              className={styles.publicationCard}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.publicationHeader}>
                <span className={styles.publicationBadge}>{pub.badge}</span>
                <span className={styles.publicationType}>{pub.type}</span>
              </div>
              
              <h3 className={styles.publicationTitle}>{pub.title}</h3>
              
              <div className={styles.publicationMeta}>
                <span className={styles.publicationAuthors}>{pub.authors}</span>
                <span className={styles.publicationDivider}>•</span>
                <span className={styles.publicationJournal}>{pub.journal}</span>
                <span className={styles.publicationDivider}>•</span>
                <span className={styles.publicationYear}>{pub.year}</span>
              </div>

              <p className={styles.publicationDescription}>{pub.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.researchHighlight}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.highlightIcon}>🎓</div>
          <div className={styles.highlightContent}>
            <h3>Master of Applied Science in Electrical and Computer Engineering</h3>
            <p>University of Toronto (UofT) • 2019 - 2021 • 7+ Years Silicon-to-Software in Magnificent 7</p>
            <p className={styles.thesis}>
              Thesis: <em>Hardware-Efficient Accelerators for Mask Generation in Coded-Exposure Cameras</em>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

