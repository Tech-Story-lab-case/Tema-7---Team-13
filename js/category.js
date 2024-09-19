const categoryList = document.querySelector("#categoryList");

// fetcher kategorierne
fetch("https://mcsksxwejwxsymqyakzx.supabase.co/rest/v1/techandstorylab?category=")
  // gemmer det som en varibel i json format, som gives videre til brugeren
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      categoryList.innerHTML += <li>{/* <a href="productlist.html?category=$iqmedieproduktion</a> */}</li>;
    });
  });
