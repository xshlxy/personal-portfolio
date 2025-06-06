import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  tools: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard = ({ title, tools, description, link, image }: ProjectCardProps) => {
  return (
    <Link href={link} className={styles.card}>
      <Image src={image} alt={title} width={300} height={200} className={styles.image} />
      <h3>{title}</h3>
      <p className={styles.tools}>{tools}</p>
      <p>{description}</p>
    </Link>
  );
};

export default ProjectCard;
