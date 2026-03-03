// ✅ Carga automática de imágenes desde src/assets/carta
const covers = import.meta.glob("../assets/carta/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

// Busca una imagen por slug (ej: "cafe") dentro del nombre del archivo
function coverFor(slug) {
  const s = slug.toLowerCase();
  const entry = Object.entries(covers).find(([path]) =>
    path.toLowerCase().includes(`/assets/carta/${s}`)
  );
  return entry ? entry[1] : null;
}

export const CATEGORIES = [

  // =====================
  // CAFÉ
  // =====================
  {
    slug: "cafe",
    title: "Café",
    emoji: "☕",
    cover: coverFor("cafe"),
    subtitle: "Clásicos y especialidades.",
    items: [
      { name: "Americano", desc: "Café filtrado, suave y aromático.", price: "$3.800 (9oz)" },
      { name: "Espresso Italiano", desc: "Shot intenso y equilibrado.", price: "$2.500" },
      { name: "Cortado", desc: "Espresso con un toque de leche.", price: "$2.500 (9oz) / $3.800 (12oz)" },
      { name: "Capuccino Italiano", desc: "Espresso, leche y espuma.", price: "$2.500 (9oz) / $3.800 (12oz)" },
      { name: "Latte Macchiato", desc: "Leche vaporizada con espresso.", price: "$2.500 (9oz) / $3.800 (12oz)" },
      { name: "Mokaccino Vainilla", desc: "Cacao + café con toque de vainilla.", price: "$2.500 (9oz) / $4.000 (12oz)" },
      { name: "Latte  Macchiato Vainilla", desc: "Latte con vainilla.", price: "$2.500 (9oz) / $4.000 (12oz)" },
      { name: "Chocolate solo", desc: "Chocolate caliente tradicional.", price: "$2.500 (9oz) / $3.500 (12oz)" },
      { name: "Chocolate Mashmellows", desc: "Chocolate caliente con marshmallows.", price: "$3.000 (9oz) / $4.500 (12oz)" },
      { name: "Chocolate con crema", desc: "Chocolate caliente con crema.", price: "$3.000 (9oz) / $4.500 (12oz)" },
      { name: "Chocolate con brownie", desc: "Chocolate con brownie.", price: "$3.500 (9oz) / $4.500 (12oz)" },
      { name: "Café Helado", desc: "Café frío, refrescante.", price: "$4.000" },
      { name: "Affogato", desc: "Helado + espresso (estilo affogato).", price: "$4.500" },
    ],
  },

  // =====================
  // BEBESTIBLES
  // =====================
  {
    slug: "bebestibles",
    title: "Bebestibles",
    emoji: "🥤",
    cover: coverFor("bebestibles"),
    subtitle: "Bebidas, jugos, té y más.",
    items: [
      { name: "Bebida 250 cc", desc: "Variedades según disponibilidad.", price: "$1.500" },
      { name: "Bebida 500 cc", desc: "Variedades según disponibilidad.", price: "$2.000" },
      { name: "Agua", desc: "Agua mineral con y sin gas.", price: "$1.500" },
      { name: "Té", desc: "Té caliente.", price: "$1.500" },
      { name: "Infusiones", desc: "Hierbas y mezclas.", price: "$1.500" },
      { name: "Jugos Naturales", desc: "Jugos frescos.", price: "$3.500" },
      { name: "Energéticas", desc: "Según disponibilidad.", price: "$2.000" },
      { name: "Kombuchas", desc: "Fermentado natural.", price: "$3.000" },
      { name: "Smoothie", desc: "Frutilla, Arandano, Frambuesa, Platano, Piña", price: "$5.000" },
      { name: "Milkshake", desc: "Bebida elaborada a base de leche, que puede llevar frutas", price: "$5.500" },
    ],
  },

  // =====================
  // HELADOS
  // =====================
  {
    slug: "helados",
    title: "Helados",
    emoji: "🍦",
    cover: coverFor("helados"),
    subtitle: "Barquillos y copas.",
    items: [
      { name: "Barquillo Simple", desc: "1 porción.", price: "$2.500" },
      { name: "Barquillo Doble", desc: "2 porciones.", price: "$4.000" },
      { name: "Barquillo triple", desc: "3 porciones.", price: "$6.000" },
      { name: "Copa del Maipo", desc: "Tres bolitas de helado + crema + salsa.", price: "$7.500" },
    ],
  },

  // =====================
  // TORTAS
  // =====================
  {
    slug: "Repostería",
    title: "Repostería",
    emoji: "🍰",
    cover: coverFor("Tortas"),
    subtitle: "Clásicos dulces de la casa.",
    items: [
      { name: "Torta amor", desc: "Porción.", price: "$5.000" },
      { name: "Pie de Limón", desc: "Porción.", price: "$3.500" },
      { name: "Tiramisu", desc: "Porción.", price: "$3.500" },
      { name: "Chocolate Frambuesa", desc: "Porción.", price: "$4.500" },
      { name: "Torta 3 leches", desc: "Porción.", price: "$4.500" },
      { name: "Cheescake (Frutos Rojos)", desc: "Porción.", price: "$3.500" },
      { name: "Cheescake (Maracuyá)", desc: "Porción.", price: "$3.500" },
    ],
  },

  // =====================
  // WAFFLES
  // =====================
  {
    slug: "waffles",
    title: "Waffles",
    emoji: "🧇",
    cover: coverFor("waffles"),
    subtitle: "Sabores y combinaciones.",
    items: [
      { name: "Cactus", desc: "Base + Crema + Salsa.", price: "$4.500" },
      { name: "Del Bosque", desc: "Base + 1 Fruta + 1 Topping + Crema + Salsa.", price: "$6.500" },
      { name: "El suculento", desc: "Base + 2 Fruta + 2 Topping + Crema + Salsa.", price: "$8.500" },
      { name: "Isidora", desc: "Base + 3 Fruta + 3 Topping + Crema + Salsa.", price: "$10.000" },
      { name: "Base", desc: "Manjar - Nutela - Chocolare - Mermelada", price: "Incluido" },
      { name: "Salsas", desc: "Manjar - Frutilla - Caramelo", price: "Incluido" },
      { name: "Toppings", desc: "Oreo - Brownie - Obsesión - Costa rama", price: "Incluido" },
      { name: "Frutas", desc: "Frutilla - Platano - Arandano - Frambuesa - Frutos rojos", price: "Incluido" },
    ],
  },

  // =====================
  // PANQUEQUES
  // =====================
  {
    slug: "Panqueques",
    title: "Panqueques",
    emoji: "🥞",
    cover: coverFor("panqueques"),
    subtitle: "Dulces y contundentes.",
    items: [
      { name: "2 Panqueques", desc: "Porción.", price: "$4.500" },
      { name: "2 Panqueques (opción 2)", desc: "Según disponibilidad.", price: "$5.500" },
      { name: "2 Panqueques + helado y crema", desc: "Helado y crema.", price: "$5.500" },
      { name: "2 Panqueques + helado, crema y salsa", desc: "Helado, crema y salsa.", price: "$6.500" },
      { name: "Relleno", desc: "Manjar - Mermelada", price: "Incluido" },
      { name: "Salsas", desc: "Chocolate - Manjar - Frambuesa - Caramelo", price: "Incluido" },
      { name: "Agregado extra", desc: "Manjar o Mermelada", price: "Consultar" },
    ],
  },

  // =====================
  // SANGUCHERÍA
  // =====================
  {
    slug: "Sandwich",
    title: "Sandwich",
    emoji: "🥪",
    cover: coverFor("sangucheria"),
    subtitle: "Clásicos chilenos.",
    items: [
      { name: "Jamon Queso", desc: "Sándwich clásico.", price: "$4.000" },
      { name: "Queso caliente", desc: "Queso derretido.", price: "$2.500" },
      { name: "Ave mayo", desc: "Pollo + mayo.", price: "$4.500" },
      { name: "Ave italiana", desc: "Pollo, palta, tomate.", price: "$6.500" },
      { name: "Barros Luco", desc: "Carne + queso.", price: "$6.000" },
      { name: "Churrasco italiano", desc: "Carne, palta, tomate, mayo.", price: "$6.500" },
      { name: "Chacarero", desc: "Carne, porotos verdes, ají, tomate.", price: "$7.000" },
      { name: "Tostadas", desc: "Tostadas con Mantequilla", price: "$2.500" },
    ],
  },

  // =====================
  // PAILAS
  // =====================
  {
    slug: "pailas",
    title: "Pailas",
    emoji: "🍳",
    cover: coverFor("pailas"),
    subtitle: "Arma tu combinación.",
    items: [
      { name: "Simple", desc: "2 Huevos + Pan", price: "$2.500" },
      { name: "1 Ingrediente", desc: "Elige 1 ingrediente.", price: "$3.500" },
      { name: "2 Ingredienes", desc: "Elige 2 ingredientes.", price: "$4.500" },
      { name: "Ingredientes", desc: "Tocino - Queso - Champiñon - Salame - Tomate - Jamon", price: "A elección" },
    ],
  },

  // =====================
  // EMPANADAS
  // =====================
  {
    slug: "empanadas",
    title: "Empanadas",
    emoji: "🥟",
    cover: coverFor("empanadas"),
    subtitle: "Variedades y promo.",
    items: [
      { name: "Pino", desc: "Clásica.", price: "$3.500" },
      { name: "Pino vegetariano", desc: "Opción veggie.", price: "$3.500" },
      { name: "Napolitana", desc: "Jamón, queso y tomate.", price: "$3.500" },
      { name: "Aceituna queso", desc: "Aceitunas + queso.", price: "$3.500" },
      { name: "Pastel de choclo", desc: "Sabor tradicional.", price: "$3.500" },
      { name: "Camaron queso", desc: "Marino.", price: "$3.500" },
      { name: "Pino ají", desc: "Con toque picante.", price: "$3.500" },
      { name: "Champiñon queso", desc: "Champiñón y queso.", price: "$3.500" },
      { name: "Pollo queso", desc: "Pollo y queso.", price: "$3.500" },
      { name: "Queso solo", desc: "Full queso.", price: "$3.500" },
      { name: "Mechada queso", desc: "Mechada y queso.", price: "$3.500" },
      { name: "Tocino champiñon", desc: "Tocino + champiñón.", price: "$3.500" },
      { name: "Cebolla caramelizada + crema", desc: "Cebolla caramelizada y crema.", price: "$3.500" },
      { name: "Promo 3 empanadas", desc: "3 empanadas por promo.", price: "$10.000" },
    ],
  },
];

export function getCategory(slug) {
  return CATEGORIES.find((c) => c.slug === slug);
}
