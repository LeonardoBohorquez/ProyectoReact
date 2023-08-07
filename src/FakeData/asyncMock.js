// Array de objetos PcGaming
export const PcGaming = [
    {
      id: 1,
      nombre: "GAMING PC 1",
      procesador: "Intel Core i9-11900K",
      video: "NVIDIA RTX 3080",
      ram: "32GB DDR4",
      categoria: "Alta",
      precio: 2400, // Precio en dólares
      stock: 3, // Cantidad en stock
    },
    {
      id: 2,
      nombre: "GAMING PC 2",
      procesador: "AMD Ryzen 7 5800X",
      video: "NVIDIA RTX 3070",
      ram: "16GB DDR4",
      categoria: "Alta",
      precio: 2000, // Precio en dólares
      stock: 3, // Cantidad en stock
    },
    {
      id: 3,
      nombre: "GAMING PC 3",
      procesador: "Intel Core i5-11600K",
      video: "NVIDIA GTX 1660 Ti",
      ram: "16GB DDR4",
      categoria: "Media",
      precio: 1200, // Precio en dólares
      stock: 3, // Cantidad en stock
    },
    {
      id: 4,
      nombre: "GAMING PC 4",
      procesador: "AMD Ryzen 5 5600X",
      video: "NVIDIA GTX 1650",
      ram: "8GB DDR4",
      categoria: "Media",
      precio: 1000, // Precio en dólares
      stock: 3, // Cantidad en stock
    },
    {
      id: 5,
      nombre: "GAMING PC 5",
      procesador: "Intel Core i3-10100F",
      video: "NVIDIA GTX 1050 Ti",
      ram: "8GB DDR4",
      categoria: "Baja",
      precio: 600, // Precio en dólares
      stock: 4, // Cantidad en stock
    },
    {
      id: 6,
      nombre: "GAMING PC 6",
      procesador: "AMD Ryzen 3 3200G",
      video: "AMD Radeon RX 550",
      ram: "4GB DDR4",
      categoria: "Baja",
      precio: 400, // Precio en dólares
      stock: 4, // Cantidad en stock
    },
    {
      id: 7,
      nombre: "GAMING PC 7",
      procesador: "Intel Core i7-10700K",
      video: "NVIDIA RTX 3060",
      ram: "16GB DDR4",
      categoria: "Alta",
      precio: 1800, // Precio en dólares
      stock: 3, // Cantidad en stock
    },
    {
      id: 8,
      nombre: "GAMING PC 8",
      procesador: "AMD Ryzen 5 3600X",
      video: "NVIDIA GTX 1660",
      ram: "8GB DDR4",
      categoria: "Media",
      precio: 900, // Precio en dólares
      stock: 3, // Cantidad en stock
    },
    {
      id: 9,
      nombre: "GAMING PC 9",
      procesador: "Intel Core i5-10400F",
      video: "NVIDIA GTX 1050",
      ram: "8GB DDR4",
      categoria: "Baja",
      precio: 500, // Precio en dólares
      stock: 3, // Cantidad en stock
    },
    {
      id: 10,
      procesador: "AMD Ryzen 3 3100",
      video: "AMD Radeon RX 540",
      ram: "4GB DDR4",
      categoria: "Baja",
      precio: 300, // Precio en dólares
      stock: 3, // Cantidad en stock
    },
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