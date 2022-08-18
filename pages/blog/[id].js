import { client } from "../../libs/client";
import styles from "../../styles/blog.module.css";

//SSG

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  console.log(data);

  return {
    props: {
      blog: data,
    },
  };
};

//SSG must set path which page should SSG
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false, //return 400 if page doesn't exist
  };
};

export default function BlogId({ blog }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
        className={styles.post}
      ></div>
    </main>
  );
}
