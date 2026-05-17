import { Children } from "react";
import styles from "./botaoPrincipal.module.css";


export default function BotaoPrincipal({ children, tamanho, onClick }) {
    return (
        <button
            className={`
                ${styles.botaoPrincipal}
                ${styles[tamanho]}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}



