const body = document.querySelector("body");
const header = document.querySelector("header");
const logo = document.querySelector("header div.logo");
const headerUl = document.querySelector("header ul");
const headerLinks = document.querySelectorAll("header ul a");
const left = document.querySelector("div.left");
const leftContainer = document.querySelector("div.left .container");
const formTitle = document.querySelector("div.left h2");
const formName = document.querySelector("div.left form .name");
const formEmail = document.querySelector("div.left form .email");
const formBtn = document.querySelector("div.left form button");
const right = document.querySelector("div.right");
const rightContainer = document.querySelector("div.right .container2");
const magitBtn = document.querySelector("aside .magic");

magitBtn.addEventListener("click", () => {
  body.classList.add("active");
  header.classList.add("active");
  logo.classList.add("active");
  headerUl.classList.add("active");
  headerLinks.forEach((link) => {
    link.classList.add("active");
  });
  left.classList.add("active");
  leftContainer.classList.add("active");
  formTitle.classList.add("active");
  formName.classList.add("active");
  formEmail.classList.add("active");
  formBtn.classList.add("active");
  right.classList.add("active");
  rightContainer.classList.add("active");
  magitBtn.classList.add("off");
});
