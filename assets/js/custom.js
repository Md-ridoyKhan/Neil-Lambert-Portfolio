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