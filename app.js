const navlink = document.querySelectorAll(".navlink");
const menu = document.querySelector(".burger-menu");
const navbox = document.querySelector(".navigation-container");
menu.addEventListener("click", () => {
  navbox.classList.toggle("show");
  menu.classList.toggle("cross");
});
navlink.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (e.target.id === "item-navlink") {
      if (link.classList.contains("active")) {
        e.preventDefault();
        link.classList.toggle("active");
      } else {
        e.preventDefault();
        navlink.forEach((updateLink) => {
          updateLink.classList.remove("active");
        });
        console.log(e.target.className);
        link.classList.toggle("active");
      }
    }
  });
});
