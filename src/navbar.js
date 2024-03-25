const navBar = document.querySelector(".navBar");
const menuOne = document.querySelector('.menuOne');
const menuTwo = document.querySelector('.menuTwo')
const menuThree = document.querySelector('.menuThree')

menuOne.addEventListener('mouseover', showDropDown);

function showDropDown(){
  document.querySelector('.menuOneDropDown').classList.add('showDropDownMenu');
}