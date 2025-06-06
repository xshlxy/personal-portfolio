import styles from '../styles/Experience.module.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className={styles.timeline}>
        

        <motion.div 
          className={styles.timelineItem}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader}>
              <h3>Software Development Analyst</h3>
              <span className={styles.company}>BRASA</span>
              <span className={styles.date}>April 2025 - Present</span>
            </div>
            <ul className={styles.description}>
              <li>Spearheaded frontend development of BRASApp, a mobile platform that 
              connects Brazilian students abroad with academic, professional, and cultural 
              opportunities.</li>
              <li>Refactored and maintained <a href="https://portalbrasa.gobrasa.org" target="_blank" rel="noopener noreferrer" className={styles.experienceLink}>BRASA Portal</a> codebase, ensuring cleaner architecture, reusable components, and scalable frontend logic.</li>
              <li>Translated stakeholder interviews and feedback into actionable features, prioritizing user experience, performance, and visual consistency.</li>
              <li>Collaborated with cross-functional teams to implement new features</li>
              <li>Developed and maintained internal tools using React and TypeScript</li>
            </ul>
            <div className={styles.techStack}>
              <span>React Native</span>
              <span>React.js</span>
              <span>TypeScript</span>
              <span>Next.js</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>Git</span>
              <span>Django</span>
              <span>Expo</span>
              <span>Python</span>
              <span>HTML/CSS</span>
              <span>Node.js</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.timelineItem}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader}>
              <h3>Honors Thesis Researcher</h3>
              <span className={styles.company}>Florida State University</span>
              <span className={styles.date}>May 2025 - Present</span>
            </div>
            <ul className={styles.description}>
              <li>Conducting research on integrating machine learning with game theory for portfolio optimization</li>
              <li>Developing novel algorithms to enhance strategic decision-making in financial markets</li>
              <li>Analyzing the intersection of AI and economic theory to improve investment strategies</li>
              <li>Writing and defending an honors thesis in Computer Science</li>
            </ul>
            <div className={styles.techStack}>
              <span>Machine Learning</span>
              <span>Game Theory</span>
              <span>Python</span>
              <span>Research</span>
              <span>LaTeX</span>
              <span>Data Analysis</span>
              <span>Data Visualization</span>
              <span>Data Cleaning</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.timelineItem}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader}>
              <h3>Software Engineering Intern</h3>
              <span className={styles.company}>Donna&apos;s Caribbean Restaurant</span>
              <span className={styles.date}>Spring 2025</span>
            </div>
            <ul className={styles.description}>
              <li>Developed a responsive back-office system using React to manage daily restaurant operations. </li>
              <li>Implemented a user-friendly interface for managing inventory and supply vendor orders.</li>
              <li>Created a dashboard for tracking restaurant spendings and inventory usage.</li>
              <li>Collaborated with the owner to implement the required features and improve upon requests.</li>
            </ul>
            <div className={styles.techStack}>
              <span>React.js</span>
              <span>JavaScript</span>
              <span>Vite</span>
              <span>Netlify</span>
              <span>Sendgrid</span>
              <span>Git</span>
              <span>Supabase</span>
              <span>HTML/CSS</span>
              <span>Node.js</span>
            </div>
          </div>
        </motion.div>


        <motion.div 
          className={styles.timelineItem}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader}>
              <h3>Software Engineering Fellow</h3>
              <span className={styles.company}>Headstarter AI</span>
              <span className={styles.date}>Summer 2024</span>
            </div>
            <ul className={styles.description}>
              <li>Engaged in a 5-week intensive program to build 5 AI projects</li>
              <li>Collaborating with peers on innovative AI solutions</li>
              <li>Developing skills in networking and project management</li>
              <li>Working towards a final project to contribute to an open-source community</li>
            </ul>
            <div className={styles.techStack}>
              <span>AI/ML</span>
              <span>Python</span>
              <span>Git</span>
              <span>AWS</span>
              <span>React.js</span>
              <span>Next.js</span>
              <span>Open AI</span>
              <span>RAG</span>
              <span>Stripe</span>
              <span>Pinecone</span>
              <span>Vercel</span>
              <span>JavaScript</span>
              <span>HTML/CSS</span>
              <span>Node.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 