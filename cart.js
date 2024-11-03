const cartContainer = document.querySelector(".cart-items-container");

function renderCartItems() {
    cartContainer.innerHTML = "";

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        itemDiv.innerHTML = `
        <img src="${item.image}"alt="${item.name}"
        class="cart-item-image">
        <p class="cart-item-name"> ${item.name}</p>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        <button class="remove-item-btn" data-index="${index}">Remove</button>
        `;

        cartContainer.appendChild(itemDiv);
    });
    const totalPrice = cartItems.reduce((sum, item) =>
        sum + item.price, 0);

    document.querySelectorAll(".remove-item-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const itemIndex = event.target.getAttribute("data-index");
            removeCartItem(itemIndex);
        });
    });
}

function removeCartItem(index){
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.splice(index, 1);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCartItems();
}

removeCartItems()