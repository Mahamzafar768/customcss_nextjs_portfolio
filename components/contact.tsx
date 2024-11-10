// Contact.tsx
"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { lusitana } from "@/components/fonts";
import styles from './Navbar.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h1 className={`${lusitana.className} ${styles.contactHeading}`}>
        Contact <span className="font-bold text-2xl md:text-3xl">Me</span>
      </h1>
      
      <div className={styles.contactContainer}>
        {/* Email */}
        <div className={styles.contactItem}>
          <div className={styles.contactIconContainer}>
            <MdEmail size={38} />
          </div>
          <IoIosArrowForward size={30} className={styles.contactIconArrow} />
          <h2 className={`${lusitana.className} ${styles.contactText}`}>mahamteddy@gmail.com</h2>
        </div>

        {/* Phone */}
        <div className={styles.contactItem}>
          <div className={styles.contactIconContainer}>
            <IoCallSharp size={38} />
          </div>
          <IoIosArrowForward size={30} className={styles.contactIconArrow} />
          <h2 className={`${lusitana.className} ${styles.contactText}`}>0332 - 2304830</h2>
        </div>

        {/* Location */}
        <div className={styles.contactItem}>
          <div className={styles.contactIconContainer}>
            <FaLocationDot size={38} />
          </div>
          <IoIosArrowForward size={30} className={styles.contactIconArrow} />
          <h2 className={`${lusitana.className} ${styles.contactText}`}>Shahfaisal Green Town</h2>
        </div>

        <hr className={styles.contactDivider} />

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <Link href={"https://www.instagram.com/danx6495/profilecard/?igsh=bjF0bWc4Z3VzajJ4"} target="_blank">
            <div className={styles.socialIconContainer}>
              <FaInstagram size={30} />
            </div>
          </Link>

          <Link href={"https://www.linkedin.com/in/maham-zafar-8839702ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
            <div className={styles.socialIconContainer}>
              <FaLinkedinIn size={30} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
