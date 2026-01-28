import { Link } from "react-router-dom";
import logo from "../assets/imagenes/logo.png";

export default function Bienvenida() {
  return (
    <main className="bg">
      <section className="hero">
        <div className="card">
          <img className="logo" src={logo} alt="Logo Jardín Del Maipo" />

          <h1 className="title">Bienvenidos a</h1>
          <h2 className="subtitle">Jardín Del Maipo</h2>

          <p className="desc">
            Sabores frescos, ambiente cálido y una experiencia pensada para disfrutar.
          </p>

          <Link to="/carta" className="btnPrimary">
            Carta
          </Link>

          <p className="footnote">🌿 Abierto para compartir momentos</p>
        </div>
      </section>
    </main>
  );
}
