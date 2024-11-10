
'use client'
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { lusitana } from "@/components/fonts";
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbarContent}>
        {/* Logo Section */}
        <div className={styles.navbarLogo}>
          <h1 className={`${lusitana.className} ${styles.navbarLogoText}`}>Maham</h1>
        </div>

        {/* Desktop Menu */}
        <ul className={styles.navbarMenu}>
          <li className={`${lusitana.className} ${styles.navbarMenuItem} ${styles.navbarMenuItemActive}`}><a href="#home">Home</a></li>
          <li className={styles.navbarMenuItem}><a href="#about">About</a></li>
          <li className={styles.navbarMenuItem}><a href="#skill">Skills</a></li>
          <li className={styles.navbarMenuItem}><a href="#project">Projects</a></li>
          <li className={styles.navbarMenuItem}><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className={styles.navbarMenuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <IoCloseSharp size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className={styles.navbarMobileMenu}>
          <li className={styles.navbarMobileMenuLink}><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li className={styles.navbarMobileMenuLink}><a href="#about" onClick={toggleMenu}>About</a></li>
          <li className={styles.navbarMobileMenuLink}><a href="#skill" onClick={toggleMenu}>Skills</a></li>
          <li className={styles.navbarMobileMenuLink}><a href="#project" onClick={toggleMenu}>Projects</a></li>
          <li className={styles.navbarMobileMenuLink}><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
