fetch(`https://mcsksxwejwxsymqyakzx.supabase.co/rest/v1/techandstorylab?assetid=eq.${id}`)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").textContent;
  //lav kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector(".navn").textContent = product.navn;
  copy.querySelector(".brand").textContent = product.brand;
  copy.querySelector("a").href = `product.html?id=${product.id}`;
  //appende
  document.querySelector("main").appendChild(copy);
}
