import Link from 'next/link';
import Header from '../../components/Header';
import styles from '../../styles/ProjectDetail.module.css';
import '../../styles/globals.css';
import { motion } from 'framer-motion';

const BrasaPortal = () => {
  const basePath = process.env.NODE_ENV === 'production' ? '/personal-portfolio' : '';
  
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
          January 2024
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
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.section
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2>About the Project</h2>
          <p>
            The BRASA Portal is a comprehensive web platform designed to streamline the management of BRASA&apos;s conferences, professional opportunities, and student engagement. It serves as a central hub for Brazilian students abroad to access resources, connect with opportunities, and stay engaged with the BRASA community.
          </p>
        </motion.section>

        <motion.section
          className={styles.techStack}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2>Technologies Used</h2>
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
              Python
            </motion.li>
          </ul>
        </motion.section>
      </motion.div>
    </>
  );
};

export default BrasaPortal;     