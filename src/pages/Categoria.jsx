import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
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
        <motion.header
          className="pageHeader"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <h1 className="pageTitle">{cat.emoji} {cat.title}</h1>
            <p className="pageSubtitle">{cat.subtitle}</p>
          </div>

          <Link to="/carta" className="btnGhost">Regresar</Link>
        </motion.header>

        <motion.div
          className="categoryHero"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          <img src={cat.cover} alt={`Carta ${cat.title}`} />
        </motion.div>

        <div className="itemsGrid cleanMenuGrid">
          {cat.items.map((it, idx) => (
            <motion.article
              className="itemCard cleanItemCard"
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
            >
              <div className="itemTop">
                <h3 className="itemName">{it.name}</h3>
                <span className="itemPrice">{it.price}</span>
              </div>
              <p className="itemDesc">{it.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}