
const dropdown = document.getElementById("category");
const products = document.querySelectorAll("#product-list li");


dropdown.addEventListener("change", function () {
  const selectedCategory = this.value;

  products.forEach(product => {
    if (selectedCategory === "all" || product.getAttribute("data-category") === selectedCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
