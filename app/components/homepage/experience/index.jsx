'use client';

import { experiences } from '@/utils/data/experience';
import styles from './experience.module.scss';
import { useState } from 'react';

export default function ExperienceSection() {
  const [activeExp, setActiveExp] = useState(null);

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>{'<section id="experience">'}</span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleBracket}>{'{'}</span>
            <span className={styles.titleText}> CAREER_TRAJECTORY </span>
            <span className={styles.titleBracket}>{'}'}</span>
          </h2>
        </div>
        
        <div className={styles.timelineMatrix}>
          {/* Vertical connection line */}
          <svg className={styles.connectionLine} viewBox="0 0 2 1000">
            <line 
              x1="1" 
              y1="0" 
              x2="1" 
              y2="1000" 
              stroke="url(#timelineGradient)" 
              strokeWidth="2"
              strokeDasharray="10,5"
            />
            <defs>
              <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.8)" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.2)" />
              </linearGradient>
            </defs>
          </svg>
          
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`${styles.experienceNode} ${activeExp === index ? styles.active : ''} ${index % 2 === 0 ? styles.left : styles.right}`}
              onMouseEnter={() => setActiveExp(index)}
              onMouseLeave={() => setActiveExp(null)}
            >
              {/* Connection point */}
              <div className={styles.nodeConnector}>
                <div className={styles.connectorCore}>
                  <div className={styles.corePulse} />
                </div>
                <div className={styles.connectorLine} />
              </div>
              
              {/* Content card */}
              <div className={styles.expCard}>
                {/* Header with duration */}
                <div className={styles.cardHeader}>
                  <div className={styles.cardIndex}>
                    <span className={styles.indexNumber}>{String(index + 1).padStart(2, '0')}</span>
                    <span className={styles.indexBar} />
                  </div>
                  <div className={styles.duration}>
                    <span className={styles.durationIcon}>⏱</span>
                    <span>{exp.duration}</span>
                  </div>
                </div>
                
                {/* Main content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  
                  <div className={styles.companyInfo}>
                    <span className={styles.bracket}>{'<'}</span>
                    <span className={styles.companyName}>{exp.company}</span>
                    <span className={styles.bracket}>{'/>'}</span>
                  </div>
                  
                  {exp.location && (
                    <div className={styles.location}>
                      <span className={styles.locationIcon}>📍</span>
                      {exp.location}
                    </div>
                  )}
                  
                  {/* Highlights */}
                  {exp.highlights && (
                    <div className={styles.highlights}>
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className={styles.highlightItem}>
                          <div className={styles.highlightMarker} />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Tech stack */}
                  {exp.technologies && (
                    <div className={styles.techStack}>
                      <div className={styles.stackHeader}>
                        <span>{'>'} tech_stack[]</span>
                      </div>
                      <div className={styles.techGrid}>
                        {exp.technologies.slice(0, 8).map((tech, idx) => (
                          <div key={idx} className={styles.techChip}>
                            <span className={styles.techDot} />
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Bottom border animation */}
                <div className={styles.cardBorder} />
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.sectionFooter}>
          <span className={styles.sectionId}>{'</section>'}</span>
        </div>
      </div>
    </section>
  );
}
