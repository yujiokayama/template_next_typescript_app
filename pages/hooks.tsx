import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import GetTestRecoil from '../components/GetTestRecoil';

const Hooks = () => {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Hooks</title>
          <meta name="description" content="About" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>about</p>
        <GetTestRecoil />
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hooks;
