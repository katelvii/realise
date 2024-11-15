document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const cartElement = document.querySelector(".cart-items");
    const totalPriceElement = document.querySelector(".total-price");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            const product = e.target.closest(".product");
            const id = product.dataset.id;
            const name = product.dataset.name;
            const price = parseFloat(product.dataset.price);

            const existingItem = cartItems.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push({ id, name, price, quantity: 1 });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartElement.innerHTML = "";
        let total = 0;

        cartItems.forEach(item => {
            total += item.price * item.quantity;
            const li = document.createElement("li");
            li.textContent = `${item.name} x${item.quantity} - ${item.price * item.quantity} грн`;
            cartElement.appendChild(li);
        });

        totalPriceElement.textContent = total.toFixed(2);
    }
});
