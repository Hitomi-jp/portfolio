import Head from "next/head";
import styles from "./Layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Hitomi Schiefloe";
export const siteTitle = "Next.js Blog";
function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <img className={styles.selfImage} src='/images/hitomi.jpg' />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        <br />
        <h1 className={utilStyles.headingMd}>
          Junior Utvikler (Fullstuck, Frontend, Backend)
        </h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
