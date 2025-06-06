import Link from 'next/link';
import Header from '../../components/Header';
import styles from '../../styles/ProjectDetail.module.css';
import '../../styles/globals.css';
import { motion } from 'framer-motion';

const BrasApp = () => {
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
          BRASApp
        </motion.h1>
        <motion.p 
          className={styles.date}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          March 2025
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
            poster="/images/projects/brasapp.png"
          >
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className={styles.caption}>I don&apos;t want to spoil the app so the video is not available. But the app will be available soon.</p>
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
            BRASApp is the official mobile platform developed for BRASA conferences and members, designed to enhance the student experience through seamless access to personalized event content and organization resources.
          </p>
          <p>
          This app replaces an older web-based tool previously used by the organization. I have been involved in BRASApp from the very beginning. After identifying the limitations of the old system, we conducted stakeholder interviews to better understand the needs of students, board members, and partners. Following this, we presented a comprehensive proposal to BRASA leadership, which was approved. From there, I led the frontend development, collaborating closely with our development team to build a more modern, scalable, and intuitive experience. We’re now in the final stages of the MVP, and BRASApp will soon be launched on the Apple App Store and Google Play Store to gather user feedback ahead of its official use at our next conference.
          </p>
          <p>
            The current MVP version includes core features such as:
          </p>
          <ul className={styles.descriptionList}>
            <li>
              Login and Authentication: Secure access through integrated login, ensuring only registered users can view conference content.
            </li>
            <li>
              User Profile: Users can view and update their personal information directly within the app.
            </li>
            <li>
              Conference Access: If a user has purchased access to a conference through the BRASA Portal, they will be able to see its full schedule, with dynamic listings of initiatives (like talks, workshops, and activities).
            </li>
            <li>
              Initiative Interaction: Each initiative shows real-time details including keynote speakers, time, location, date, and availability of spots. Users can register directly through the app.
            </li>
            <li>
              My Schedule: Once registered for an initiative, it will automatically appear under My Schedule so users can keep track of what they&apos;ve signed up for.
            </li>
            <li>
              Partners Page: A dedicated space showcasing BRASA&apos;s partner companies. Users can tap on each company to learn more about their involvement and opportunities.
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
              React Native
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Expo
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

export default BrasApp; 