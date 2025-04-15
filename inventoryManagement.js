// Write your code here

const products = [];

const product1 = { name: "Laptop" };
const product2 = { name: "Phone" };
const product3 = { name: "Headphones" };
const product4 = { name: "Monitor" };

products.push("Laptop", "Phone", "Headphones", "Monitor");


// Logs name of first product
function logFirstProduct() {
  console.log(products[0]);
}

// Adds a product 
function addProduct(name) {
  products.push(name);
}

// Update name
function updateProductName(index, newName) {
  if (products[index]) {
    products[index] = newName;
  }
}

// Remove the last product
function removeLastProduct() {
  if (products.length > 0) {
    products.pop();
  }
}



















// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
