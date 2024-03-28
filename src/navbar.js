const navBar = document.querySelector(".navBar");
const menuOne = document.querySelector(".menuOne");
const menuTwo = document.querySelector(".menuTwo");
const menuThree = document.querySelector(".menuThree");

menuOne.addEventListener("mouseover", showDropDown);
menuOne.addEventListener("mouseout", hideDropDown);

function showDropDown() {
  document.querySelector(".menuOneDropDown").classList.add("showDropDownMenu");
}

function hideDropDown() {
  document
    .querySelector(".menuOneDropDown")
    .classList.remove("showDropDownMenu");
}
