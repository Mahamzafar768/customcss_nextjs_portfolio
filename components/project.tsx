// Project.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiGlobalFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { lusitana } from "@/components/fonts";
import styles from './Navbar.module.css';

const Project = () => {
  return (
    <section id="project" className={styles.projectSection}>
      <h1 className={`${lusitana.className} ${styles.projectHeading}`}>
        My <span className="font-bold text-3xl">Projects</span>
      </h1>
      
      <div className={styles.projectContainer}>
        {/* Project Card 1 */}
        <div className={styles.projectCard}>
          <Image
            src="/cv.png"
            width={430}
            height={454}
            alt="static resume"
            className={styles.projectImage}
          />
          <h1 className={`${lusitana.className} ${styles.projectCardTitle}`}>
            Static Resume Builder
          </h1>
          <div className={styles.projectButtonContainer}>
            <Link href="https://static-resume-project-by-mahamzafar.vercel.app/" target="_blank">
              <button
                type="button"
                className={`${styles.projectButton} ${styles.visitSiteButton}`}
              >
                <span>Visit Site</span> <RiGlobalFill />
              </button>
            </Link>
            <Link href="https://github.com/Mahamzafar768/Static-Resume-Project" target="_blank">
              <button
                type="button"
                className={`${styles.projectButton} ${styles.githubButton}`}
              >
                <span>GitHub</span> <FaGithub />
              </button>
            </Link>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className={styles.projectCard}>
          <Image
            src="/edit.png"
            width={430}
            height={454}
            alt="dynamic resume"
            className={styles.projectImage}
          />
          <h1 className={`${lusitana.className} ${styles.projectCardTitle}`}>
            Dynamic Resume Builder
          </h1>
          <div className={styles.projectButtonContainer}>
            <Link href="https://shareable-resume-by-mahamzafar.vercel.app/" target="_blank">
              <button
                type="button"
                className={`${styles.projectButton} ${styles.visitSiteButton}`}
              >
                <span>Visit Site</span> <RiGlobalFill />
              </button>
            </Link>
            <Link href="https://github.com/Mahamzafar768/shareable-resume" target="_blank">
              <button
                type="button"
                className={`${styles.projectButton} ${styles.githubButton}`}
              >
                <span>GitHub</span> <FaGithub />
              </button>
            </Link>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className={styles.projectCard}>
          <Image
            src="/clone.png"
            width={430}
            height={454}
            alt="GIAIC Clone"
            className={styles.projectImage}
          />
          <h1 className={`${lusitana.className} ${styles.projectCardTitle}`}>
            GIAIC Clone
          </h1>
          <div className={styles.projectButtonContainer}>
            <Link href="" target="_blank">
              <button
                type="button"
                className={`${styles.projectButton} ${styles.visitSiteButton}`}
              >
                <span>Visit Site</span> <RiGlobalFill />
              </button>
            </Link>
            <Link href="" target="_blank">
              <button
                type="button"
                className={`${styles.projectButton} ${styles.githubButton}`}
              >
                <span>GitHub</span> <FaGithub />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
