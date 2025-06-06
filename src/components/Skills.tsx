import { motion } from 'framer-motion';
import styles from '../styles/Skills.module.css';
import { 
  SiReact, 
  SiReactrouter, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiDocker, 
  SiDjango, 
  SiSupabase, 
  SiFirebase, 
  SiPostgresql, 
  SiNetlify, 
  SiVercel, 
  SiNextdotjs, 
  SiVite, 
  SiNodedotjs, 
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiFramer, 
  SiTensorflow, 
  SiPython, 
  SiCplusplus, 
  SiC, 
  SiLinux, 
  SiGooglecloud, 
  SiNumpy, 
  SiKeras, 
  SiPandas, 
  SiPostman,
  SiBoost,
  SiCanva,
  SiR
} from 'react-icons/si';
import { FaAws, FaMicrosoft } from 'react-icons/fa';

const Skills = () => {
  const categories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "React.js", icon: <SiReact /> },
        { name: "React Native", icon: <SiReactrouter /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Framer", icon: <SiFramer /> }
      ]
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Django REST", icon: <SiDjango /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "SQL", icon: <SiPostgresql /> },
        { name: "Postman API", icon: <SiPostman /> }
      ]
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Azure", icon: <FaMicrosoft /> },
        { name: "GCP", icon: <SiGooglecloud /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Linux/Unix", icon: <SiLinux /> }
      ]
    },
    {
      name: "AI/ML & Data Science",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "R", icon: <SiR /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Keras", icon: <SiKeras /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "XGBoost", icon: <SiBoost /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "C", icon: <SiC /> }
      ]
    },
    {
      name: "Design",
      skills: [
        { name: "Figma", icon: <SiFigma /> },
        { name: "Canva", icon: <SiCanva /> },
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Technologies I&apos;ve worked with:
      </motion.p>

      <div className={styles.container}>
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            className={styles.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{category.name}</h3>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className={styles.skill}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 