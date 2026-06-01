const products = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
  { id: 2, name: "Shoes", price: 2000, category: "Fashion" },
  { id: 3, name: "Mobile", price: 30000, category: "Electronics" },
  { id: 4, name: "T-Shirt", price: 1000, category: "Fashion" },
  { id: 5, name: "Headphones", price: 2500, category: "Electronics" }
];
const productNames = products.map(p => p.name);
console.log("Product Names:");
console.log(productNames.join(", "));
const discountPrices = products.map(p => ({
  ...p,
  price: p.price * 0.9
}));
console.log("\nDiscounted Products:");
console.log(discountPrices);
const electronics = products.filter(p => p.category === "Electronics");
console.log("\nElectronics Products:");
electronics.forEach(p => console.log(p.name));
const above5000 = products.filter(p => p.price > 5000);
console.log("\nProducts above 5000:");
above5000.forEach(p => console.log(p.name));
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("\nTotal Price:");
console.log(totalPrice);
const mostExpensive = products.reduce((max, p) =>
  p.price > max.price ? p : max
);
console.log("\nMost Expensive Product:");
console.log(`${mostExpensive.name} - ${mostExpensive.price}`);
const electronicsNames = products
  .filter(p => p.category === "Electronics")
  .map(p => p.name);
console.log("\nElectronics Names:");
console.log(electronicsNames.join(", "));
const categoryCount = products.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] || 0) + 1;
  return acc;
}, {});
console.log("\nCategory Count:");
console.log(categoryCount);