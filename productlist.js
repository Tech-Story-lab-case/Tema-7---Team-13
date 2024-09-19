const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const template = document.querySelector("#ProductTemplate").content;
console.log(category);

const url = `https://mcsksxwejwxsymqyakzx.supabase.co/rest/v1/techandstorylab?category=eq.${category}`;
const key1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jc2tzeHdland4c3ltcXlha3p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MTM3NDgsImV4cCI6MjA0MTQ4OTc0OH0.gfO6uEwbi_JfAoGmaWYRt-o7OHdq_ftJdNs6eNGPBOw";

const args1 = {
  headers: {
    apikey: key1,
  },
};

fetch(url, args1)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  products.forEach(showProduct);
  console.log(products);
  document.querySelector("h1").textContent = category;
}

function showProduct(product) {
  //console.log(product);
  //fang template
  //lav kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector(".navn").textContent = product.navn;
  copy.querySelector(".brand").textContent = product.brand;
  copy.querySelector("img").textContent =
    "images/productlist/" + product.id + ".webp";
  copy.querySelector("a").href = `product.html?id=${product.id}`;
  //appende
  document.querySelector("main").appendChild(copy);
}
