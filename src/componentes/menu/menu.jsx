import styles from "./menu.module.css";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <header> 
      <nav className={styles.menuNav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink
          }
        >
          Início
        </NavLink>
        <NavLink
          to="/sobreMim"
          className={({ isActive }) =>
            isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink
          }
        >
          Sobre Mim
        </NavLink>
      </nav>
    </header>
  );
}

