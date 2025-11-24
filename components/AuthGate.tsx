'use client';

import { useState, useEffect } from 'react';
import styles from './AuthGate.module.scss';

const PASSCODE = '1234567';
const AUTH_KEY = 'site_authenticated';

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem(AUTH_KEY);
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passcode === PASSCODE) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid passcode. Please try again.');
      setPasscode('');
    }
  };

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className={styles.authContainer}>
        <div className={styles.authBox}>
          <div className={styles.lockIcon}>🔒</div>
          <h1 className={styles.title}>Protected Content</h1>
          <p className={styles.subtitle}>Please enter the passcode to access this site</p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter passcode"
              className={styles.input}
              autoFocus
            />
            
            {error && <p className={styles.error}>{error}</p>}
            
            <button type="submit" className={styles.button}>
              Unlock
            </button>
          </form>
          
          <div className={styles.particles}>
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className={styles.particle}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

