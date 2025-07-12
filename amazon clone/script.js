const cart = [];

document.querySelectorAll(".product-card button").forEach(button => {
  button.addEventListener("click", (e) => {
    const productCard = e.target.closest(".product-card");
    const productName = productCard.querySelector("h3").innerText;
    const productPrice = productCard.querySelector("p").innerText;

    cart.push({
      name: productName,
      price: productPrice
    });

    alert(`✅ "${productName}" added to cart!\nCart Total: ${cart.length} item(s)`);
  });
});

const searchInput = document.querySelector(".search-bar");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    const allProducts = document.querySelectorAll(".product-card");

    allProducts.forEach(product => {
      const title = product.querySelector("h3").innerText.toLowerCase();
      if (title.includes(searchValue)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}
