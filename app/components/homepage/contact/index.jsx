'use client';

import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebook, FaStackOverflow, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import styles from './contact.module.scss';
import { useState } from 'react';

export default function ContactSection() {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  
  const socialLinks = [
    { icon: FaGithub, url: personalData.github, label: 'GitHub', color: '#ffffff' },
    { icon: BiLogoLinkedin, url: personalData.linkedIn, label: 'LinkedIn', color: '#0077b5' },
    { icon: FaXTwitter, url: personalData.twitter, label: 'Twitter', color: '#1DA1F2', condition: personalData.twitter },
    { icon: FaStackOverflow, url: personalData.stackOverflow, label: 'StackOverflow', color: '#f48024', condition: personalData.stackOverflow },
    { icon: FaFacebook, url: personalData.facebook, label: 'Facebook', color: '#1877f2', condition: personalData.facebook }
  ].filter(link => link.condition !== false);

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>{'<section id="contact">'}</span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleBracket}>{'{'}</span>
            <span className={styles.titleText}> INITIALIZE_CONNECTION </span>
            <span className={styles.titleBracket}>{'}'}</span>
          </h2>
          <p className={styles.subtitle}>
            {'// '} Ready to collaborate on groundbreaking AI projects?
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Email Terminal */}
          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalDots}>
                <span className={styles.dot} style={{ background: '#ff5f56' }} />
                <span className={styles.dot} style={{ background: '#ffbd2e' }} />
                <span className={styles.dot} style={{ background: '#27c93f' }} />
              </div>
              <span className={styles.terminalTitle}>email_client.sh</span>
            </div>
            
            <div className={styles.terminalBody}>
              <div className={styles.terminalLine}>
                <span className={styles.prompt}>$</span>
                <span className={styles.command}>cat contact.txt</span>
              </div>
              <div className={styles.terminalOutput}>
                <div className={styles.outputLine}>
                  <FaEnvelope className={styles.outputIcon} />
                  <a href={`mailto:${personalData.email}`} className={styles.emailLink}>
                    {personalData.email}
                  </a>
                </div>
                <div className={styles.outputLine}>
                  <FaMapMarkerAlt className={styles.outputIcon} />
                  <span className={styles.locationText}>{personalData.address}</span>
                </div>
              </div>
              <div className={styles.cursor}>_</div>
            </div>
          </div>

          {/* Connection Hub */}
          <div className={styles.connectionHub}>
            <div className={styles.hubCenter}>
              <div className={styles.centerNode}>
                <div className={styles.nodePulse} />
                <div className={styles.nodeRing} />
                <div className={styles.nodeRing} style={{ animationDelay: '1s' }} />
                <span className={styles.nodeLabel}>CONNECT</span>
              </div>
            </div>

            {/* Social Nodes */}
            <div className={styles.socialNodes}>
              {socialLinks.map((social, index) => {
                const angle = (index / socialLinks.length) * Math.PI * 2 - Math.PI / 2;
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialNode} ${hoveredSocial === index ? styles.active : ''}`}
                    style={{
                      '--x': `${x}px`,
                      '--y': `${y}px`,
                      '--color': social.color,
                      '--delay': `${index * 0.1}s`
                    }}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    {/* Connection line */}
                    <svg className={styles.connectionLine} viewBox="0 0 200 200">
                      <line
                        x1="100"
                        y1="100"
                        x2={100 + x}
                        y2={100 + y}
                        stroke={social.color}
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        opacity="0.4"
                      />
                    </svg>

                    <div className={styles.nodeContainer}>
                      <div className={styles.nodeOrbit} style={{ borderColor: social.color }}>
                        <social.icon className={styles.nodeIcon} />
                        <div className={styles.nodeGlow} style={{ background: social.color }} />
                      </div>
                      
                      <div className={styles.nodeLabel}>
                        <span>{social.label}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Status Panel */}
          <div className={styles.statusPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>{'>'} connection_status</span>
              <div className={styles.statusIndicator}>
                <div className={styles.statusDot} />
                <span>ONLINE</span>
              </div>
            </div>

            <div className={styles.panelContent}>
              <div className={styles.statusItem}>
                <span className={styles.statusKey}>availability:</span>
                <span className={styles.statusValue}>OPEN_TO_OPPORTUNITIES</span>
              </div>
              
              <div className={styles.statusItem}>
                <span className={styles.statusKey}>response_time:</span>
                <span className={styles.statusValue}>{'< 24hrs'}</span>
              </div>
              
              <div className={styles.statusItem}>
                <span className={styles.statusKey}>timezone:</span>
                <span className={styles.statusValue}>EST (UTC-5)</span>
              </div>

              <div className={styles.statusItem}>
                <span className={styles.statusKey}>collaboration:</span>
                <span className={styles.statusValue}>READY</span>
              </div>

              <div className={styles.dataVisualization}>
                <div className={styles.vizLabel}>activity_graph</div>
                <div className={styles.vizBars}>
                  {[65, 80, 70, 90, 85, 75, 95].map((height, i) => (
                    <div
                      key={i}
                      className={styles.vizBar}
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.panelFooter}>
              <div className={styles.encryptionBadge}>
                <span className={styles.lockIcon}>🔒</span>
                <span>END_TO_END_ENCRYPTED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              <span className={styles.ctaBracket}>{'['}</span>
              Let's Build Something Amazing
              <span className={styles.ctaBracket}>{']'}</span>
            </h3>
            <p className={styles.ctaText}>
              Whether you're looking to collaborate on cutting-edge AI research, 
              discuss ASIC design innovations, or explore new opportunities — 
              I'm just a message away.
            </p>
            <a href={`mailto:${personalData.email}`} className={styles.ctaButton}>
              <span className={styles.buttonText}>
                <span className={styles.buttonIcon}>{'>'}</span>
                SEND_MESSAGE
              </span>
              <div className={styles.buttonBg} />
            </a>
          </div>
        </div>

        <div className={styles.sectionFooter}>
          <span className={styles.sectionId}>{'</section>'}</span>
        </div>
      </div>

      {/* Animated background grid */}
      <div className={styles.gridOverlay}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className={styles.gridLine} />
        ))}
      </div>
    </section>
  );
}
