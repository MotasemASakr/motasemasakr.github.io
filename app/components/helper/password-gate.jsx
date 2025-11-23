'use client';

import { useState, useEffect } from 'react';
import styles from './password-gate.module.scss';

export default function PasswordGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const auth = sessionStorage.getItem('siteAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Client-side password validation (works with static export)
    const SITE_PASSWORD = '1234567';

    // Simulate a brief delay for better UX
    setTimeout(() => {
      if (password === SITE_PASSWORD) {
        sessionStorage.setItem('siteAuth', 'true');
        setIsAuthenticated(true);
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
      setIsSubmitting(false);
    }, 500);
  };

  if (loading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className={styles.passwordGate}>
        <div className={styles.transformerGrid}>
          {/* Neural nodes */}
          <div className={styles.neuralNode} style={{ left: '10%', top: '20%' }}>
            <div className={styles.nodeCore}>
              <div className={styles.nodePulse}></div>
            </div>
          </div>
          <div className={styles.neuralNode} style={{ left: '90%', top: '20%' }}>
            <div className={styles.nodeCore}>
              <div className={styles.nodePulse}></div>
            </div>
          </div>
          <div className={styles.neuralNode} style={{ left: '10%', top: '80%' }}>
            <div className={styles.nodeCore}>
              <div className={styles.nodePulse}></div>
            </div>
          </div>
          <div className={styles.neuralNode} style={{ left: '90%', top: '80%' }}>
            <div className={styles.nodeCore}>
              <div className={styles.nodePulse}></div>
            </div>
          </div>

          <div className={styles.authPanel}>
            <div className={styles.panelBorder}>
              <div className={styles.corner} style={{ top: 0, left: 0 }} />
              <div className={styles.corner} style={{ top: 0, right: 0 }} />
              <div className={styles.corner} style={{ bottom: 0, left: 0 }} />
              <div className={styles.corner} style={{ bottom: 0, right: 0 }} />
            </div>
            
            <div className={styles.scanLine} />
            
            <div className={styles.content}>
              <div className={styles.lockIcon}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h1 className={styles.title}>
                <span className={styles.bracket}>{'[ '}</span>
                ACCESS RESTRICTED
                <span className={styles.bracket}>{' ]'}</span>
              </h1>
              
              <p className={styles.subtitle}>
                AUTHENTICATION REQUIRED
              </p>
              
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter access code..."
                    className={styles.input}
                    autoFocus
                    disabled={isSubmitting}
                  />
                  <div className={styles.inputBorder}></div>
                </div>
                
                {error && (
                  <div className={styles.error}>
                    <span className={styles.errorIcon}>!</span>
                    {error}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting || !password}
                >
                  <span className={styles.buttonBg}></span>
                  <span className={styles.buttonText}>
                    <span className={styles.buttonIcon}>{'>'}</span>
                    {isSubmitting ? 'AUTHENTICATING...' : 'AUTHENTICATE'}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Data stream effect */}
          <div className={styles.dataStream}>
            {['a3x9k2', 'b7m5n1', 'c2p8q4', 'd9r6s3', 'e4t7u2', 'f8v3w1', 'g5x9y6', 'h1z4a8'].map((code, i) => (
              <div key={i} className={styles.streamLine} style={{ left: `${i * 12}%`, animationDelay: `${i * 0.3}s` }}>
                {code}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return children;
}

