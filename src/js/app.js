const checkbox = document.querySelector("#check");
const ddIcon = document.querySelector("#dd-icon");
const closeIcon = document.querySelector("#close-icon");

closeIcon.addEventListener("click", () => {
  const menu = document.querySelector('.menu');
  menu.classList.remove('top-0');
  menu.classList.add('top-full');
});

ddIcon.addEventListener("click", () => {
  const menu = document.querySelector('.menu');
  menu.classList.remove('top-full');
  menu.classList.add('top-0');
});