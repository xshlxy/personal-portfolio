'use client';

import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.mainContent}>
            <p>
              I&apos;m a Brazilian software engineer and AI researcher blending Computer Science and Economics 
              to build tech that matters. As an undergraduate senior at Florida State University, I&apos;m 
              passionate about creating technology that makes a difference and bridges knowledge gaps.
            </p>

            <p>
              I&apos;m particularly interested in projects that increase access to education and support 
              underrepresented communities. Whether it&apos;s through web development, machine learning, or 
              user experience design, I strive to create technology that empowers people and drives 
              positive change.
            </p>
          </div>

          <motion.div 
            className={styles.funFacts}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Fun Facts</h3>
            <div className={styles.factsGrid}>
              <div className={styles.fact}>
                <span className={styles.factIcon}>🌎</span>
                <p>Fluent in Portuguese and English. Practing my French and Italian</p>
              </div>
              <div className={styles.fact}>
                <span className={styles.factIcon}>🎵</span>
                <p>Can play multiple instruments and love discovering new music. My favorite piece is Winter Wind by Chopin</p>
              </div>
              <div className={styles.fact}>
                <span className={styles.factIcon}>🎮</span>
                <p>Love playing cozy games like Stardew Valley and Animal Crossing</p>
              </div>
              <div className={styles.fact}>
                <span className={styles.factIcon}>🧶</span>
                <p>Trying to learn everything I can about arts and crafts</p>
              </div>
              <div className={styles.fact}>
                <span className={styles.factIcon}>🎨</span>
                <p>Favorite paintings are Starry Night by Van Gogh and Water Lilies Series by Monet</p>
              </div>
              <div className={styles.fact}>
                <span className={styles.factIcon}>🎬</span>
                <p>Love watching movies and TV shows. My favorite movie is Interstellar (I know it&apos;s basic)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
