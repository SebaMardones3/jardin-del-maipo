const covers = import.meta.glob("../assets/carta/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

function coverFor(slug) {
  const s = slug.toLowerCase();
  const entry = Object.entries(covers).find(([path]) =>
    path.toLowerCase().includes(`/assets/carta/${s}`)
  );
  return entry ? entry[1] : null;
}

export const CATEGORIES = [
  {
    slug: "cafe",
    title: "Café",
    emoji: "☕",
    cover: coverFor("cafe"),
    subtitle: "Clásicos y especialidades.",
    items: [
      { name: "Americano", desc: "Café filtrado, suave y aromático.", price: "$3.500 (9oz)" },
      { name: "Espresso Italiano", desc: "Shot intenso y equilibrado.", price: "$2.500" },
      { name: "Cortado", desc: "Espresso con un toque de leche.", price: "$2.800 (9oz) / $3.800 (12oz)" },
      { name: "Capuccino Italiano", desc: "Espresso, leche y espuma.", price: "$2.800 (9oz) / $3.800 (12oz)" },
      { name: "Latte Macchiato", desc: "Leche vaporizada con espresso.", price: "$2.800 (9oz) / $3.800 (12oz)" },
      { name: "Mokaccino Vainilla", desc: "Cacao + café con toque de vainilla.", price: "$2.800 (9oz) / $4.000 (12oz)" },
      { name: "Latte Macchiato Vainilla", desc: "Latte con vainilla.", price: "$2.800 (9oz) / $4.000 (12oz)" },
      { name: "Chocolate solo", desc: "Chocolate caliente tradicional.", price: "$3.000 (9oz) / $4.000 (12oz)" },
      { name: "Chocolate Marshmallows", desc: "Chocolate caliente con marshmallows.", price: "$3.500 (9oz) / $4.500 (12oz)" },
      { name: "Chocolate con crema", desc: "Chocolate caliente con crema.", price: "$3.500 (9oz) / $4.500 (12oz)" },
      { name: "Chocolate con brownie", desc: "Chocolate con brownie.", price: "$3.500 (9oz) / $4.500 (12oz)" },
      { name: "Café Helado", desc: "Café frío, refrescante.", price: "$4.500" },
      { name: "Affogato", desc: "Helado + espresso.", price: "$4.500" },
    ],
  },

  {
    slug: "bebestibles",
    title: "Bebestibles",
    emoji: "🥤",
    cover: coverFor("bebestibles"),
    subtitle: "Bebidas, jugos, té y más.",
    items: [
      { name: "Bebida Lata", desc: "Variedades según disponibilidad.", price: "$2.000" },
      { name: "Agua", desc: "Agua mineral con y sin gas.", price: "$2.000" },
      { name: "Té", desc: "Té caliente.", price: "$2.000" },
      { name: "Infusiones", desc: "Hierbas y mezclas.", price: "$2.000" },
      { name: "Jugos Naturales", desc: "Jugos frescos.", price: "$3.500" },
      { name: "Energéticas", desc: "Según disponibilidad.", price: "$2.000" },
      { name: "Kombuchas", desc: "Fermentado natural.", price: "$5.000" },
      { name: "Smoothie", desc: "Frutilla, arándano, frambuesa, plátano o piña.", price: "$5.000" },
      { name: "Milkshake", desc: "Batido a base de leche con frutas.", price: "$5.500" },
    ],
  },

  {
    slug: "helados",
    title: "Helados",
    emoji: "🍦",
    cover: coverFor("helados"),
    subtitle: "Barquillos y copas.",
    items: [
      { name: "Barquillo Simple", desc: "1 porción.", price: "$2.500" },
      { name: "Barquillo Doble", desc: "2 porciones.", price: "$4.000" },
      { name: "Barquillo Triple", desc: "3 porciones.", price: "$6.000" },
      { name: "Copa del Maipo", desc: "Tres bolitas de helado + crema + salsa.", price: "$7.500" },
    ],
  },

  {
    slug: "almuerzos",
    title: "Almuerzos",
    emoji: "🍽️",
    cover: coverFor("almuerzos"),
    subtitle: "Preparaciones caseras sujetas a disponibilidad.",
    items: [
      { name: "Menú Económico", desc: "2 agregados + ensaladas. Consultar disponibilidad.", price: "$6.500" },

      { name: "Pollo al Horno", desc: "Incluye 1 agregado.", price: "$7.500" },
      { name: "Chuleta Vetada", desc: "Incluye 1 agregado.", price: "$7.500" },

      { name: "Carne Mechada", desc: "Incluye 2 agregados.", price: "$8.500" },
      { name: "Pescado Frito", desc: "Incluye 2 agregados.", price: "$8.500" },

      { name: "Reineta a la Mantequilla", desc: "Incluye 2 agregados y ensaladas.", price: "$10.000" },
      { name: "Pastel de Choclo", desc: "Incluye 2 agregados y ensaladas.", price: "$10.000" },

      { name: "Costillar al Horno", desc: "Incluye 2 agregados y ensaladas.", price: "$12.000" },
      { name: "Salmón Finas Hierbas", desc: "Incluye 2 agregados y ensaladas.", price: "$12.000" },
      { name: "Lomo Liso", desc: "Incluye 2 agregados y ensaladas.", price: "$12.000" },

      { name: "Acompañamientos", desc: "Arroz • Papas mayo.", price: "Incluidos" },
      { name: "Ensaladas", desc: "Surtidas • Chilena.", price: "Incluidas" },

      { name: "Papas Fritas", desc: "Extra adicional.", price: "$2.000" },
      { name: "A lo Pobre", desc: "Extra adicional.", price: "$3.000" },
    ],
  },

  {
    slug: "reposteria",
    title: "Repostería",
    emoji: "🍰",
    cover: coverFor("tortas"),
    subtitle: "Clásicos dulces de la casa.",
    items: [
      { name: "Torta Zanahoria", desc: "Porción.", price: "$5.000" },
      { name: "Torta Amor", desc: "Porción.", price: "$5.000" },
      { name: "Pie de Limón", desc: "Porción.", price: "$3.500" },
      { name: "Tiramisú", desc: "Porción.", price: "$3.500" },
      { name: "Chocolate Frambuesa", desc: "Porción.", price: "$4.500" },
      { name: "Torta 3 Leches", desc: "Porción.", price: "$4.500" },
      { name: "Cheesecake Frutos Rojos", desc: "Porción.", price: "$3.500" },
      { name: "Cheesecake Maracuyá", desc: "Porción.", price: "$3.500" },
    ],
  },

  {
    slug: "waffles",
    title: "Waffles",
    emoji: "🧇",
    cover: coverFor("waffles"),
    subtitle: "Sabores y combinaciones.",
    items: [
      { name: "Cactus", desc: "Base + crema + salsa.", price: "$4.500" },
      { name: "Del Bosque", desc: "Base + 1 fruta + 1 topping + crema + salsa.", price: "$6.500" },
      { name: "El Suculento", desc: "Base + 2 frutas + 2 toppings + crema + salsa.", price: "$8.500" },
      { name: "Isidora", desc: "Base + 3 frutas + 3 toppings + crema + salsa.", price: "$10.000" },
      { name: "Bases", desc: "Manjar • Nutella • Chocolate • Mermelada.", price: "Incluido" },
      { name: "Salsas", desc: "Manjar • Frutilla • Caramelo.", price: "Incluido" },
      { name: "Toppings", desc: "Oreo • Brownie • Obsesión • Costa Rama.", price: "Incluido" },
      { name: "Frutas", desc: "Frutilla • Plátano • Arándano • Frambuesa • Frutos rojos.", price: "Incluido" },
    ],
  },

  {
    slug: "panqueques",
    title: "Panqueques",
    emoji: "🥞",
    cover: coverFor("panqueques"),
    subtitle: "Dulces y contundentes.",
    items: [
      { name: "2 Panqueques", desc: "Porción tradicional.", price: "$4.500" },
      { name: "2 Panqueques Especiales", desc: "Según disponibilidad.", price: "$5.500" },
      { name: "2 Panqueques + Helado y Crema", desc: "Con helado y crema.", price: "$5.500" },
      { name: "2 Panqueques + Helado, Crema y Salsa", desc: "Con helado, crema y salsa.", price: "$6.500" },
      { name: "Relleno", desc: "Manjar • Mermelada.", price: "Incluido" },
      { name: "Salsas", desc: "Chocolate • Manjar • Frambuesa • Caramelo.", price: "Incluido" },
      { name: "Agregado Extra", desc: "Manjar o mermelada.", price: "Consultar" },
    ],
  },

  {
    slug: "sandwich",
    title: "Sándwich",
    emoji: "🥪",
    cover: coverFor("sangucheria"),
    subtitle: "Clásicos chilenos.",
    items: [
      { name: "Jamón Queso", desc: "Sándwich clásico.", price: "$4.000" },
      { name: "Queso Caliente", desc: "Queso derretido.", price: "$2.500" },
      { name: "Ave Mayo", desc: "Pollo + mayo.", price: "$4.500" },
      { name: "Ave Italiana", desc: "Pollo, palta, tomate y mayo.", price: "$6.500" },
      { name: "Barros Luco", desc: "Carne + queso.", price: "$6.000" },
      { name: "Churrasco Italiano", desc: "Carne, palta, tomate y mayo.", price: "$6.500" },
      { name: "Chacarero", desc: "Carne, porotos verdes, ají y tomate.", price: "$7.000" },
      { name: "Tostadas", desc: "Tostadas con mantequilla.", price: "$2.500" },
    ],
  },

  {
    slug: "pailas",
    title: "Pailas",
    emoji: "🍳",
    cover: coverFor("pailas"),
    subtitle: "Arma tu combinación.",
    items: [
      { name: "Simple", desc: "2 huevos + pan.", price: "$2.500" },
      { name: "1 Ingrediente", desc: "Elige 1 ingrediente.", price: "$3.500" },
      { name: "2 Ingredientes", desc: "Elige 2 ingredientes.", price: "$4.500" },
      { name: "Ingredientes", desc: "Tocino • Queso • Champiñón • Salame • Tomate • Jamón.", price: "A elección" },
    ],
  },

  {
    slug: "empanadas",
    title: "Empanadas",
    emoji: "🥟",
    cover: coverFor("empanadas"),
    subtitle: "Variedades y promo.",
    items: [
      { name: "Pino", desc: "Clásica.", price: "$3.500" },
      { name: "Pino Vegetariano", desc: "Opción veggie.", price: "$3.500" },
      { name: "Napolitana", desc: "Jamón, queso y tomate.", price: "$3.500" },
      { name: "Aceituna Queso", desc: "Aceitunas + queso.", price: "$3.500" },
      { name: "Pastel de Choclo", desc: "Sabor tradicional.", price: "$3.500" },
      { name: "Camarón Queso", desc: "Marino.", price: "$3.500" },
      { name: "Pino Ají", desc: "Con toque picante.", price: "$3.500" },
      { name: "Champiñón Queso", desc: "Champiñón y queso.", price: "$3.500" },
      { name: "Pollo Queso", desc: "Pollo y queso.", price: "$3.500" },
      { name: "Queso Solo", desc: "Full queso.", price: "$3.500" },
      { name: "Mechada Queso", desc: "Mechada y queso.", price: "$3.500" },
      { name: "Tocino Champiñón", desc: "Tocino + champiñón.", price: "$3.500" },
      { name: "Cebolla Caramelizada + Crema", desc: "Cebolla caramelizada y crema.", price: "$3.500" },
      { name: "Promo 3 Empanadas", desc: "3 empanadas por promo.", price: "$10.000" },
    ],
  },
];

export function getCategory(slug) {
  return CATEGORIES.find((c) => c.slug === slug);
}