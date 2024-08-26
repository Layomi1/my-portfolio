let btnClose = document.querySelector(".close");
let menu = document.querySelector(".open");
let menuList = document.querySelector("nav ul");
console.log(menuList);
const btns = document.querySelectorAll("button");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    if (button === menu) {
      menuList.style.display = "block";
      btnClose.style.display = "block";
      menu.style.display = "none";
    } else {
      menuList.style.display = "none";
      btnClose.style.display = "none";
      menu.style.display = "block";
    }
  });
});

const spans = document.querySelectorAll(".progress-container span");

spans.forEach((span) => {
  span.style.width = span.dataset.width;
  span.innerHTML = span.dataset.width;
});
