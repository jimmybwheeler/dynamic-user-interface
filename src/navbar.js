const navBar = document.querySelector(".navBar");
const menuOne = document.querySelector(".menuOne");
const menuTwo = document.querySelector(".menuTwo");
const menuThree = document.querySelector(".menuThree");

menuOne.addEventListener("mouseover", showDropDown);

function showDropDown() {
  const dropDown = document.querySelector('.dropDown');
  dropDown.style.display = 'none';
  dropDown.style.display == 'none' ? 'block' : 'none'
}
