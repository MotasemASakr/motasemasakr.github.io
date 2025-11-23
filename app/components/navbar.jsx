'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from './navbar.module.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['about', 'experience', 'skills', 'publications', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/#about", label: "About", id: "about" },
    { href: "/#experience", label: "Experience", id: "experience" },
    { href: "/#skills", label: "Skills", id: "skills" },
    { href: "/#publications", label: "Publications", id: "publications" },
    { href: "/#projects", label: "Projects", id: "projects" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo with neural connection */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoNode}>
            <div className={styles.nodePulse} />
          </div>
          <span className={styles.logoText}>
            <span className={styles.bracket}>{'<'}</span>
            MS
            <span className={styles.bracket}>{'/>'}</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className={`${styles.mobileMenuButton} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation menu */}
        <ul className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
          {navItems.map((item, index) => (
            <li key={item.href} className={styles.navItem}>
              <Link 
                href={item.href} 
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <span className={styles.linkIndex}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.linkText}>{item.label}</span>
                <div className={styles.linkIndicator} />
              </Link>
            </li>
          ))}
        </ul>

        {/* Connection lines overlay */}
        <svg className={styles.connectionOverlay} viewBox="0 0 100 10">
          <line 
            x1="0" 
            y1="5" 
            x2="100" 
            y2="5" 
            stroke="rgba(139, 92, 246, 0.2)" 
            strokeWidth="0.5"
            strokeDasharray="2,2"
          />
        </svg>
      </div>
    </nav>
  );
}
