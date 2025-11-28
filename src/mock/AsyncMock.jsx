export const products = [
  {
    id: 1,
    name: "Antiparras",
    description:
      "Antiparras deportivas de alta calidad. Son profesionales y vienen de varios colores.",
    category: "Acuaticos",
    stock: 15,
    price: 25000,
    img: "/productos/antiparras.png",
  },

  {
    id: 2,
    name: "Pelota de basquet",
    description:
      "Pelota de basquet profesional de primera marca con detalles en color.",
    category: "Mas populares",
    stock: 15,
    price: 80000,
    img: "/productos/basquet.png",
  },

  {
    id: 3,
    name: "Colchoneta",
    description:
      "Colchoneta para yoga, pilates y abdominales. Son de espuma de 4cm de alto con lona lisa.",
    category: "Gimnasia",
    stock: 15,
    price: 20000,
    img: "/productos/colchoneta.png",
  },

  {
    id: 4,
    name: "Dobok",
    description:
      " Dobok para Tae kwondo-do ITF para cinto de color, ya que no trae las bandas negras. Estampado y con algodon fino. Incluye el cinto blanco.",
    category: "Artes marciales",
    stock: 15,
    price: 88000,
    img: "/productos/dobok.png",
  },

  {
    id: 5,
    name: "Pelota de futbol",
    description:
      "Pelota oficial de la AFA. Es la profesional de cancha de 11 con la que se juega el torneo de la liga del 2025.",
    category: "Mas populares",
    stock: 15,
    price: 110000,
    img: "/productos/futbol.png",
  },

  {
    id: 6,
    name: "Gorra natacion",
    description:
      "Gorra para natacion de silicona. Perfectamente ajustable a tu medida y viene de varios colores.",
    category: "Acuaticos",
    stock: 15,
    price: 2500,
    img: "/productos/gorras.png",
  },

  {
    id: 7,
    name: "Guantes boxeo",
    description:
      "Guantes profesionales para boxeo de primera marca. Vienen de varios talles para que estes bien comodo.",
    category: "Artes marciales",
    stock: 15,
    price: 35000,
    img: "/productos/guantes.png",
  },

  {
    id: 8,
    name: "Kit gimnasia",
    description:
      "Kit completo para hacer aerobics y gimnasia. Incluye conos, aros, barras para salto y pesas para muñecas y tobillos.",
    category: "Gimnasia",
    stock: 15,
    price: 40000,
    img: "/productos/gym.png",
  },
];

let error = false;
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error, intente mas tarde");
      } else {
        resolve(products);
      }
    }, 2000);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let product = products.find((item) => item.id === Number(id));
      resolve(product);
    }, 3000);
  });
};
