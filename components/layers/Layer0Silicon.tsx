'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Layer.module.scss'
import ChipIcon from '../icons/ChipIcon'

export default function Layer0Silicon() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const projects = [
    {
      title: 'MAC Engine Accelerator',
      tech: 'SystemVerilog',
      description: 'Designed novel Multiply-Accumulate engine for DL applications with optimized power/area tradeoffs',
      metrics: ['TSMC 65nm', 'Deep Learning', 'Power Optimized']
    },
    {
      title: 'Deflate Decompression Accelerator',
      tech: 'Verilog',
      description: 'Hardware accelerator for real-time data decompression in ML pipelines',
      metrics: ['High Throughput', 'Low Latency', 'ML Pipeline']
    },
    {
      title: 'SoC with ARM/RISCV',
      tech: 'System Design',
      description: 'Complete system-on-chip including ARM/RISCV microprocessors on image sensor for DL',
      metrics: ['ARM Core', 'RISCV', 'Image Sensor']
    },
    {
      title: '10+ Industry-Level ASIC Chips',
      tech: 'Full Fabrication',
      description: 'Led complete design and fabrication cycle using TSMC 65nm and LF 110nm technologies',
      metrics: ['TSMC 65nm', 'LF 110nm', 'Production Grade']
    }
  ]

  return (
    <section id="layer0" className={styles.layer} data-layer="0">
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.layerBadge} data-layer="0">
            <span className={styles.badgeIcon}>
              <ChipIcon className={styles.badgeIconSvg} />
            </span>
            <span className={styles.badgeText}>Layer 0</span>
          </div>
          <h2 className={styles.title}>Silicon & Hardware</h2>
          <p className={styles.subtitle}>
            Designing custom ASIC chips and hardware accelerators for AI workloads
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.highlight}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.highlightHeader}>
              <h3>Research @ University of Toronto</h3>
              <span className={styles.duration}>Sep 2019 - July 2021</span>
            </div>
            <p className={styles.highlightText}>
              Graduate Research Assistant focusing on hardware-efficient accelerators for computational imaging
              and deep learning applications. Published 3 papers in top-tier conferences (ISSCC, JSSC, VLSI).
            </p>
            <div className={styles.achievements}>
              <div className={styles.achievement}>
                <div className={styles.achievementValue}>10+</div>
                <div className={styles.achievementLabel}>ASIC Chips</div>
              </div>
              <div className={styles.achievement}>
                <div className={styles.achievementValue}>4</div>
                <div className={styles.achievementLabel}>Publications</div>
              </div>
              <div className={styles.achievement}>
                <div className={styles.achievementValue}>7+</div>
                <div className={styles.achievementLabel}>Years Experience</div>
              </div>
            </div>
          </motion.div>

          <div className={styles.projects}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={styles.project}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(255, 0, 110, 0.2)' }}
              >
                <div className={styles.projectHeader}>
                  <h4 className={styles.projectTitle}>{project.title}</h4>
                  <span className={styles.projectTech}>{project.tech}</span>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectMetrics}>
                  {project.metrics.map((metric, idx) => (
                    <span key={idx} className={styles.metric}>{metric}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.techStack}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h4 className={styles.techStackTitle}>Technology Stack</h4>
            <div className={styles.techStackGrid}>
              {['SystemVerilog', 'Verilog', 'VHDL', 'Cadence Virtuoso', 'Cadence Innovus', 
                'Synopsys Design Vision', 'ARM', 'RISCV', 'TSMC 65nm', 'LF 110nm'].map((tech, idx) => (
                <span key={idx} className={styles.techItem}>{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className={styles.bgDecor}>
        <div className={styles.circuit}></div>
      </div>
    </section>
  )
}

