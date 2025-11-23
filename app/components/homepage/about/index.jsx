'use client';

import { personalData } from '@/utils/data/personal-data';
import Image from 'next/image';
import styles from './about.module.scss';
import { FaRocket, FaMicrochip, FaBrain, FaChartLine } from 'react-icons/fa';
import { useState } from 'react';

export default function AboutSection() {
  const [activeHighlight, setActiveHighlight] = useState(null);
  
  const highlights = [
    {
      icon: FaMicrochip,
      title: "ASIC Chip Design",
      description: "Led design and fabrication of 4 digital ASIC chips using TSMC 65nm and LF 110nm technologies for AI acceleration",
      color: "#8b5cf6"
    },
    {
      icon: FaBrain,
      title: "AI Model Fine-tuning",
      description: "Expert in fine-tuning advanced LLMs including LLaMA and Phi-3 using PEFT techniques for production applications",
      color: "#a78bfa"
    },
    {
      icon: FaRocket,
      title: "Research & Innovation",
      description: "Published 3 papers in top conferences (JSSC, ISSCC, VLSI) on computational imaging and hardware acceleration",
      color: "#c084fc"
    },
    {
      icon: FaChartLine,
      title: "Production ML Systems",
      description: "Architecting scalable AI infrastructure on AWS with RAG pipelines and cloud-based AI solutions",
      color: "#d8b4fe"
    }
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>{'<section id="about">'}</span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleBracket}>{'{'}</span>
            <span className={styles.titleText}> SYSTEM_ARCHITECT </span>
            <span className={styles.titleBracket}>{'}'}</span>
          </h2>
        </div>
        
        <div className={styles.matrixLayout}>
          {/* Left side - Profile node */}
          <div className={styles.profileNode}>
            <div className={styles.imageMatrix}>
              <div className={styles.scanLines} />
              <div className={styles.imageFrame}>
                <Image
                  src={personalData.profile}
                  alt={personalData.name}
                  fill
                  className={styles.image}
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={styles.cornerMarker} style={{
                  top: i < 2 ? 0 : 'auto',
                  bottom: i >= 2 ? 0 : 'auto',
                  left: i % 2 === 0 ? 0 : 'auto',
                  right: i % 2 !== 0 ? 0 : 'auto'
                }} />
              ))}
            </div>
            
            <div className={styles.dataGrid}>
              {[
                { label: 'PUBLICATIONS', value: '3' },
                { label: 'ASIC_CHIPS', value: '4' },
                { label: 'AWARDS', value: '9+' }
              ].map((stat, i) => (
                <div key={i} className={styles.dataCell}>
                  <div className={styles.dataLabel}>{stat.label}</div>
                  <div className={styles.dataValue}>{stat.value}</div>
                  <div className={styles.cellGlow} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Connection lines SVG */}
          <svg className={styles.connectionMatrix} viewBox="0 0 100 400">
            {highlights.map((_, i) => (
              <line
                key={i}
                x1="0"
                y1="200"
                x2="100"
                y2={100 * i + 50}
                className={`${styles.connectLine} ${activeHighlight === i ? styles.active : ''}`}
                strokeDasharray="5,5"
              />
            ))}
          </svg>
          
          {/* Right side - Feature nodes */}
          <div className={styles.featureGrid}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`${styles.featureNode} ${activeHighlight === index ? styles.active : ''}`}
                onMouseEnter={() => setActiveHighlight(index)}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                <div className={styles.nodeConnector} style={{ background: item.color }}>
                  <div className={styles.connectorPulse} />
                </div>
                
                <div className={styles.nodeContent}>
                  <div className={styles.nodeIcon} style={{ borderColor: item.color }}>
                    <item.icon style={{ color: item.color }} />
                    <div className={styles.iconGlow} style={{ background: item.color }} />
                  </div>
                  
                  <div className={styles.nodeInfo}>
                    <h3 className={styles.nodeTitle}>{item.title}</h3>
                    <div className={styles.nodeBar} style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
                    <p className={styles.nodeDesc}>{item.description}</p>
                  </div>
                </div>
                
                <div className={styles.nodeMetrics}>
                  <span>█</span>
                  <span>█</span>
                  <span>█</span>
                  <span>█</span>
                  <span>█</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bio data stream */}
        <div className={styles.bioStream}>
          <div className={styles.streamHeader}>
            <span className={styles.terminalPrompt}>{'>'} bio_data.txt</span>
            <div className={styles.streamIndicator}>
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className={styles.streamContent}>
            <p>
              <span className={styles.varName}>const</span> <span className={styles.varHighlight}>engineer</span> = {'{'}
            </p>
            <p className={styles.indent1}>
              <span className={styles.property}>name:</span> <span className={styles.string}>"Motasem Sakr"</span>,
            </p>
            <p className={styles.indent1}>
              <span className={styles.property}>role:</span> <span className={styles.string}>"AI Engineer & Researcher"</span>,
            </p>
            <p className={styles.indent1}>
              <span className={styles.property}>education:</span> {'{'}
            </p>
            <p className={styles.indent1} style={{ paddingLeft: '60px' }}>
              <span className={styles.property}>masters:</span> <span className={styles.string}>"MASc ECE, University of Toronto (GPA: 4.0/4.0)"</span>,
            </p>
            <p className={styles.indent1} style={{ paddingLeft: '60px' }}>
              <span className={styles.property}>bachelors:</span> <span className={styles.string}>"BSc ECE, American University in Cairo (GPA: 3.98/4.0)"</span>
            </p>
            <p className={styles.indent1}>
              {'},'}
            </p>
            <p className={styles.indent1}>
              <span className={styles.property}>expertise:</span> ['<span className={styles.string}>AI Agents</span>', '<span className={styles.string}>ASIC Design</span>', '<span className={styles.string}>LLM Fine-tuning</span>', '<span className={styles.string}>Generative AI</span>'],
            </p>
            <p className={styles.indent1}>
              <span className={styles.property}>location:</span> <span className={styles.string}>"{personalData.address}"</span>
            </p>
            <p>{'};'}</p>
          </div>
        </div>
        
        <div className={styles.sectionFooter}>
          <span className={styles.sectionId}>{'</section>'}</span>
        </div>
      </div>
    </section>
  );
}
