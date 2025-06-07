import styles from '../styles/Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradient} />
        <div className={styles.pattern} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.textContent}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I&apos;m <span className={styles.highlight}>Ashley</span>
          </motion.h1>
          
          <motion.h2 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={styles.accent}>Software Engineer</span> & <span className={styles.accent}>AI Researcher</span>
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build innovative solutions that combine cutting-edge technology with user-centric design.
            Currently a senior pursuing a dual degree in Computer Science and Economics at Florida State University.
          </motion.p>
          
          <motion.div 
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#projects" className={styles.primaryButton}>
              View My Work
            </a>
            <a href="#connect" className={styles.secondaryButton}>
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
