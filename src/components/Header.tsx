import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '../utils/useIsMobile';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();



  const projects = [
    { title: "BRASApp", link: "/projects/brasapp" },
    { title: "BRASA Portal", link: "/projects/brasa-portal" },
    { title: "Cards Against Confusion", link: "/projects/cards-against-confusion" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // close on selection
  };

  const handleProjectsClick = () => {
    scrollToSection('projects');
    setTimeout(() => {
      setIsProjectsOpen((prev) => !prev);
    }, 100);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>xshlxy</div>

      <div className={styles.hamburger} onClick={() => setIsMobileMenuOpen(true)}>
        {!isMobileMenuOpen && <Menu size={28} />}
      </div>

      {/* Desktop Nav */}
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

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className={styles.backdrop} 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* Slide-in Mobile Menu */}
      <AnimatePresence>
          {isMobile && isMobileMenuOpen && (
            <motion.div
              className={`${styles.mobileMenu} ${styles.open}`}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className={styles.mobileMenuInner}>
                <div className={styles.closeIcon} onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={28} />
                </div>
                <button onClick={() => scrollToSection('about')} className={styles.mobileLink}>About</button>
                <button onClick={() => scrollToSection('experience')} className={styles.mobileLink}>Experience</button>
                <button onClick={handleProjectsClick} className={styles.mobileLink}>Projects</button>
                <button onClick={() => scrollToSection('skills')} className={styles.mobileLink}>Skills</button>
                <button onClick={() => scrollToSection('education')} className={styles.mobileLink}>Education</button>
                <button onClick={() => scrollToSection('connect')} className={styles.mobileLink}>Connect</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </header>
  );
};

export default Header;