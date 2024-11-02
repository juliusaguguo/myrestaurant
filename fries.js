

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