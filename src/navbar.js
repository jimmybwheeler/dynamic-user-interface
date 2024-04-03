const menuOne = document.querySelector(".menuOne");
menuOne.addEventListener("click", showDropDown);

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