import styles from "./menu.module.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header className={styles.menuHeader}> 
      <nav className={styles.menuNav}>
        <Link to="/" className={styles.menuLink}>Início</Link>
        <Link to="/SobreMim" className={styles.menuLink}>Sobre Mim</Link>
      </nav>
    </header>
  );
}

