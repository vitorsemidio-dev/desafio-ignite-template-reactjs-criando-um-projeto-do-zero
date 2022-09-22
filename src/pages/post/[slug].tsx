import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import Banner from '../../components/Banner';
import ContentPost from '../../components/ContentPost';
import Header from '../../components/Header';
import HeaderPost from '../../components/HeaderPost';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import { formatDate } from '../../utils/format-date';

export type ContentType = {
  heading: string;
  body: {
    text: string;
  }[];
};

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: ContentType[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Carregando...</h1>;
  }

  const totalWords = post.data.content.reduce((total, contentItem) => {
    const heading = contentItem.heading || '';
    const headingTime = heading.split(/\s+/).length;
    const wordsTime = RichText.asText(contentItem.body).split(/\s+/).length;

    return total + headingTime + wordsTime;
  }, 0);
  const readTime = Math.ceil(totalWords / 200);

  const firstPublicationDateFormatted = formatDate(post.first_publication_date);

  return (
    <>
      <Head>
        <title>{post.data.title} | spacetraveling</title>
      </Head>

      <Header />
      <Banner bannerImgUrl={post.data.banner.url} alt="Banner" />
      <main className={commonStyles.container}>
        <div>
          <HeaderPost
            title={post.data.title}
            firstPublicationDate={firstPublicationDateFormatted}
            author={post.data.author}
            readTime={readTime}
          />
          <ContentPost postContent={post.data.content} />
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient({});
  const posts = await prismic.getByType('posts');

  const paths = posts.results.map(post => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient({});
  const response = await prismic.getByUID('posts', String(slug));

  return {
    props: {
      post: response,
    },
    revalidate: 1800,
  };
};
