import styles from "./styles.module.scss";
import logoAnimeChannel from "../../../../public/homeNoAuth/LogoAnimeChannel.webp"

const HeaderNoAuth = () => {
  return (
    <>
      <div className={styles.ctaSection}>
        <img
          src= "../../../../public/homeNoAuth/LogoAnimeChannel.webp"
          alt="logoCta"
          className={styles.imgCta}
        />
        <p>Faça seu cadastro para ter acesso aos Animes</p>
        <img
          src="../../../../public/homeNoAuth/LogoAnimeChannel.webp"
          alt="logoCta"
          className={styles.imgCta}
        />
      </div>
    </>
  );
};

export default HeaderNoAuth;
