import "./menu.css";

export default function Menu() {
  return (
    <header className="menu-header"> 
      <nav className="menu-nav">
        <a href="/" className="menu-link">Início</a>
        <a href="/sobre" className="menu-link">Sobre Mim</a>
      </nav>
    </header>
  );
}
