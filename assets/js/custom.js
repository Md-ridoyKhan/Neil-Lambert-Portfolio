// mobile menu area here 
const header = document.querySelector(".header");
const menuList = document.querySelector(".menu-list");
const menuBar = document.querySelector(".menu-bar");
const closeBar = document.querySelector(".close-bar");
menuBar.onclick = ()=>{
    menuList.classList.add("active");
    menuBar.classList.add("hide");
}
closeBar.onclick = ()=>{
    menuList.classList.remove('active');
    menuBar.classList.remove("hide");
}
window.onscroll = ()=>{
    this.scrollY > 20 ?
    header.classList.add("sticky"):
    header.classList.remove("sticky");
}

// accordion area here 
var acc = document.getElementsByClassName("question");
var i;
for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

