import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/menu";

export default function Carta() {
  return (
    <main className="bg">
      <section className="page">
        <header className="pageHeader">
          <div>
            <h1 className="pageTitle">Carta</h1>
            <p className="pageSubtitle">Elige una categoría para ver productos</p>
          </div>

          <Link to="/" className="btnGhost">
            Volver
          </Link>
        </header>

        <div className="catsGrid">
          {CATEGORIES.map((c) => (
            <Link to={`/carta/${c.slug}`} className="catCard" key={c.slug}>
              <div className="catCover">
                <img src={c.cover} alt={c.title} />
              </div>
              <div className="catBody">
                <h3 className="catTitle">{c.emoji} {c.title}</h3>
                <p className="catSub">{c.subtitle}</p>
                <span className="catGo">Ver {c.title} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
