const checkbox = document.querySelector("#check");
const openIcon = document.querySelectorAll("#dd-icon");
const closeIcon = document.querySelector("#close-icon");

const contScroll = document.querySelector('.scroller');
var isMouseDown = false;
var startX, scrollLeft;

contScroll.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - contScroll.offsetLeft;
  scrollLeft = contScroll.scrollLeft;
  // console.log('something');
});

document.addEventListener('mouseup', ()=> {
  isMouseDown = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  const x = e.pageX-contScroll.offsetLeft;
  const scroll = x-startX;
  contScroll.scrollLeft = scrollLeft-scroll;
});

contScroll.addEventListener('wheel', (e) => {
  e.preventDefault();
  contScroll.scrollLeft += e.deltaX
})

closeIcon.addEventListener("click", () => {
  const menu = document.querySelector('.menu');
  menu.classList.remove('top-0');
  menu.classList.add('top-full');
});

openIcon.addEventListener("click", () => {
  const menu = document.querySelector('.menu');
  menu.classList.remove('top-full');
  menu.classList.add('top-0');
});

//scroll functionality

// const contScroll = document.querySelector('.scroller');
// var isMouseDown = false;
// var startX, scrollLeft;

// console.log(contScroll, ":is amazing");

// contScroll.addEventListener('mousedown', (e) => {
//   isMouseDown = true;
//   startX = e.pageX - contScroll.offsetLeft;
//   scrollLeft = contScroll.scrollLeft;
// });

// document.addEventListener('mouseup', ())