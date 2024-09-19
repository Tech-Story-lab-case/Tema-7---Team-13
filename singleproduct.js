const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id"); 

const url = `https://mcsksxwejwxsymqyakzx.supabase.co/rest/v1/techandstorylab?id=eq.${id}`;

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jc2tzeHdland4c3ltcXlha3p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MTM3NDgsImV4cCI6MjA0MTQ4OTc0OH0.gfO6uEwbi_JfAoGmaWYRt-o7OHdq_ftJdNs6eNGPBOw`;


fetch(url, {
        method: "GET",
        headers: {
        apikey: key,
    }
})
.then((response)=>response.json())
.then((product)=>showProduct(product)); 



function showProduct(product){
    console.log(product);

    document.querySelector(".productname").textContent = product[0].navn;
    document.querySelector(".productBox .brand").textContent = product[0].brand;
    document.querySelector(".productBox .type").textContent=product[0].type;
    document.querySelector(".productBox .objectcode").textContent=product[0].Objektkode;
    }