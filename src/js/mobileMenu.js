const mobileButtonMenu = document.querySelector(".header__mobile-toggle");
const headerBorder = document.querySelector(".header__container");

mobileButtonMenu.addEventListener("click",()=>{
  if(mobileButtonMenu.classList.contains("header__mobile-toggle--open")) {
    mobileButtonMenu.classList.remove("header__mobile-toggle--open");
    headerBorder.classList.add("header__container--border");
  }
  else {
    mobileButtonMenu.classList.add("header__mobile-toggle--open");
    headerBorder.classList.remove("header__container--border");
  }
});