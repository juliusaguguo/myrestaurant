 

document.querySelectorAll(".add").forEach(button => {
    button.addEventListener("click", () => {
        if(button.classList.contains("added")){
            button.classList.remove("added");
            button.textContent = "Add";
        } else {
            button.classList.add("added");
            button.textContent = "Added";
        }
    });
});

document.querySelectorAll(".add").forEach(show => {
    show.addEventListener("click", () => {
         alert("Added to Cart")
    });
});


document.querySelectorAll(".fa-heart").forEach(heart => {
    heart.addEventListener("click", () => {
        if(heart.classList.contains("active")){
            heart.classList.remove("active");
            heart.style.color = "green";
        } else {
            heart.classList.add("active");
            heart.style.color = "white";
        }
    })
})





















/* 

document.querySelectorAll(".add").forEach(addButton => {
    addButton.addEventListener("click", function() {
        const item = addButton.closest(".item");

        const itemData = {
            name: item.querySelector(".item-name").textContent, price: parseFloat(item.querySelector(".item-price").textContent.replace("$", "")),
            image: item.querySelector("item-image").getAttribute("src")
        };

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(itemData);

        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        addButton.textContent = "Added";
        addButton.classList.add("added");
    });
}); */