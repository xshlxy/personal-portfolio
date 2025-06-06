import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ashley-oliveira',
      icon: <FaLinkedin />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/xshlxy',
      icon: <FaGithub />
    }
  ];

  return (
    <section id="connect" className={styles.connect}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={styles.photoContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.photoWrapper}>
            <Image
              src="/images/headshot.jpg"
              alt="Ashley Oliveira"
              width={200}
              height={200}
              className={styles.photo}
              priority
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Feel free to reach out for collaborations or just a friendly hello
        </motion.p>

        <motion.div
          className={styles.links}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              aria-label={link.name}
            >
              <div className={styles.icon}>{link.icon}</div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
