import styles from "./projetos.module.css";

import lancer from "../../assets/lancer.png"
import olaMundo from "../../assets/ola_mundo.png"
import BotaoPrincipal from "../botaoPrincipal/botaoPrincipal";
export default function Projetos() {

    return (
        <section className={styles.projetosMain}>
            <div className={styles.projetos}>
                <img
                    className={styles.projetosImg}
                    src={olaMundo} alt=""
                />
                <h2 className={styles.tituloProjeto}>Projeto Base</h2>
                <BotaoPrincipal onClick={() => window.open("https://ol-mundo-matheus-projects-3e517d44.vercel.app/", "_blank")} >
                    Ver projeto
                </BotaoPrincipal>

            </div>
            <div className={styles.projetos} >
                <img
                    className={styles.projetosImg}
                    src={lancer} alt="Foto do Projeto Lancer"
                />
                <h2 className={styles.tituloProjeto} >Lancer</h2>
                <BotaoPrincipal onClick={() => window.open("https://lancer-livid.vercel.app/", "_blank")}>
                    Ver projeto
                </BotaoPrincipal>
            </div>
            <div className={styles.projetos} >
                <img
                    className={styles.projetosImg}
                    src="" alt="" />
                <h2 className={styles.tituloProjeto} ></h2>
                <BotaoPrincipal onClick={() => console.log("Ver projeto em breve")}>
                    Ver projeto
                </BotaoPrincipal>
            </div>
            <div className={styles.projetos} >
                <img
                    className={styles.projetosImg}
                    src="" alt="" />
                <h2 className={styles.tituloProjeto} ></h2>
                <BotaoPrincipal onClick={() => console.log("Ver projeto em breve")}>
                    Ver projeto
                </BotaoPrincipal>
            </div>
            <div className={styles.projetos} >
                <img
                    className={styles.projetosImg}
                    src="" alt="" />
                <h2 className={styles.tituloProjeto} ></h2>
                <BotaoPrincipal onClick={() => console.log("Ver projeto em breve")}>
                    Ver projeto
                </BotaoPrincipal>
            </div>
        </section>
    )
}