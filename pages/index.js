import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Secret Messenger</title>
        <meta name="description" content="A secret messenger app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Secret Messenger</h1>
      </main>
    </div>
  );
}
