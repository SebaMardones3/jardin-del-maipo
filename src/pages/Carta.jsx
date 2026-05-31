import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CATEGORIES } from "../data/menu";

export default function Carta() {
  return (
    <main className="menuPremium">
      <motion.div
        className="menuGlow"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <section className="menuHero">
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="menuHeroContent"
        >
          <span className="menuTag">jardin Del Maipo</span>

          <h1 className="menuTitle">
            Nuestra <span>Carta</span>
          </h1>

          <p className="menuText">
            Sabores caseros, dulces, almuerzos y preparaciones especiales para disfrutar.
          </p>

          <Link to="/" className="menuBack">
            ← Volver al inicio
          </Link>
        </motion.div>
      </section>

      <section className="menuCategories">
        {CATEGORIES.map((c, index) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 80, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              type: "spring",
              stiffness: 90,
            }}
          >
            <Link to={`/carta/${c.slug}`} className="premiumCard">
              <motion.div
                className="premiumImageBox"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
              >
                <img src={c.cover} alt={c.title} />

                <motion.div
                  className="premiumEmoji"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {c.emoji}
                </motion.div>
              </motion.div>

              <div className="premiumInfo">
                <motion.h2
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                >
                  {c.title}
                </motion.h2>

                <p>{c.subtitle}</p>

                <motion.span
                  className="premiumButton"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver menú →
                </motion.span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}