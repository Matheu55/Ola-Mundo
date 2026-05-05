import "./projetos.css";

import lancer from "../../assets/lancer.png"
import olaMundo from "../../assets/ola_mundo.png"
export default function Projetos() {

    return (
        <section className="projetos-main">
            <div className="projetos">
                <img 
                    className="projetos-img" 
                    src={olaMundo} alt="" 
                />
                <h2 className="titulo-projeto">Projeto Base</h2>
                <button 
                    className="botaoPrincipal"
                    onClick={() => window.open("https://ol-mundo-matheus-projects-3e517d44.vercel.app/", "_blank")}
                >
                    Ver projeto
                </button>

            </div>
            <div className="projetos" >
                <img
                    className="projetos-img"  
                    src={lancer} alt="Foto do Projeto Lancer" 
                />
                <h2 className="titulo-projeto" >Lancer</h2>
                <button 
                    className="botaoPrincipal"
                    onClick={() => window.open("https://lancer-livid.vercel.app/", "_blank")}
                >
                    Ver projeto
                </button>
            </div>
            <div className="projetos" >
                <img 
                    className="projetos-img" 
                    src="" alt="" />
                <h2 className="titulo-projeto" ></h2>
                <button 
                    className="botaoPrincipal"
                    onClick={() => window.open("", "_blank")}>
                    Ver projeto
                </button>
            </div>
            <div className="projetos" >
                <img 
                    className="projetos-img" 
                    src="" alt="" />
                <h2 className="titulo-projeto" ></h2>
                <button
                    className="botaoPrincipal" 
                    onClick={() => window.open("", "_blank")}
                >
                    Ver projeto
                </button>
            </div>
        </section>
    )
}