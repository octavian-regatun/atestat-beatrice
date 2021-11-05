import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/IndexPage.module.css";
import Logo1 from "../images/1.png";
import Logo2 from "../images/2.png";
import Logo3 from "../images/3.png";

const logoSize: number = 64;

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.title}>
        <h1>
          UNDERSTAND
          <br />
          YOUR PLANTS
        </h1>
      </div>
      <div className={styles.button}>
        <button>WATCH THE VIDEO</button>
      </div>
      <div className={styles.logos}>
        <div className={styles.logo}>
          <Image src={Logo1} alt="logo" width={logoSize} height={logoSize} />
        </div>
        <div className={styles.logo}>
          <Image src={Logo2} alt="logo" width={logoSize} height={logoSize} />
        </div>
        <div className={styles.logo}>
          <Image src={Logo3} alt="logo" width={logoSize} height={logoSize} />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
