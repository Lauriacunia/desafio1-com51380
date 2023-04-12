class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(newProduct) {
    /**Validar que no se repita el campo “code” 
         * y que todos los campos sean obligatorios
        Al agregarlo, debe crearse con un id autoincrementable
    */
    const productExists = this.products.find(
      (product) => newProduct.code === product.code
    );
    if (productExists) {
      throw new Error("Bad request. Product code already exists");
    }
    if (
      !newProduct.title ||
      !newProduct.description ||
      !newProduct.price ||
      !newProduct.thumbnail ||
      !newProduct.code ||
      !newProduct.stock
    ) {
      throw new Error("Bad request. Missing fields");
    }

    // generar id autoincrementable
    const id = this.products.length + 1;
    newProduct.id = id;

    this.products.push(newProduct);
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  getProducts() {
    return this.products;
  }

  deleteAllProducts() {
    this.products = [];
  }
}

console.log("🛸 Desafio 1 - Clases 🛸 ");
console.log("Tutora: Laura Acuña");

/** 🗨 Creo una instancia de la clase productManager -> con la palabra 'new'*/
const myProductManager = new ProductManager();

/** 🗨 Agrego un producto */
myProductManager.addProduct({
  title: "Remera",
  description: "Remera de algodon",
  price: 1000,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  code: "1234",
  stock: 10,
});

/** 🗨 Agrego un producto */
myProductManager.addProduct({
  title: "Pantalón",
  description: "Pantalón de jean",
  price: 2000,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  code: "5678",
  stock: 20,
});

/** 🗨 Agrego un producto con code repetido */
// myProductManager.addProduct({
//   title: "Pantalón",
//   description: "Pantalón de jean",
//   price: 2000,
//   thumbnail:
//     "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
//   code: "1234",
//   stock: 20,
// });

/** 🗨 Agrego un producto sin campos obligatorios */
// myProductManager.addProduct({
//   title: "Pantalón",
//   description: "Pantalón de jean",
//   price: 2000,
// });

/** 🗨 Listo todos los productos */
console.log("🔥 Mis productos son: ");
console.log(myProductManager.getProducts());

/** 🗨 Busco un producto por id */
console.log("🔥 Busco un producto por id: ");
console.log(myProductManager.getProductById(1));

/** 🗨 Busco un producto por un id que no existe */
// console.log("🔥 Busco un producto por un id que no existe: ");
// console.log(myProductManager.getProductById(30));

/** 🗨 Elimino todos los productos */
myProductManager.deleteAllProducts();
