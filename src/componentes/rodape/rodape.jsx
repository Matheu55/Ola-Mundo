import "./rodape.css";
import  MarcaRegistrada from "../../assets/marca_registrada.svg" 

export default function Rodape() {
    return(
        <footer className="rodape">
            <img src={MarcaRegistrada} alt="R de Marca registrada" />

            Desenvolvido por Matheus
        </footer>
    )
}