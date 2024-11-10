// About.tsx
import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { lusitana } from "@/components/fonts";
import styles from './Navbar.module.css';

const About = () => {
    return (
        <>
            <section className={styles.aboutSection} id="about">
                <h1 className={`${lusitana.className} ${styles.aboutHeading}`}>
                    About <span className={styles.aboutSubheading}>Me</span>
                </h1>
                
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutImageContainer}>
                        <Image src="/maham1.png" width={300} height={300} alt="Suleman" className={styles.aboutImage} />
                    </div>
                    
                    <div className={styles.aboutTextContainer}>
                        <FaQuoteLeft className={styles.aboutQuoteIcon} />
                        <p className={styles.aboutQuoteText}>
                            As a skilled and dedicated Frontend Developer, I bring a strong blend of creativity, technical expertise,
                            and a deep understanding of modern web design principles.
                        </p>
                        <FaQuoteRight className={styles.aboutQuoteIconEnd} />
                    </div>
                </div>
                
                <div className={styles.aboutEducationSection}>
                    <h2 className={`${lusitana.className} ${styles.aboutEducationHeading}`}>Education :</h2>
                    <div className={styles.aboutEducationLine}></div>
                    
                    <ul className={styles.aboutEducationList}>
                        <li className={styles.aboutEducationItem}>
                            <p className={styles.aboutEducationItemDate}>Mar 2022 - June 2024</p>
                            <h3 className={styles.aboutEducationItemTitle}>Intermediate, Computer Science</h3>
                            <p className={styles.aboutEducationItemInstitution}>City Grammar Secondary School Karachi</p>
                        </li>
                        
                        <li className={styles.aboutEducationItem}>
                            <p className={styles.aboutEducationItemDate}>Feb 2024 - Present</p>
                            <h3 className={styles.aboutEducationItemTitle}>Web 3, AI, & Metaverse</h3>
                            <p className={styles.aboutEducationItemInstitution}>Governor Sindh Kamran Tessori Initiative for Artificial Intelligence & Computing</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default About;
