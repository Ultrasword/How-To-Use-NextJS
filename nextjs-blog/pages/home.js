import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
    <div className='maindiv'>
        <Head>
            <title>Home Page</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <div id="navbar" className={styles.navbar}>
                <h1>Home Page</h1>
                <table>
                    Figure out how to add tables into (for separaing stuff)
                </table>
            </div>
            <div id="content" className='width: 100%'>
                <div id="background">
                    <img className={styles.backimg} src='background.jpg'></img>
                </div>
                <div>
                    <h1>Content</h1>
                    <p>Welcome to the home page! This is a page full of awesome stuff!</p>

                </div>
            </div>
            <div id="endbar" className={styles.endbar}>

            </div>
        </main>
    </div>
    )
}

