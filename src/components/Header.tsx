import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const projects = [
    {
      title: "BRASApp",
      link: "/projects/brasapp"
    },
    {
      title: "BRASA Portal",
      link: "/projects/brasa-portal"
    },
    {
      title: "Cards Against Confusion",
      link: "/projects/cards-against-confusion"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    scrollToSection('projects');
    setTimeout(() => {
      setIsProjectsOpen((prev) => !prev);
    }, 100); // allows scroll to happen first
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>xshlxy</div>
      <nav className={styles.nav}>
        <button onClick={() => scrollToSection('about')} className={styles.link}>About</button>
        <button onClick={() => scrollToSection('experience')} className={styles.link}>Experience</button>
        <div className={styles.dropdown}>
          <button 
            className={styles.link}
            onClick={handleProjectsClick}
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            Projects
          </button>
          <AnimatePresence>
            {isProjectsOpen && (
              <motion.div 
                className={styles.dropdownContent}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setIsProjectsOpen(true)}
                onMouseLeave={() => setIsProjectsOpen(false)}
              >
                {projects.map((project, index) => (
                  <Link 
                    key={index} 
                    href={project.link}
                    className={styles.dropdownItem}
                  >
                    {project.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button onClick={() => scrollToSection('skills')} className={styles.link}>Skills</button>
        <button onClick={() => scrollToSection('education')} className={styles.link}>Education</button>
        <button onClick={() => scrollToSection('connect')} className={styles.link}>Connect</button>
      </nav>
    </header>
  );
};

export default Header;