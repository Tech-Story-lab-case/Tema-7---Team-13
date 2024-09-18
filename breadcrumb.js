document.addEventListener("DOMContentLoaded", function () {
    const breadcrumb = document.getElementById("breadcrumb");
    const url = window.location.pathname; // Get the current URL path (e.g., /products/electronics/smartphones)
    const segments = url.split("/").filter(Boolean); // Split and filter empty values
    
    // Add the 'Home' link (first breadcrumb)
    const homeCrumb = document.createElement("li");
    homeCrumb.innerHTML = `<a href="/">Home</a>`;
    breadcrumb.appendChild(homeCrumb);
  
    // Iterate through each URL segment and create breadcrumb links
    let path = "";
    segments.forEach((segment, index) => {
      path += `/${segment}`;
  
      const listItem = document.createElement("li");
  
      // If it's the last segment, just show the text (no link)
      if (index === segments.length - 1) {
        listItem.innerHTML = `<span>${decodeURIComponent(segment)}</span>`;
      } else {
        listItem.innerHTML = `<a href="${path}">${decodeURIComponent(segment)}</a>`;
      }
  
      breadcrumb.appendChild(listItem);
    });
  });