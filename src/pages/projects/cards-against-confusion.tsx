import Link from 'next/link';
import Header from '../../components/Header';
import styles from '../../styles/ProjectDetail.module.css';
import '../../styles/globals.css';
import { motion } from 'framer-motion';

const CardsAgainstConfusion = () => {
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
          Cards Against Confusion
        </motion.h1>
        <motion.p 
          className={styles.date}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          August 2024
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
            poster={`${basePath}/images/projects/cards-project.png`}
          >
            <source src={`${basePath}/videos/c-a-p-demo.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
            Cards Against Confusion is a task management app with a flashcard-inspired UI. It uses AI to generate task lists based on user input, allowing users to plan their tasks with or without details. The app provides a detailed task list with descriptions and tasks ranked by priority.
          </p>
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
              React
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
              Firebase
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Stripe
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              OpenAI
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
            <a href="https://github.com/katrinars/flashcard-app" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </motion.p>
          {/* <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="https://cards-against-confusion-demo.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </motion.p> */}
        </motion.section>
      </motion.div>
    </>
  );
};

export default CardsAgainstConfusion; 