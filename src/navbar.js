const menuOne = document.querySelector(".menuOne");
menuOne.addEventListener("click", showDropDown);

const dropDownItemOne = document.querySelector(".dropDownItemOne");
dropDownItemOne.addEventListener("click", showItemOne);

function showDropDown() {
  const dropDown = document.querySelector(".dropDown");
  dropDown.classList.toggle("showDropDown");
}

function showItemOne() {
  console.log("test");
  document.body.style.backgroundColor = "red";
  document.querySelector('.dropDown').classList.toggle('showDropDown')
}
