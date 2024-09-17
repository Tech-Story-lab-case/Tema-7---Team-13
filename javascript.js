const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jc2tzeHdland4c3ltcXlha3p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MTM3NDgsImV4cCI6MjA0MTQ4OTc0OH0.gfO6uEwbi_JfAoGmaWYRt-o7OHdq_ftJdNs6eNGPBOw";

const args = {
  headers: {
    apikey: key,
  },
};

fetch(
  "https://mcsksxwejwxsymqyakzx.supabase.co/rest/v1/techandstorylab?category=eq.Studio facilities&select=id,navn,category",
  args
)
  .then((response) => response.json())
  .then(showItems);

function showItems(items) {
  items.forEach(showSingleItem);
}

function showSingleItem(item) {
  console.log("item", item);
  //fanger template
  const template = document.querySelector("#ProductTemplate").content;
  //cloner
  const clone = template.cloneNode(true);
  //ændrer indhold
  clone.querySelector(".navn").textContent = item.navn;
  clone.querySelector(".brand").textContent = item.brand;
  // clone.querySelector("a").href = `productlist.html?category=${cat.category}`;
  //appender
  document.querySelector("main").appendChild(copy);
}
