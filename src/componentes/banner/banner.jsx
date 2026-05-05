import circuloColorido from "../../assets/circulo_colorido2.png";
import minhaFoto from "../../assets/matheus.jpg";
import "./banner.css";



export default function Banner() {
    return (
        <div className='banner'>
            <div className='apresentacao'>
                <h1 className='titulo'>
                    Olá, Mundo!
                </h1>
                <p className='paragrafo'>
                    Boas-vindas ao meu espaço pessoal! Eu sou Matheus Alves, estudante de Análise e Desenvolvimento de Sistemas e entusiasta das tecnologias de front-end. Aqui compartilho alguns posts interessantes. :)
                </p>
            </div>
            <div className='imagens'>
                <img    
                    className='circuloColorido'
                    src={circuloColorido}
                    alt="CirculoColorido Azul"
                    aria-hidden={true} 
                />
                <img 
                    className='minhaFoto'
                    src={minhaFoto} 
                    alt="Foto do Matheus Alves!" 
                />
            </div>
        </div>
    )
}