'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './StackVisualization.module.scss'
import ChipIcon from './icons/ChipIcon'

export default function StackVisualization() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const layers = [
    {
      id: 0,
      title: 'Layer 0: Silicon',
      description: 'ASIC Design & Hardware Acceleration',
      color: '#ff006e',
      metrics: ['10+ ASIC Chips', 'TSMC 65nm/110nm', 'MAC Engines', 'Deflate Accelerators'],
      icon: 'chip'
    },
    {
      id: 1,
      title: 'Layer 1: Models',
      description: 'Training & Fine-tuning LLMs',
      color: '#7209b7',
      metrics: ['LLaMA Fine-tuning', 'Phi-3 PEFT', 'RAG Pipelines', 'CNN Optimization'],
      icon: '🧠'
    },
    {
      id: 2,
      title: 'Layer 2: Agents',
      description: 'Multi-Agent Systems & Orchestration',
      color: '#3a0ca3',
      metrics: ['Research Assistant', 'Multi-Tool Agents', 'Production RAG', 'API Integration'],
      icon: '🤖'
    }
  ]

  return (
    <section id="stack" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>The Chip-to-Agent Stack</h2>
          <p className={styles.subtitle}>
            A unified view of the AI pipeline, from silicon to intelligent behavior
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className={styles.stack}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              className={styles.layer}
              style={{ '--layer-color': layer.color } as React.CSSProperties}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, x: 10 }}
              onClick={() => document.getElementById(`layer${layer.id}`)?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className={styles.layerHeader}>
                <div className={styles.layerIcon}>
                  {layer.icon === 'chip' ? (
                    <ChipIcon className={styles.chipIconSvg} />
                  ) : (
                    layer.icon
                  )}
                </div>
                <div className={styles.layerInfo}>
                  <h3 className={styles.layerTitle}>{layer.title}</h3>
                  <p className={styles.layerDescription}>{layer.description}</p>
                </div>
                <div className={styles.layerBadge}>L{layer.id}</div>
              </div>

              <div className={styles.layerMetrics}>
                {layer.metrics.map((metric, idx) => (
                  <div key={idx} className={styles.metric}>
                    <span className={styles.metricDot}>•</span>
                    <span>{metric}</span>
                  </div>
                ))}
              </div>

              <div className={styles.layerGlow}></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.connections}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <svg className={styles.connectionsSvg} viewBox="0 0 100 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff006e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7209b7" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7209b7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3a0ca3" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3a0ca3" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00ff88" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 50 0 L 50 133"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            />
            <motion.path
              d="M 50 133 L 50 266"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 1.4 }}
            />
            <motion.path
              d="M 50 266 L 50 400"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 1.6 }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

