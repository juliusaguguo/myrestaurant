/*  const content = document.querySelector(".content");

 const items = [
    "🚀",
    "🙄",
    "⚠️",
    "😂",
    "😊",
    "🗾",
    "🙋",
    "🤔"
 ];


 content.addEventListener("mouseover", () =>{
    content.innerHTML = items[Math.floor(Math.random() * items.length)]
 }); */



 const order = document.querySelector(".order-now");

 order.addEventListener("click", ()=>{
   order.classList.toggle("order-now-hover")
 });



document.addEventListener("DOMContentLoaded", function(){
  
const topNav = document.querySelector(".top-nav");
const faSolid = document.querySelector(".fa-solid");
 
if(localStorage.getItem("MenuOpen") === "true"){
  topNav.classList.remove("hideNavMenu");
} else{
  topNav.classList.add("hideNavMenu")
}

faSolid.addEventListener("click", () => {
  topNav.classList.toggle("hideNavMenu");

  const isMenuOpen = !topNav.classList.contains("hideNavMenu");
  localStorage.setItem("MenuOpen", isMenuOpen);
});

});


const starIcon = document.querySelector(".fa-regular");

starIcon.addEventListener("click", () =>{
  starIcon.classList.toggle("star")
})

/* 
  function toggleMenu(){
    const topNav = document.querySelector(".top-nav");

    topNav.classList.toggle("show")
  } */

/* 

  const hideShow = document.querySelector(".hideShow");

  const topNav = document.querySelector(".top-nav");

  hideShow.addEventListener("click", () => {
    topNav.classList.toggle("hideShow")
  }) */




