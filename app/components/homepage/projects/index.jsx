'use client';

import { projectsData } from '@/utils/data/projects-data';
import Image from 'next/image';
import styles from './projects.module.scss';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from 'react-icons/fa';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>{'<section id="projects">'}</span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleBracket}>{'['}</span>
            <span className={styles.titleText}> PROJECT_SHOWCASE </span>
            <span className={styles.titleBracket}>{']'}</span>
          </h2>
          <p className={styles.subtitle}>
            {'// '} Transformative solutions at the intersection of AI and innovation
          </p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${hoveredProject === index ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className={styles.cardHeader}>
                <div className={styles.projectIndex}>
                  <span className={styles.indexHash}>#</span>
                  <span className={styles.indexNumber}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                
                <div className={styles.statusBadge}>
                  <div className={styles.statusDot} />
                  <span>LIVE</span>
                </div>
              </div>

              {/* Project Image with Overlay */}
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.imageOverlay} />
                  <div className={styles.scanLine} />
                </div>

                {/* Corner Markers */}
                {[0, 1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className={styles.cornerMarker}
                    style={{
                      top: i < 2 ? 0 : 'auto',
                      bottom: i >= 2 ? 0 : 'auto',
                      left: i % 2 === 0 ? 0 : 'auto',
                      right: i % 2 !== 0 ? 0 : 'auto'
                    }}
                  />
                ))}
              </div>

              {/* Project Content */}
              <div className={styles.cardContent}>
                <div className={styles.projectMeta}>
                  <span className={styles.roleTag}>
                    <FaCode />
                    {project.role}
                  </span>
                </div>

                <h3 className={styles.projectTitle}>{project.name}</h3>
                
                <p className={styles.projectDescription}>
                  {project.description.length > 150 
                    ? `${project.description.substring(0, 150)}...` 
                    : project.description}
                </p>

                {/* Tech Stack */}
                <div className={styles.techStack}>
                  <div className={styles.stackHeader}>
                    <span className={styles.terminalPrompt}>{'>'}</span>
                    <span className={styles.stackLabel}>tech_stack</span>
                  </div>
                  <div className={styles.techGrid}>
                    {project.tools.slice(0, 6).map((tool, i) => (
                      <div key={i} className={styles.techChip}>
                        <div className={styles.chipDot} />
                        <span>{tool}</span>
                      </div>
                    ))}
                    {project.tools.length > 6 && (
                      <div className={styles.techChip}>
                        <span>+{project.tools.length - 6} more</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Bars (visual element) */}
                <div className={styles.progressBars}>
                  {[
                    { label: 'Design', value: 88 },
                    { label: 'Code', value: 94 },
                    { label: 'Deploy', value: 95 }
                  ].map((bar, i) => (
                    <div key={i} className={styles.progressItem}>
                      <div className={styles.progressLabel}>
                        <span>{bar.label}</span>
                        <span>{Math.floor(bar.value)}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ 
                            width: `${bar.value}%`,
                            animationDelay: `${i * 0.1}s`
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={styles.actionButtons}>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.actionBtn} ${styles.primary}`}
                    >
                      <FaRocket />
                      <span>LAUNCH</span>
                      <div className={styles.btnGlow} />
                    </a>
                  )}
                  {project.code && (
                    <a 
                      href={project.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.actionBtn} ${styles.secondary}`}
                    >
                      <FaGithub />
                      <span>SOURCE</span>
                    </a>
                  )}
                  {!project.demo && !project.code && (
                    <div className={styles.comingSoon}>
                      <span>{'<'} COMING_SOON {'/>'}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Connection Nodes */}
              <div className={styles.connectionNodes}>
                <div className={styles.node} />
                <div className={styles.node} />
                <div className={styles.node} />
              </div>

              {/* Hover Glow Effect */}
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>

        {/* Grid Background */}
        <div className={styles.gridBackground}>
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
