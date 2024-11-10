// Footer.tsx
import React from 'react';
import { lusitana } from "@/components/fonts";
import styles from './Navbar.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <h1 className={`${lusitana.className} ${styles.footerText} ${styles.footerTextLarge}`}>
        Maham &copy; {new Date().getFullYear()}
      </h1>
    </footer>
  );
};

export default Footer;
