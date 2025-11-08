'use client';

import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className={styles.toggleContainer}>
        <div className={styles.toggle} aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={styles.toggleContainer}>
      <button
        className={`${styles.toggle} ${styles[theme]}`}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Current: ${theme === 'dark' ? 'TR-808' : 'TR-909'} mode`}
      >
        <span className={styles.toggleTrack}>
          <span className={styles.toggleHandle} />
          <span className={styles.toggleLabel}>{theme === 'dark' ? '808' : '909'}</span>
        </span>
      </button>
    </div>
  );
}
