let productos = [
  {
    id: 1,
    nombre: "iPhone",
    empresaId: 1,
    fechaLanzamiento: "2017-06-29",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/279px-IPhone_X_vector.svg.png"
  },
  {
    id: 2,
    nombre: "iPad",
    empresaId: 1,
    fechaLanzamiento: "2010-0403",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/IPad_2017_tablet.jpg/390px-IPad_2017_tablet.jpg"
  },
  {
    id: 3,
    nombre: "Pixel",
    empresaId: 2,
    fechaLanzamiento: "2013-02-21",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Pixel_2_and_Pixel_2_XL.svg/375px-Pixel_2_and_Pixel_2_XL.svg.png"
  },
  {
    id: 4,
    nombre: "Surface",
    empresaId: 3,
    fechaLanzamiento: "2012-10-26",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Surface_Pro_4_in_library.jpeg/450px-Surface_Pro_4_in_library.jpeg"
  },
  {
    id: 5,
    nombre: "Xbox",
    empresaId: 3,
    fechaLanzamiento: "2001-11-15",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Xbox-Console-Set.png/375px-Xbox-Console-Set.png"
  }
];

module.exports = {
  findProductos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      });
    }, 300);
  },
  findProductosByEmpresaId(empresaId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos.filter(producto => producto.empresaId === empresaId));
      }, 300);
    });
  },
  findProducto(id) {
    return new Promise((resolve, refect) => {
      setTimeout(() => {
        resolve(productos.find(producto => producto.id === id));
      }, 300);
    });
  }
};
