import Link from 'next/link';
import Header from '../../components/Header';
import styles from '../../styles/ProjectDetail.module.css';
import '../../styles/globals.css';
import { motion } from 'framer-motion';
import { basePath } from '../../utils/constants';

const BrasaPortal = () => {
  return (
    <>
      <Header />
      <div className={styles.backButton}>
        <Link href="/" className={styles.backArrow}>
          ←
        </Link>
      </div>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          BRASA Portal
        </motion.h1>
        <motion.p 
          className={styles.date}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          January 2025 - Present
        </motion.p>

        <motion.div
          className={styles.demoGif}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <video
            className={styles.gif}
            controls
            loop
            playsInline
            poster={`${basePath}/images/projects/brasa-portal.png`}
          >
            <source src={`${basePath}/videos/brasa-portal-demo.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.caption}>No video available. But the portal is live and can be accessed <a href="https://portalbrasa.gobrasa.org/" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </motion.div>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Description</h2>
          <p>
          BRASA Portal is the official web platform that powers BRASA&apos;s conference sales, professional opportunity listings, and student-company connections. It serves as a central hub for students, partner companies, and board members to engage with BRASA&apos;s ecosystem.
          </p>
          <p>
          This project was established before I joined the organization. Since becoming part of the development team, my primary responsibility—alongside a fellow team member—has been to refactor the existing codebase, improve performance and usability, and document the system thoroughly to ensure sustainability. While I&apos;ve worked primarily on the frontend, I&apos;ve also contributed to the backend as needed. Our efforts have laid the groundwork for a more scalable and maintainable system as we prepare to implement new features.
          </p>
          <p>
          Key features include:
          </p>
          <ul className={styles.descriptionList}>
            <li>
            Conference Sales: Students can purchase access to upcoming BRASA conferences directly through the portal, which then grants access to conference content in BRASApp.
            </li>
            <li>
            Opportunity Base: A dynamic job board showcasing internships, full-time positions, and volunteer roles from BRASA and its partner companies.
            </li>
            <li>
            Student Profiles: Users can create and edit detailed profiles that highlight their academic background, interests, and career aspirations.
            </li>
            <li>
            Company Profiles: Each partner organization has a dedicated page where students can learn more, browse opportunities, and follow external links.
            </li>
            <li>
              My Board Dashboard: BRASA board members can create, edit, and close job postings through a dedicated dashboard interface.
            </li>
            <li>
            Talent Base: Based on their access level, companies and board members can search and filter student profiles to identify potential candidates, using criteria like conference participation and academic interests.
            </li>
          </ul>
          
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Tools</h2>
          <ul>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              React.js
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Next.js
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Django
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              TypeScript
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              HTML/CSS
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Python
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Git
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              AWS
            </motion.li>
          </ul>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>Demo & Links</h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="https://github.com/gobrasa" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </motion.p>
           <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="https://portalbrasa.gobrasa.org/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </motion.p> 
        </motion.section>
      </motion.div>
    </>
  );
};

export default BrasaPortal;     