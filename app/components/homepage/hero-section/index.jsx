'use client';

import { personalData } from '@/utils/data/personal-data';
import styles from './hero.module.scss';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [revealed, setRevealed] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  
  useEffect(() => {
    // Trigger reveal animation after mount
    const timer = setTimeout(() => setRevealed(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  const nodes = [
    { id: 'core', label: 'AI CORE', x: 50, y: 50 },
    { id: 'brain', label: 'NEURAL', x: 8, y: 30 },
    { id: 'chip', label: 'SILICON', x: 92, y: 30 },
    { id: 'agent', label: 'AGENTS', x: 8, y: 70 },
    { id: 'cloud', label: 'CLOUD', x: 92, y: 70 }
  ];
  
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.heroSection}>
      <div className={`${styles.transformerGrid} ${revealed ? styles.revealed : ''}`}>
        {/* Connection lines - SVG overlay */}
        <svg className={styles.connectionsSvg}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
            </linearGradient>
          </defs>
          
          {/* Connections between nodes */}
          <line x1="50%" y1="50%" x2="8%" y2="30%" className={styles.connectionLine} />
          <line x1="50%" y1="50%" x2="92%" y2="30%" className={styles.connectionLine} />
          <line x1="50%" y1="50%" x2="8%" y2="70%" className={styles.connectionLine} />
          <line x1="50%" y1="50%" x2="92%" y2="70%" className={styles.connectionLine} />
        </svg>
        
        {/* Neural nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            className={`${styles.neuralNode} ${activeNode === node.id ? styles.active : ''}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div className={styles.nodeCore}>
              <div className={styles.nodePulse}></div>
            </div>
            <span className={styles.nodeLabel}>{node.label}</span>
          </div>
        ))}
        
        {/* Central content panel */}
        <div className={`${styles.centralPanel} ${revealed ? styles.open : ''}`}>
          <div className={styles.panelBorder}>
            <div className={styles.corner} style={{ top: 0, left: 0 }} />
            <div className={styles.corner} style={{ top: 0, right: 0 }} />
            <div className={styles.corner} style={{ bottom: 0, left: 0 }} />
            <div className={styles.corner} style={{ bottom: 0, right: 0 }} />
          </div>
          
          <div className={styles.scanLine} />
          
          <div className={styles.contentReveal}>
            <h1 className={styles.name}>
              {personalData.name.split('').map((char, i) => (
                <span 
                  key={i} 
                  className={styles.char}
                  style={{ animationDelay: `${i * 0.03}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            
            <div className={styles.transformerBox}>
              <div className={styles.boxLine} />
              <p className={styles.tagline}>
                <span className={styles.bracket}>{'[ '}</span>
                <span className={styles.typewriter}>{personalData.tagline}</span>
                <span className={styles.bracket}>{' ]'}</span>
              </p>
              <div className={styles.boxLine} />
            </div>
            
            <div className={styles.matrixText}>
              {personalData.description}
            </div>
            
            <div className={styles.connectionHub}>
              <div className={styles.hubLine} />
              <div className={styles.socialLinks}>
                <a 
                  href={personalData.linkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialNode}
                >
                  <div className={styles.nodeRing}></div>
                  <FaLinkedinIn />
                </a>
                <a 
                  href={personalData.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialNode}
                >
                  <div className={styles.nodeRing}></div>
                  <FaGithub />
                </a>
                <a 
                  href={`mailto:${personalData.email}`}
                  className={styles.socialNode}
                >
                  <div className={styles.nodeRing}></div>
                  <FaEnvelope />
                </a>
              </div>
              <div className={styles.hubLine} />
            </div>
            
            <div className={styles.actionMatrix}>
              <a href="#publications" className={styles.matrixButton}>
                <span className={styles.buttonBg}></span>
                <span className={styles.buttonText}>
                  <span className={styles.buttonIcon}>{'>'}</span> RESEARCH_PAPERS
                </span>
              </a>
              <a href="#contact" className={styles.matrixButton}>
                <span className={styles.buttonBg}></span>
                <span className={styles.buttonText}>
                  <span className={styles.buttonIcon}>{'>'}</span> ESTABLISH_CONNECTION
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.dataStream}>
        {['a3x9k2', 'b7m5n1', 'c2p8q4', 'd9r6s3', 'e4t7u2', 'f8v3w1', 'g5x9y6', 'h1z4a8', 'i6b2c7', 'j3d9e5', 'k8f4g1', 'l2h7i9', 'm5j3k6', 'n9l1m4', 'o4n8p2', 'p7q5r9', 'q1s6t3', 'r8u2v7', 's4w9x5', 't1y6z8'].map((code, i) => (
          <div key={i} className={styles.streamLine} style={{ left: `${i * 5}%`, animationDelay: `${i * 0.2}s` }}>
            {code}
          </div>
        ))}
      </div>
      
      <div className={styles.scrollIndicator} onClick={scrollToNext}>
        <div className={styles.scrollNode}>
          <div className={styles.scrollPulse}></div>
        </div>
        <span>DIVE_DEEPER</span>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </section>
  );
}
