import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss"
import Link from "next/link";
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";

const HomeNoAuth = ()=>{
  return (
    <>
      <Head>
        <title>Anime Channel</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Anime Channel" key="title"/>
        <meta name="description" content="Assista seus animes preferidos aqui!"/>
      </Head>
      <main>
        <HeaderNoAuth/>
      </main>
    </>
  )
}

export default HomeNoAuth