import Menu from "../../componentes/menu/menu";
import Rodape from "../../componentes/rodape/rodape";
import styles from "./naoEncontrada.module.css";
import { useNavigate } from "react-router-dom";

export default function Pagina404() {

    const navegar = useNavigate();

    return (
        <>
            <Menu></Menu>
            <div className={styles.banner}>
                <h1 className={styles.titulo}>
                    404 - Página não encontrada 😢
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial
                </p>
                <div >
                    <button
                    className={styles.botaoPrincipal}
                    onClick={() => navegar("/")}
                    >
                        Voltar para a Home
                    </button>

                </div>
            </div>
            <div className={styles.espacoEmBranco}>

            </div>
            <Rodape></Rodape>
        </>
    );
}
