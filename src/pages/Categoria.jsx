import { Link, useParams } from "react-router-dom";
import { getCategory } from "../data/menu";

export default function Categoria() {
  const { slug } = useParams();
  const cat = getCategory(slug);

  if (!cat) {
    return (
      <main className="bg">
        <section className="page">
          <h1 className="pageTitle">Categoría no encontrada</h1>
          <Link to="/carta" className="btnGhost">Volver a la Carta</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg">
      <section className="page">
        <header className="pageHeader">
          <div>
            <h1 className="pageTitle">{cat.emoji} {cat.title}</h1>
            <p className="pageSubtitle">{cat.subtitle}</p>
          </div>

          <Link to="/carta" className="btnGhost">Regresar</Link>
        </header>

        <div className="categoryHero">
          <img src={cat.cover} alt={`Carta ${cat.title}`} />
        </div>

        <div className="itemsGrid">
          {cat.items.map((it, idx) => (
            <article className="itemCard" key={idx}>
              <div className="itemTop">
                <h3 className="itemName">{it.name}</h3>
                <span className="itemPrice">{it.price}</span>
              </div>
              <p className="itemDesc">{it.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
