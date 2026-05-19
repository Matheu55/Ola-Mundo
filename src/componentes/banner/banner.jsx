import circuloColorido from "../../assets/circulo_colorido2.png";
import minhaFoto from "../../assets/matheus.jpg";
import styles from "./banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas-vindas ao meu espaço pessoal! Eu sou Matheus Alves, estudante de Análise e Desenvolvimento de Sistemas e entusiasta das tecnologias de front-end. Aqui compartilho alguns dos meus projetos :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img    
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt="CirculoColorido Azul"
                    aria-hidden={true} 
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto} 
                    alt="Foto do Matheus Alves!" 
                />
            </div>
        </div>
    )
}