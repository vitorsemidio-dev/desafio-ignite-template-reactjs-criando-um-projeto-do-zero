/* eslint-disable react/no-danger */
import { RichText } from 'prismic-dom';
import { ContentType } from '../../pages/post/[slug]';
import styles from './content-post.module.scss';

interface ContentPostProps {
  postContent: ContentType[];
}
export default function ContentPost({ postContent }: ContentPostProps) {
  return (
    <section className={styles.contentPost}>
      {postContent.map(content => {
        return (
          <article key={content.heading}>
            <h2>{content.heading}</h2>
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{
                __html: RichText.asHtml(content.body),
              }}
            />
          </article>
        );
      })}
    </section>
  );
}
