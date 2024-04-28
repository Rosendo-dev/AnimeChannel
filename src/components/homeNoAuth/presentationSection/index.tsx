
import Link from "next/link";
import styles from "./style.module.scss"

const PresentationSection = ()=>{
    return <>
   
    <div className={styles.div}>
        <img src="/homeNoAuth/imgpresentation.png" alt="imgIndex" className={styles.imgPresentation} />   
        <p>ㅤ</p>
        <p>ㅤ</p>
        <p className={styles.subTitle}>• ACESSO ILIMITADO</p>
        <p className={styles.title}>Tenha acesso aos melhores<br /> animes dublados e legendados!</p>
        <p className={styles.description}>Assista seus animes preferidos como quiser pelo Animestreaming.<br /> Faça o download de episódios e assista onde quiser pelo seu dispositivo móvel. Tudo em um unico pacote!<br /> Clique em saiba mais para ter acesso as nossas ofertas e promoções imperdiveis para você!</p>
        <Link href="/registro">
        <button className={styles.btnCta}>SAIBA MAIS! <img src="/play.png" alt="buttonimg" className={styles.btnImg}/></button>    
        </Link>
        
    </div>
    
    </>
};

export default PresentationSection