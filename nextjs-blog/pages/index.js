import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Links to different Testing Pages!</h1>
      <div className={styles.grid}>
        <ul>
          <li><a href="/home">Home Page</a></li>

        </ul>
      </div>
    </div>
  )
}