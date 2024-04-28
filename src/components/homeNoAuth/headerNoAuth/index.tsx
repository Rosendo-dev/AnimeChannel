import Link from "next/link";
import styles from "./styles.module.scss";
import { Container } from "postcss";

const HeaderNoAuth = () => {
  return (
    <>
      <div className={styles.ctaSection}>
        <img src="/favicon.svg" alt="logoCta" className={styles.imgCta} />
    
        <p>cadastre-se para ter acesso ilimitado aos Animes!</p>

        <img src="/favicon.svg" alt="logoCta" className={styles.imgCta} />
      </div>
      
      <div className={styles.nav}>
        <img src="/nomecomlogodolado.png" alt="logoAnimeChannel" className={styles.imgLogoNav} />
        <div>
          
          <Link href="/login">
          <button className={styles.navBtn}>
            Assistir
          </button>
          </Link>
          <Link href="/registro">
          <button className={styles.navBtn}>
            Cadastro
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderNoAuth;
