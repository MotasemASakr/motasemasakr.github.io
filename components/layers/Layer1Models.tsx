'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Layer.module.scss'

export default function Layer1Models() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const experience = [
    {
      title: 'LLM Fine-tuning & Training',
      company: 'ResearchTube AI',
      description: 'Fine-tuned advanced LLMs including LLaMA and Phi-3 using PEFT techniques for domain-specific research applications',
      impact: ['Production LLMs', 'PEFT Optimization', 'Domain Adaptation'],
      techniques: ['LoRA', 'QLoRA', 'Instruction Tuning', 'RLHF']
    },
    {
      title: 'RAG Pipeline Architecture',
      company: 'ResearchTube AI',
      description: 'Designed and deployed retrieval-augmented generation systems for academic research assistance',
      impact: ['Vector Search', 'Embedding Models', 'Production Scale'],
      techniques: ['FAISS', 'Semantic Search', 'Hybrid Retrieval', 'Reranking']
    },
    {
      title: 'CNN Training & Verification',
      company: 'University of Toronto',
      description: 'Implemented CNN models and firmwares to verify fabricated chips using PyTorch & TensorFlow',
      impact: ['Hardware Validation', 'Model Optimization', 'Quantization'],
      techniques: ['CNN', 'TensorFlow', 'PyTorch', 'INT8 Quantization']
    },
    {
      title: 'Predictive DL Models',
      company: 'Procter & Gamble',
      description: 'Designed Deep Learning models for sales forecasting and market growth prediction for Home Care brands',
      impact: ['Time Series', 'Business Impact', 'Production Deployment'],
      techniques: ['LSTM', 'Transformers', 'Feature Engineering', 'Model Serving']
    }
  ]

  return (
    <section id="layer1" className={styles.layer} data-layer="1">
      <div className={styles.container}>
        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.layerBadge} data-layer="1">
            <span className={styles.badgeIcon}>🧠</span>
            <span className={styles.badgeText}>Layer 1</span>
          </div>
          <h2 className={styles.title}>Models & Training</h2>
          <p className={styles.subtitle}>
            Fine-tuning LLMs, optimizing models, and building efficient training pipelines
          </p>
        </motion.div>

        <div className={styles.content}>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.experienceCard}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.experienceTitle}>{exp.title}</h3>
                  <p className={styles.experienceCompany}>{exp.company}</p>
                </div>
              </div>
              <p className={styles.experienceDescription}>{exp.description}</p>
              
              <div className={styles.experienceImpact}>
                <h4>Impact</h4>
                <div className={styles.impactTags}>
                  {exp.impact.map((item, idx) => (
                    <span key={idx} className={styles.impactTag}>{item}</span>
                  ))}
                </div>
              </div>

              <div className={styles.experienceTech}>
                <h4>Techniques</h4>
                <div className={styles.techTags}>
                  {exp.techniques.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            className={styles.techStack}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h4 className={styles.techStackTitle}>ML/DL Frameworks & Tools</h4>
            <div className={styles.techStackGrid}>
              {['PyTorch', 'TensorFlow', 'Transformers', 'LLaMA', 'Phi-3', 'PEFT', 'LoRA', 
                'RAG', 'FAISS', 'Langchain', 'OpenAI API', 'Hugging Face', 'CUDA', 'TensorRT'].map((tech, idx) => (
                <span key={idx} className={styles.techItem}>{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className={styles.bgDecor}>
        <div className={styles.neurons}></div>
      </div>
    </section>
  )
}

