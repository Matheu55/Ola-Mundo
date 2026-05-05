import styles from "./projetos.module.css";

import lancer from "../../assets/lancer.png"
import olaMundo from "../../assets/ola_mundo.png"
export default function Projetos() {

    return (
        <section className={styles.projetosMain}>
            <div className={styles.projetos}>
                <img 
                    className={styles.projetosImg} 
                    src={olaMundo} alt="" 
                />
                <h2 className={styles.tituloProjeto}>Projeto Base</h2>
                <button 
                    className={styles.botaoPrincipal}
                    onClick={() => window.open("https://ol-mundo-matheus-projects-3e517d44.vercel.app/", "_blank")}
                >
                    Ver projeto
                </button>

            </div>
            <div className={styles.projetos} >
                <img
                    className={styles.projetosImg}  
                    src={lancer} alt="Foto do Projeto Lancer" 
                />
                <h2 className={styles.tituloProjeto} >Lancer</h2>
                <button 
                    className={styles.botaoPrincipal}
                    onClick={() => window.open("https://lancer-livid.vercel.app/", "_blank")}
                >
                    Ver projeto
                </button>
            </div>
            <div className={styles.projetos} >
                <img 
                    className={styles.projetos} 
                    src="" alt="" />
                <h2 className={styles.tituloProjeto} ></h2>
                <button 
                    className={styles.botaoPrincipal}
                    onClick={() => window.open("", "_blank")}>
                    Ver projeto
                </button>
            </div>
            <div className={styles.projetos} >
                <img 
                    className={styles.projetos} 
                    src="" alt="" />
                <h2 className={styles.tituloProjeto} ></h2>
                <button
                    className={styles.botaoPrincipal} 
                    onClick={() => window.open("", "_blank")}
                >
                    Ver projeto
                </button>
            </div>
        </section>
    )
}