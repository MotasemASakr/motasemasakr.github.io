'use client';

import { skillsImage } from '@/utils/skill-image';
import Image from 'next/image';
import styles from './skills.module.scss';
import { useState, useEffect } from 'react';

const skillCategories = [
  {
    title: 'Programming',
    color: '#8b5cf6',
    skills: ['C++', 'Python', 'CUDA'],
    icon: '💻'
  },
  {
    title: 'ML Frameworks',
    color: '#a78bfa',
    skills: ['Pytorch', 'Tensorflow'],
    icon: '🧠'
  },
  {
    title: 'HDL & ASIC Design',
    color: '#c084fc',
    skills: ['SystemVerilog', 'Verilog'],
    icon: '⚡'
  },
  {
    title: 'Web Development',
    color: '#d8b4fe',
    skills: ['Django', 'Flask', 'MongoDB', 'NodeJS', 'JavaScript'],
    icon: '🌐'
  }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>{'<section id="skills">'}</span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleBracket}>{'{'}</span>
            <span className={styles.titleText}> TECH_ARSENAL </span>
            <span className={styles.titleBracket}>{'}'}</span>
          </h2>
          <p className={styles.subtitle}>
            {'// '} Mastered technologies powering next-gen AI systems
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`${styles.categoryCard} ${activeCategory === catIndex ? styles.active : ''}`}
              onMouseEnter={() => setActiveCategory(catIndex)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Card header */}
              <div className={styles.cardHeader}>
                <div className={styles.categoryIcon} style={{ borderColor: category.color }}>
                  <span>{category.icon}</span>
                  <div className={styles.iconGlow} style={{ background: category.color }} />
                </div>
                
                <div className={styles.categoryInfo}>
                  <h3 className={styles.categoryTitle} style={{ color: category.color }}>
                    {category.title}
                  </h3>
                  <div className={styles.skillCount}>
                    <span className={styles.countBracket}>{'['}</span>
                    <span className={styles.countValue}>{category.skills.length}</span>
                    <span className={styles.countBracket}>{']'}</span>
                    <span className={styles.countLabel}>_skills</span>
                  </div>
                </div>
              </div>

              {/* Connection nodes */}
              <svg className={styles.connectionWeb} viewBox="0 0 100 100">
                {category.skills.map((_, i) => {
                  const angle = (i / category.skills.length) * Math.PI * 2 - Math.PI / 2;
                  const x = 50 + Math.cos(angle) * 35;
                  const y = 50 + Math.sin(angle) * 35;
                  return (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      className={styles.webLine}
                      style={{ stroke: category.color }}
                    />
                  );
                })}
                <circle cx="50" cy="50" r="5" fill={category.color} opacity="0.8" />
              </svg>

              {/* Skills display */}
              <div className={styles.skillsContainer}>
                {category.skills.map((skill, skillIndex) => {
                  const angle = (skillIndex / category.skills.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={skillIndex}
                      className={`${styles.skillNode} ${hoveredSkill === `${catIndex}-${skillIndex}` ? styles.hovered : ''}`}
                      style={{
                        '--x': `${x}px`,
                        '--y': `${y}px`,
                        '--delay': `${skillIndex * 0.1}s`
                      }}
                      onMouseEnter={() => setHoveredSkill(`${catIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className={styles.skillOrbit} style={{ borderColor: category.color }}>
                        <div className={styles.skillCore}>
                          <div className={styles.skillImage}>
                            <Image
                              src={skillsImage(skill)}
                              alt={skill}
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className={styles.skillGlow} style={{ background: category.color }} />
                        </div>
                      </div>
                      
                      <div className={styles.skillLabel} style={{ borderColor: category.color }}>
                        <span>{skill}</span>
                      </div>

                      {/* Skill level bars */}
                      <div className={styles.skillMetrics}>
                        {[1, 2, 3, 4, 5].map((bar) => (
                          <div
                            key={bar}
                            className={styles.metricBar}
                            style={{
                              background: category.color,
                              opacity: bar <= 4 ? 0.8 : 0.2
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Category stats */}
              <div className={styles.categoryStats}>
                <div className={styles.statBar} style={{ background: `linear-gradient(90deg, ${category.color}, transparent)` }} />
                <div className={styles.statInfo}>
                  <span className={styles.statLabel}>mastery_level:</span>
                  <span className={styles.statValue} style={{ color: category.color }}>
                    {[95, 92, 88, 90][catIndex]}%
                  </span>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className={styles.cardOverlay} style={{ background: `linear-gradient(135deg, ${category.color}15, transparent)` }} />
            </div>
          ))}
        </div>

        {/* Central hub visualization */}
        <div className={styles.centralHub}>
          <div className={styles.hubCore}>
            <div className={styles.hubPulse} />
            <div className={styles.hubRing} />
            <div className={styles.hubRing} style={{ animationDelay: '1s' }} />
            <span className={styles.hubLabel}>CORE</span>
          </div>
        </div>

        <div className={styles.sectionFooter}>
          <span className={styles.sectionId}>{'</section>'}</span>
        </div>
      </div>
    </section>
  );
}
