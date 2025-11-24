'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Layer.module.scss'

export default function Layer3Impact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const outcomes = [
    {
      title: 'End-to-End AI Product Leadership',
      role: 'Co-founder & CTO, ResearchTube AI',
      period: 'Aug 2021 - Present',
      impact: [
        'Led complete product development from ideation to deployment',
        'Architected scalable cloud infrastructure on AWS supporting production AI',
        'Delivered multiple development cycles with strategic AI roadmap alignment',
        'Built team and technical culture around rapid iteration'
      ],
      metrics: [
        { label: 'Cloud Scale', value: 'AWS Multi-Service' },
        { label: 'Role', value: 'CTO Leadership' },
        { label: 'Timeline', value: '4+ Years' }
      ]
    },
    {
      title: 'Silicon-to-Software Pipeline',
      role: 'Graduate Research, University of Toronto',
      period: 'Sep 2019 - July 2021',
      impact: [
        '10+ ASIC chips designed and delivered to industry production',
        '3 publications in top-tier venues (ISSCC, JSSC, VLSI)',
        'Novel MAC and deflate accelerators with measurable performance gains',
        'Complete SoC design with ARM/RISCV microprocessors'
      ],
      metrics: [
        { label: 'Chips', value: '10+ Fabricated' },
        { label: 'Publications', value: '3 Top-Tier' },
        { label: 'Experience', value: '8+ Years' }
      ]
    },
    {
      title: 'Production AI Systems at Scale',
      role: 'Multiple Projects',
      period: '2020 - Present',
      impact: [
        'Deployed multi-agent systems to production with real users',
        'Integrated AWS services (EC2, SageMaker, S3, RDS, Lambda) for robust AI infra',
        'Built financial AI, real estate AI, and research AI applications',
        'Automated business workflows saving hours of manual time'
      ],
      metrics: [
        { label: 'Projects', value: '10+ Shipped' },
        { label: 'Infrastructure', value: 'Production AWS' },
        { label: 'Users', value: 'Live Deployments' }
      ]
    }
  ]

  return (
    <section id="layer3" className={styles.layer} data-layer="3">
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.layerBadge} data-layer="3">
            <span className={styles.badgeIcon}>📊</span>
            <span className={styles.badgeText}>Layer 3</span>
          </div>
          <h2 className={styles.title}>Impact & Outcomes</h2>
          <p className={styles.subtitle}>
            Concrete business results, shipped systems, and measurable value delivered
          </p>
        </motion.div>

        <div className={styles.content}>
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              className={styles.impactCard}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ x: 10 }}
            >
              <div className={styles.impactHeader}>
                <div>
                  <h3 className={styles.impactTitle}>{outcome.title}</h3>
                  <p className={styles.impactRole}>{outcome.role}</p>
                  <p className={styles.impactPeriod}>{outcome.period}</p>
                </div>
              </div>

              <div className={styles.impactList}>
                {outcome.impact.map((item, idx) => (
                  <div key={idx} className={styles.impactItem}>
                    <span className={styles.impactBullet}>▸</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={styles.impactMetrics}>
                {outcome.metrics.map((metric, idx) => (
                  <div key={idx} className={styles.impactMetric}>
                    <div className={styles.metricValue}>{metric.value}</div>
                    <div className={styles.metricLabel}>{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            className={styles.valueProposition}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className={styles.valueTitle}>Full-Stack AI Ownership</h3>
            <p className={styles.valueDescription}>
              Rare ability to move the needle across the entire AI pipeline: from silicon design and fabrication,
              through model training and optimization, to agent orchestration and production deployment.
            </p>
            <div className={styles.valuePoints}>
              <div className={styles.valuePoint}>
                <div className={styles.valuePointIcon}>⚙️</div>
                <div className={styles.valuePointText}>
                  <strong>Hardware</strong>
                  <span>10+ chips fabricated, 8+ years industry experience in Mag 7</span>
                </div>
              </div>
              <div className={styles.valuePoint}>
                <div className={styles.valuePointIcon}>🧠</div>
                <div className={styles.valuePointText}>
                  <strong>Models</strong>
                  <span>LLM fine-tuning, PEFT, RAG pipelines</span>
                </div>
              </div>
              <div className={styles.valuePoint}>
                <div className={styles.valuePointIcon}>🤖</div>
                <div className={styles.valuePointText}>
                  <strong>Agents</strong>
                  <span>Multi-agent systems, tool orchestration</span>
                </div>
              </div>
              <div className={styles.valuePoint}>
                <div className={styles.valuePointIcon}>🚀</div>
                <div className={styles.valuePointText}>
                  <strong>Deployment</strong>
                  <span>AWS infrastructure, production scale</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className={styles.bgDecor}>
        <div className={styles.graph}></div>
      </div>
    </section>
  )
}

