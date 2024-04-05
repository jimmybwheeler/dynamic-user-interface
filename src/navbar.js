const tShirtMenu = document.querySelector(".tShirtMenu");
tShirtMenu.addEventListener("click", function(){
    showDropDown('shirts');
});

const pantsMenu = document.querySelector('.pantsMenu')
pantsMenu.addEventListener("click", function(){
    showDropDown('pants');
});

const jacketMenu = document.querySelector('.jacketMenu')
jacketMenu.addEventListener("click", function(){
    showDropDown('jackets');
});

const dropDownItems = document.querySelectorAll('.dropDownItem');
dropDownItems.forEach((item) => {
    item.addEventListener('click', changeBackgroundColor)
})

function showDropDown(clothingType) {
  const dropDown = document.querySelector(".dropDown");
  dropDown.classList.add("showDropDown");
  if(clothingType == 'shirts'){
    console.log('shirts')
  } else if (clothingType == 'pants'){
    console.log('pants')
  } else if (clothingType == 'jackets'){
    console.log('jackets')
  }
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = `${randomColor()}`;
    document.querySelector('.dropDown').classList.toggle('showDropDown')
}

function randomColor() {
    let arr = ['red', 'green', 'blue']
    return arr[Math.floor(Math.random() * 3)];
}