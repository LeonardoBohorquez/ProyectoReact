export const PcGaming = [
  {
    id: 1,
    nombre: "GAMING PC 1",
    procesador: "Intel Core i9-11900K",
    video: "NVIDIA RTX 3080",
    ram: "32GB DDR4",
    categoria: "Alta",
    precio: 2400,
    stock: 3,
    descripcion: "La mejor experiencia de juego con rendimiento de gama alta."
  },
  {
    id: 2,
    nombre: "GAMING PC 2",
    procesador: "AMD Ryzen 7 5800X",
    video: "NVIDIA RTX 3070",
    ram: "16GB DDR4",
    categoria: "Alta",
    precio: 2000,
    stock: 3,
    descripcion: "Rendimiento excepcional para jugadores entusiastas."
  },
  {
    id: 3,
    nombre: "GAMING PC 3",
    procesador: "Intel Core i5-11600K",
    video: "NVIDIA GTX 1660 Ti",
    ram: "16GB DDR4",
    categoria: "Media",
    precio: 1200,
    stock: 3,
    descripcion: "Equilibrio entre rendimiento y precio para juegos de calidad."
  },
  {
    id: 4,
    nombre: "GAMING PC 4",
    procesador: "AMD Ryzen 5 5600X",
    video: "NVIDIA GTX 1650",
    ram: "8GB DDR4",
    categoria: "Media",
    precio: 1000,
    stock: 3,
    descripcion: "Rendimiento sólido para juegos de nivel medio."
  },
  {
    id: 5,
    nombre: "GAMING PC 5",
    procesador: "Intel Core i3-10100F",
    video: "NVIDIA GTX 1050 Ti",
    ram: "8GB DDR4",
    categoria: "Baja",
    precio: 600,
    stock: 4,
    descripcion: "Opción asequible para juegos básicos y tareas."
  },
  {
    id: 6,
    nombre: "GAMING PC 6",
    procesador: "AMD Ryzen 3 3200G",
    video: "AMD Radeon RX 550",
    ram: "4GB DDR4",
    categoria: "Baja",
    precio: 400,
    stock: 4,
    descripcion: "Ideal para juegos casuales y uso básico."
  },
  {
    id: 7,
    nombre: "GAMING PC 7",
    procesador: "Intel Core i7-10700K",
    video: "NVIDIA RTX 3060",
    ram: "16GB DDR4",
    categoria: "Alta",
    precio: 1800,
    stock: 3,
    descripcion: "Rendimiento excepcional para juegos y tareas intensivas."
  },
  {
    id: 8,
    nombre: "GAMING PC 8",
    procesador: "AMD Ryzen 5 3600X",
    video: "NVIDIA GTX 1660",
    ram: "8GB DDR4",
    categoria: "Media",
    precio: 900,
    stock: 3,
    descripcion: "Excelente rendimiento para juegos de nivel medio."
  },
  {
    id: 9,
    nombre: "GAMING PC 9",
    procesador: "Intel Core i5-10400F",
    video: "NVIDIA GTX 1050",
    ram: "8GB DDR4",
    categoria: "Baja",
    precio: 500,
    stock: 3,
    descripcion: "Rendimiento básico para juegos y tareas diarias."
  },
  {
    id: 10,
    nombre: "GAMING PC 10",
    procesador: "AMD Ryzen 3 3100",
    video: "AMD Radeon RX 540",
    ram: "4GB DDR4",
    categoria: "Baja",
    precio: 300,
    stock: 3,
    descripcion: "Ideal para juegos casuales y títulos menos exigentes."
  }
];


/* Funcion que mostrara todas las PC */
  export const getPcs = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(PcGaming)
        }, 2000)
    })
  }
/* Funcion que solo mostrara el PC por ID */
  export const getPcsId = (pcId) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(PcGaming.find(pc => pc.id === pcId ))
        }, 2000)
    })
  }
/* Funcion que solo mostrara las PC segun su categoria */
  export const getPcsCategory = (pcCategory) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(PcGaming.filter(pc => pc.categoria === pcCategory))
        }, 2000)
    })
  }