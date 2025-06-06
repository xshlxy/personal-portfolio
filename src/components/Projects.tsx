import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  github: string;
  live?: string;
  tech: string[];
  link: string;
  image: string;
}

const Projects = () => {
  const router = useRouter();
  const basePath = process.env.NODE_ENV === 'production' ? '/personal-portfolio' : '';
  const projects: Project[] = [
    {
      title: "BRASApp",
      description: "A mobile app that allows Brazilian students abroad to utilize the resources of BRASA.",
      github: "https://github.com/gobrasa",
      tech: ["React Native", "Expo", "Django", "TypeScript", "HTML/CSS", "Python", "Git"],
      link: "/projects/brasapp",
      image: `${basePath}/images/projects/brasapp.png`
    },
    {
      title: "BRASA Portal",
      description: "A web platform for managing BRASA's conferences, professional opportunities, and student engagement.",
      github: "https://github.com/gobrasa",
      tech: ["React.js", "Next.js", "Django", "TypeScript", "HTML/CSS", "Python", "Git"],
      link: "/projects/brasa-portal",
      image: `${basePath}/images/projects/brasa-portal.png`,
      live: "https://portalbrasa.gobrasa.org/"
    },
    {
      title: "Cards Against Confusion",
      description: "A task management app with a flashcard-inspired UI, using AI to generate task lists based on user input.",
      github: "https://github.com/katrinars/flashcard-app",
      tech: ["React", "Next.js", "Firebase", "Stripe", "OpenAI"],
      link: "/projects/cards-against-confusion",
      image: `${basePath}/images/projects/cards-project.png`
    },
    
  ];

  return (
    <section id="projects" className={styles.projects}>
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
          Featured Projects
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are some of my recent works
        </motion.p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => router.push(project.link)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={225}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className={styles.viewProject}>
                  View Project <FaArrowRight />
                </div>
              </div>
              <div className={styles.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <FaGithub /> GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
