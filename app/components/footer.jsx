'use client';

import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>MOTASEM SAKR</div>
          
          <ul className={styles.links}>
            <li>
              <Link href="/#about" className={styles.link}>About</Link>
            </li>
            <li>
              <Link href="/#experience" className={styles.link}>Experience</Link>
            </li>
            <li>
              <Link href="/#skills" className={styles.link}>Skills</Link>
            </li>
            <li>
              <Link href="/#projects" className={styles.link}>Projects</Link>
            </li>
            <li>
              <Link href="/#contact" className={styles.link}>Contact</Link>
            </li>
          </ul>
          
          <div className={styles.divider}></div>
          
          <div className={styles.copyright}>
            © {currentYear} <Link href="https://www.linkedin.com/in/motasem-sakr" target="_blank" rel="noopener noreferrer">Motasem Sakr</Link>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
