export const products = [
  {
    id: 1,
    name: "Antiparras",
    description: "Antiparras deportivas de alta calidad",
    category: "Acuaticos",
    stock: 15,
    price: 25000,
    img: "../public/productos/antiparras.png",
  },

  {
    id: 2,
    name: "Basquet",
    description: "Pelota de basquet profesional",
    category: "Mas populares",
    stock: 15,
    price: 80000,
    img: "../public/productos/basquet.png",
  },

  {
    id: 3,
    name: "Colchoneta",
    description: "Colchoneta para yoga, pilates y abdominales",
    category: "Gimnasia",
    stock: 15,
    price: 20000,
    img: "../public/productos/colchoneta.png",
  },

  {
    id: 4,
    name: "Dobok",
    description: "Dobok para Tae kwon-do de cintos de color",
    category: "Artes marciales",
    stock: 15,
    price: 88000,
    img: "../public/productos/dobok.png",
  },

  {
    id: 5,
    name: "Pelota de futbol",
    description: "Pelota oficial de la AFA",
    category: "Mas populares",
    stock: 15,
    price: 110000,
    img: "../public/productos/futbol.png",
  },

  {
    id: 6,
    name: "Gorra natacion",
    description: "Gorra para natacion de silicona",
    category: "Agitcuaticos",
    stock: 15,
    price: 2500,
    img: "../public/productos/gorras.png",
  },

  {
    id: 7,
    name: "Guantes boxeo",
    description: "Guantes profesionales para boxeo",
    category: "Artes marciales",
    stock: 15,
    price: 35000,
    img: "../public/productos/guantes.png",
  },

  {
    id: 8,
    name: "Kit gimnasia",
    description: "Kit completo para hacer aerobics y gimnasia",
    category: "Gimnasia",
    stock: 15,
    price: 40000,
    img: "../public/productos/gym.png",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
