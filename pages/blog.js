import { client } from "../libs/client";
import styles from "../styles/blog.module.css";
import Link from "next/link";

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

const blog = ({ blog }) => {
  return (
    <div className={styles.container}>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <a href=''>{blog.title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default blog;
