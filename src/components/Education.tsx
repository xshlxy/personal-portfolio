import styles from '../styles/Education.module.css';
import { motion } from 'framer-motion';

const Education = () => {
  const relevantCoursework = [
    {
      title: "Data Structures and Algorithms",
      description: "Advanced implementation and analysis of data structures and algorithms",
      skills: ["C++", "Time Complexity", "Space Complexity", "Object-Oriented Programming"]
    },
    {
      title: "Operating Systems",
      description: "Design and implementation of operating systems",
      skills: ["C", "Linux", "Scheduling", "File Systems", "System Calls", "Kernel Development"]
    },
    {
      title: "Software Engineering",
      description: "Software development lifecycle and best practices",
      skills: ["Agile", "Git", "CI/CD", "Testing", "Waterfall", "Scrum", "Kanban", "Version Control"]
    },
    {
      title: "Introduction to Artificial Intelligence",
      description: "Traditional AI and its applications",
      skills: ["Prolog", "Decision Trees", "Backtracking", "Heuristic Search", "A* Search"]
    },
    {
      title: "Computer Organization and Architecture",
      description: "Hardware and software components of a computer",
      skills: ["Assembly", "C", "MIPS", "Cache", "Memory Hierarchy", "I/O", "Virtual Memory",]
    },
    {
      title: "Computer Network and Systems Administration",
      description: "Cloud Computing and Systems Administration",
      skills: ["AWS", "Azure", "Linux", "Cloud Computing", "Security"]
    },
    {
      title: "Innovation by Design",
      description: "Understanding the process of innovation and using design thinking to solve problems",
      skills: ["Design Thinking", "Prototyping", "User Research", "UX/UI",]
    },
    {
      title: "Games and Decision",
      description: "Game Theory and its applications",
      skills: ["Bayesian Theory", "Decision Trees", "Nash Equilibrium", "Backward Induction", "Zero-Sum Games"]
    },
    {
      title: "Analysis of Economic Data",
      description: "Analysis of economic data using statistical methods",
      skills: ["Econometrics", "Microeconomics", "Macroeconomics", "Regression Analysis"]
    },
    {
      title: "Econometrics",
      description: "Analysis of economic data using statistical methods",
      skills: ["R Studio", "R", "Regression Analysis", "Cross-Sectional Analysis", "Policy Analysis"]
    },
    {
      title: "Calculus I, II, and III",
      description: "Calculus and its applications",
      skills: [ "Differential Equations", "Integral Calculus", "Vector Calculus", "Multivariable Calculus", "Divergence Theorem", "Series", "Gradient Descent", "Optimization",]
    },
    {
      title: "Physics I and II",
      description: "Motion, Energy, and Waves",
      skills: ["Electromagnetism", "Calculus", "Electronics and Circuits"]
    },
    
  ];

  const certifications = [
    {
      title: "Intermediate Machine Learning",
      issuer: "Kaggle",
      date: "2025",
      skills: ["NumPy", "Pandas", "XGBoost", "Scikit-Learn", "Pipelines", "Cross-Validation", "Imputation", "Ordinal Encoding", "One-hot Encoding"],
      link: "https://www.kaggle.com/learn/certification/ashleyoliveira/intermediate-machine-learning"
    },
    {
      title: "Intro to Machine Learning",
      issuer: "Kaggle",
      date: "2025",
      skills: ["NumPy", "Pandas", "Scikit-Learn", "Decision Trees", "Random Forests", "Underfitting", "Overfitting"],
      link: "https://www.kaggle.com/learn/certification/ashleyoliveira/intro-to-machine-learning" 
    },
    {
      title: "Pandas",
      issuer: "Kaggle",
      date: "2025",
      skills: ["Pandas", "Data Cleaning", "Data Analysis", "Data Manipulation", ],
      link: "https://www.kaggle.com/learn/certification/ashleyoliveira/pandas"
    },
    {
      title: "Intermediate Web Development",
      issuer: "CodePath",
      date: "2024",
      skills: ["Vite", "React.js", "Supabase", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Intro to Technical Interview Prep",
      issuer: "CodePath",
      date: "2024",
      skills: ["Python", "Data Structures", "Algorithms"]
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "2024",
      skills: ["GCP", "AWS", "Microsoft Azure", "Cloud Computing"],
      link: "https://www.coursera.org/account/accomplishments/verify/LH36QBLXYAJK"
    },
    {
      title: "Introduction to Web Development",
      issuer: "IBM",
      date: "2024",
      skills: ["JavaScript", "HTML", "CSS"],
      link:"https://www.coursera.org/account/accomplishments/verify/24T35CJCCB2F"
    },

  ];

  return (
    <section id="education" className={styles.education}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <div className={styles.content}>
        <motion.div
          className={styles.degree}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Florida State University</h3>
          <p className={styles.major}>B.S. Computer Science & B.S. Economics</p>
          <p className={styles.minor}>Minor in Innovation</p>
          <p className={styles.date}>Expected Graduation: Spring 2026</p>
          <p className={styles.gpa}>GPA: 3.612</p>
          <div className={styles.honors}>
            <h4>Honors & Awards</h4>
            <ul>
              <li>Pursuing Honors in the Major - Computer Science</li>
              <li>President&apos;s List (Summer 2024)</li>
              <li>Dean&apos;s List (2022 - Present)</li>
              <li>Social Sciences Scholar</li>
            </ul>
          </div>
        </motion.div>

        <motion.h3
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Relevant Coursework
        </motion.h3>
        <motion.div
          className={styles.coursework}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={styles.courseGrid}>
            {relevantCoursework.map((course) => (
              <motion.div
                key={course.title}
                className={styles.course}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <div className={styles.skills}>
                  {course.skills.map((skill) => (
                    <span key={skill} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.h3
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Certifications
        </motion.h3>
        <motion.div
          className={styles.certifications}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className={styles.certGrid}>
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                className={styles.cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h4>{cert.title}</h4>
                <p className={styles.issuer}>{cert.issuer}</p>
                <p className={styles.date}>{cert.date}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                    View Certificate
                  </a>
                )}
                <div className={styles.skills}>
                  {cert.skills.map((skill) => (
                    <span key={skill} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 