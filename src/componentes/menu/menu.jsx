import "./menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header className="menu-header"> 
      <nav className="menu-nav">
        <Link to="/" className="menu-link">Início</Link>
        <Link to="/SobreMim" className="menu-link">Sobre Mim</Link>
      </nav>
    </header>
  );
}

