import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import styles from './header-post.module.scss';

interface HeaderPostProps {
  title: string;
  firstPublicationDate: string;
  author: string;
  readTime: number;
}

export default function HeaderPost({
  title,
  firstPublicationDate,
  author,
  readTime,
}: HeaderPostProps) {
  return (
    <header className={styles.headerPost}>
      <h1>{title}</h1>
      <ul>
        <li>
          <FiCalendar />
          {firstPublicationDate}
        </li>
        <li>
          <FiUser />
          {author}
        </li>
        <li>
          <FiClock />
          {`${readTime} min`}
        </li>
      </ul>
    </header>
  );
}
