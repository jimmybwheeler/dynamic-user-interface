const tShirtMenu = document.querySelector(".tShirtMenu");
tShirtMenu.addEventListener("click", showDropDown);

const pantsMenu = document.querySelector('.pantsMenu')
pantsMenu.addEventListener("click", showDropDown);

const jacketMenu = document.querySelector('.jacketMenu')
jacketMenu.addEventListener("click", showDropDown);

const dropDownItems = document.querySelectorAll('.dropDownItem');
dropDownItems.forEach((item) => {
    item.addEventListener('click', changeBackgroundColor)
})

function showDropDown() {
  const dropDown = document.querySelector(".dropDown");
  dropDown.classList.toggle("showDropDown");
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = `${randomColor()}`;
    document.querySelector('.dropDown').classList.toggle('showDropDown')
}

function randomColor() {
    let arr = ['red', 'green', 'blue']
    return arr[Math.floor(Math.random() * 3)];
}