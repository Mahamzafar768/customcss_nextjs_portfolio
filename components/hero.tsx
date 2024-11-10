// Hero.tsx
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { lusitana } from "@/components/fonts";
import Link from "next/link";
import styles from './Navbar.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.heroContainer}>
        {/* Text Section */}
        <div className={`${styles.heroTextSection} ${styles.heroTextLeft}`}>
          <div className={styles.heroGreeting}>
            <MdWavingHand size={25} />
            <h1 className="text-2xl font-bold">Hello, I&apos;m</h1>
          </div>

          <h1 className={`${lusitana.className} ${styles.heroHeading}`}>Maham Zafar</h1>
          <h2 className={styles.heroSubheading}>
            <span className={`${lusitana.className} ${styles.heroSubheadingHighlight}`}>FrontEnd Developer</span>
          </h2>

          <div className={styles.heroButtonContainer}>
            <Link href={"https://github.com/Mahamzafar768"} target="_blank">
              <button className={styles.heroButton} type="button">
                Github Account
                <FaGithub size={25} className="ml-2" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.heroImageSection}>
          <Image
            src="/prog1.png"
            width={400}
            height={300}
            alt="suleman"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
