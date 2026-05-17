import styles from "./sobreMim.module.css";
import Banner from "../../componentes/banner/banner";
import Menu from "../../componentes/menu/menu";
import PostModelo from "../../componentes/postModelo/postModelo";
import sobreMimFoto from "../../assets/sobre_mim_foto.jpg";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import Rodape from "../../componentes/rodape/rodape";



export default function SobreMim() {
    return (
        <>
            <Menu></Menu>
            <Banner></Banner>
            <PostModelo
                fotoCapa={fotoCapa}
                titulo="Sobre mim"

            >
                <h3 className={styles.subtitulo}>
                    Olá, eu sou o Matheus!
                </h3>
                <img
                    className={styles.fotoSobreMim}
                    src={sobreMimFoto}
                    alt="Foto do Minha"
                />
                <p className={styles.paragrafSobreMim}>
                    Olá! Seja muito bem-vindo ao meu espaço pessoal 😄 Meu nome é Matheus Alves, sou estudante de Análise e Desenvolvimento de Sistemas e apaixonado pelo universo do Front-end. Aqui compartilho meus aprendizados, desafios e tudo o que venho descobrindo nessa jornada pela tecnologia.
                </p>
                <h3 className={styles.subtitulo}>
                    Minha História
                </h3>
                <p className={styles.paragrafSobreMim}>
                    Tudo começou com um curso de Informática Básica no Instituto Futuro Brasileiro (IFB). Lá, tive meu primeiro contato com a criação de sites, aprendendo HTML, CSS e também explorando o uso do WordPress como ferramenta de desenvolvimento e gerenciamento de conteúdo. Foi ali que meu interesse pela tecnologia realmente despertou.
                </p>
                <p className={styles.paragrafSobreMim}>
                    Durante o ensino médio, participei do programa Novotec, onde cursei Auxiliar de Informática para Internet e Auxiliar em Design de Websites, com uma carga horária de 640 horas. Nessa formação, me aprofundei em temas como Interfaces Web, Usabilidade, Segurança da Informação, Banco de Dados e Desenvolvimento para Dispositivos Móveis. Também foi nessa fase que consolidei meus conhecimentos em HTML e CSS, fortalecendo ainda mais minha paixão pelo front-end.
                </p>
                <p className={styles.paragrafSobreMim}>
                    Hoje, curso Análise e Desenvolvimento de Sistemas na Estácio, e estudo simultaneamente na Alura, onde me aprofundo cada vez mais no universo da web e sigo desenvolvendo minhas habilidades com foco em tecnologia, design e experiência do usuário.
                </p>
                <p className={styles.paragrafSobreMim}>
                    A cada linha de código, descubro novas possibilidades. Aprender se tornou parte da minha rotina, e compartilhar esse conhecimento é a forma que encontrei de construir pontes com quem também está começando na área. A tecnologia me move — e sigo em frente, sempre com os olhos voltados para o próximo desafio.
                </p>
            </PostModelo>
            <Rodape></Rodape>
        </>

    )
}