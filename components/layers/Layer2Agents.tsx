'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Layer.module.scss'

export default function Layer2Agents() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const systems = [
    {
      title: 'AI Research Assistant Agent',
      context: 'ResearchTube AI',
      description: 'Designed comprehensive technical roadmap for an AI-powered research assistant that autonomously searches, analyzes, and synthesizes academic literature',
      capabilities: [
        'Multi-source research aggregation',
        'Semantic paper analysis',
        'Citation graph traversal',
        'Automated summarization'
      ],
      stack: ['LLaMA', 'RAG', 'Vector DB', 'Tool Orchestration']
    },
    {
      title: 'Multi-Tool Financial Agent',
      context: 'AI Financial App',
      description: 'Built AI assistant with tool-calling capabilities for financial analysis, document processing, and user guidance',
      capabilities: [
        'AWS Transcribe integration',
        'Google Sheets data fetch',
        'PDF generation & delivery',
        'Voice-to-text processing'
      ],
      stack: ['OpenAI API', 'AWS Services', 'Function Calling', 'MongoDB']
    },
    {
      title: 'Real Estate AI Agent',
      context: 'Property Analysis',
      description: 'Multi-agent system with specialized agents for property analysis, image generation, and market insights',
      capabilities: [
        'Image enhancement via Replicate',
        'Market trend analysis',
        'Role-based access control',
        'Scheduled job orchestration'
      ],
      stack: ['GPT-4', 'Replicate AI', 'Cron Jobs', 'Agent Coordination']
    }
  ]

  return (
    <section id="layer2" className={styles.layer} data-layer="2">
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.layerBadge} data-layer="2">
            <span className={styles.badgeIcon}>🤖</span>
            <span className={styles.badgeText}>Layer 2</span>
          </div>
          <h2 className={styles.title}>Agents & Orchestration</h2>
          <p className={styles.subtitle}>
            Building autonomous multi-agent systems that orchestrate tools and deliver outcomes
          </p>
        </motion.div>

        <div className={styles.content}>
          <div className={styles.agentSystems}>
            {systems.map((system, index) => (
              <motion.div
                key={index}
                className={styles.agentCard}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.agentHeader}>
                  <div className={styles.agentIcon}>🤖</div>
                  <div>
                    <h3 className={styles.agentTitle}>{system.title}</h3>
                    <p className={styles.agentContext}>{system.context}</p>
                  </div>
                </div>

                <p className={styles.agentDescription}>{system.description}</p>

                <div className={styles.agentCapabilities}>
                  <h4>Agent Capabilities</h4>
                  <div className={styles.capabilityList}>
                    {system.capabilities.map((cap, idx) => (
                      <div key={idx} className={styles.capability}>
                        <span className={styles.capabilityIcon}>✓</span>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.agentStack}>
                  <h4>Stack</h4>
                  <div className={styles.stackTags}>
                    {system.stack.map((tech, idx) => (
                      <span key={idx} className={styles.stackTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.agentArchitecture}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className={styles.archTitle}>Agentic Design Principles</h3>
            <div className={styles.principles}>
              <div className={styles.principle}>
                <div className={styles.principleIcon}>🎯</div>
                <h4>Goal-Oriented</h4>
                <p>Agents decompose complex objectives into actionable sub-tasks</p>
              </div>
              <div className={styles.principle}>
                <div className={styles.principleIcon}>🔧</div>
                <h4>Tool-Augmented</h4>
                <p>Dynamic tool selection and orchestration for multi-step workflows</p>
              </div>
              <div className={styles.principle}>
                <div className={styles.principleIcon}>🔄</div>
                <h4>Iterative Refinement</h4>
                <p>Self-correction loops with validation and retry mechanisms</p>
              </div>
              <div className={styles.principle}>
                <div className={styles.principleIcon}>📊</div>
                <h4>Context-Aware</h4>
                <p>Memory systems and state management for coherent interactions</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.techStack}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h4 className={styles.techStackTitle}>Agent Technologies</h4>
            <div className={styles.techStackGrid}>
              {['LangChain', 'OpenAI Functions', 'Agent Protocols', 'Tool Calling', 
                'ReAct Pattern', 'Chain-of-Thought', 'Multi-Agent Systems', 'Vector Memory',
                'AWS Lambda', 'Webhooks', 'API Integration', 'State Machines'].map((tech, idx) => (
                <span key={idx} className={styles.techItem}>{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className={styles.bgDecor}>
        <div className={styles.network}></div>
      </div>
    </section>
  )
}

