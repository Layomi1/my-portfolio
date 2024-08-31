let btnClose = document.querySelector(".close");
let menu = document.querySelector(".open");
let menuList = document.querySelector("nav ul");
const btns = document.querySelectorAll("button");


const slides = [
  {
    id: 1,
    img: "css/image/tix-tac-toe.png",
    url: "https://frontend-rookie-tic-tac-toe.netlify.app/",
    title: "Tic-tac-toe",
  },

  {
    id: 2,
    img: "css/image/credit card.png",
    url: "https://my-credit-card-app.netlify.app/",
    title: "Credit card",
  },
  {
    id: 3,
    img: "css/image/scroll.png",
    url: "https://frontend-rookie-scroll-indicator.netlify.app/",
    title: "Scroll Indicator",
  },

  {
    id: 4,
    img: "css/image/music-app.png",
    url: "https://layomi1.github.io/music-website/",
    title: "Music-app",
  },

  {
    id: 5,
    img: "css/image/video.png",
    url: "https://layomi1.github.io/chevy-kitchen/",
    title: "Video player",
  },

  {
    id: 6,
    img: "css/image/chevy-kitchen.png",
    url: "https://layomi1.github.io/chevy-kitchen/",
    title: "Chevy-kitchen",
  },

  {
    id: 7,
    img: "css/image/meme.png",
    url: "https://monkz-meme-generator.netlify.app/",
    title: "Meme Generator",
  },

  {
    id: 8,
    img: "css/image/academic.png",
    url: "",
    title: " Academic website",
  },
  {
    id: 9,
    img: "css/image/dashboard.png",
    url: "https://frontend-rookie-dashbord.netlify.app/",
    title: "Admin dashboard",
  },
];

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

// overlay
let modalCloseBtn = document.querySelector(".modal-close");
const overlay = document.querySelector(".overlay");
const project = document.querySelectorAll(".button");
let pagination = document.getElementById("page");

// set starting item
let currentItem = 0;

// slider
let prevBtn = document.getElementById("left");
let nextBtn = document.getElementById("right");

let gitLink = document.getElementById("link");
let projectImg = document.getElementById("project-img");

// apply overlay

project.forEach((img) => {
  img.addEventListener("click", () => {
    overlay.style.display = "block";
    showProjectImage();
  });
});

function showProjectImage() {
  const item = slides[currentItem];
  projectImg.src = item.img;
  gitLink.textContent = item.title;
  pagination.textContent =  currentItem +1 + '/' + slides.length;
}

// prev button
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = slides.length - 1;
  }
  showProjectImage();
});

// next
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > slides.length - 1) {
    currentItem = 0;
  }
  showProjectImage();
});

// close overlay
modalCloseBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

