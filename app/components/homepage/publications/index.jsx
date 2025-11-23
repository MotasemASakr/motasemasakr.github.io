'use client';

import { publications } from '@/utils/data/publications';
import styles from './publications.module.scss';
import { useState } from 'react';

export default function PublicationsSection() {
  const [selectedPub, setSelectedPub] = useState(null);

  return (
    <section id="publications" className={styles.publicationsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>{'<section id="publications">'}</span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleBracket}>{'['}</span>
            <span className={styles.titleText}> RESEARCH_OUTPUT </span>
            <span className={styles.titleBracket}>{']'}</span>
          </h2>
          <p className={styles.subtitle}>
            {'// '} Pushing boundaries of computational imaging & AI hardware
          </p>
        </div>
        
        <div className={styles.publicationsMatrix}>
          {publications.map((pub, index) => (
            <div
              key={pub.id}
              className={`${styles.pubCard} ${selectedPub === index ? styles.selected : ''}`}
              onMouseEnter={() => setSelectedPub(index)}
              onMouseLeave={() => setSelectedPub(null)}
            >
              {/* Card number & status */}
              <div className={styles.cardHeader}>
                <div className={styles.cardNumber}>
                  <span className={styles.hashTag}>#</span>
                  <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className={styles.cardStatus}>
                  <div className={styles.statusDot} />
                  <span>{pub.badge}</span>
                </div>
              </div>
              
              {/* Connection points */}
              <div className={styles.connectionPoints}>
                <div className={styles.point} />
                <div className={styles.point} />
                <div className={styles.point} />
              </div>
              
              {/* Main content */}
              <div className={styles.cardBody}>
                <div className={styles.yearBadge}>
                  <span className={styles.yearPrefix}>{'{'}</span>
                  <span className={styles.yearValue}>{pub.year}</span>
                  <span className={styles.yearPrefix}>{'}'}</span>
                </div>
                
                <h3 className={styles.pubTitle}>{pub.title}</h3>
                
                <div className={styles.metaBar}>
                  <span className={styles.metaItem}>
                    <span className={styles.metaKey}>author:</span>
                    <span className={styles.metaValue}>{pub.authors}</span>
                  </span>
                </div>
                
                <div className={styles.journalTag}>
                  {pub.journal}
                </div>
                
                <p className={styles.description}>{pub.description}</p>
                
                {/* Data visualization bars */}
                <div className={styles.dataBars}>
                  {[85, 92, 78, 95, 88].map((value, i) => (
                    <div key={i} className={styles.dataBar}>
                      <div 
                        className={styles.dataFill} 
                        style={{ height: `${value}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Footer with type */}
              <div className={styles.cardFooter}>
                <div className={styles.typeIndicator}>
                  <span className={styles.bracket}>{'<'}</span>
                  <span>{pub.type}</span>
                  <span className={styles.bracket}>{'/>'}</span>
                </div>
                
                {pub.link && (
                  <a href={pub.link} className={styles.accessLink} target="_blank" rel="noopener noreferrer">
                    <span>ACCESS_FILE</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1L15 8L8 15M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>
              
              {/* Hover glow effect */}
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
        
        {/* Matrix grid overlay */}
        <div className={styles.matrixGrid}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className={styles.gridLine} />
          ))}
        </div>
        
        <div className={styles.sectionFooter}>
          <span className={styles.sectionId}>{'</section>'}</span>
        </div>
      </div>
    </section>
  );
}

