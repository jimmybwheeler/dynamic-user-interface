const tShirtMenu = document.querySelector(".tShirtMenu");
tShirtMenu.addEventListener("click", function () {
  showDropDown("shirts");
});

const pantsMenu = document.querySelector(".pantsMenu");
pantsMenu.addEventListener("click", function () {
  showDropDown("pants");
});

const jacketMenu = document.querySelector(".jacketMenu");
jacketMenu.addEventListener("click", function () {
  showDropDown("jackets");
});

const dropDownItems = document.querySelectorAll(".dropDownItem");
dropDownItems.forEach((item) => {
  item.addEventListener("click", changeBackgroundColor);
});

function showDropDown(clothingType) {
  const dropDownItems = document.querySelectorAll(".dropDownItem");
  const dropDown = document.querySelector(".dropDown");
  dropDown.classList.add("showDropDown");
  if (clothingType == "shirts") {
    console.log("shirts");
    let arr = ["Shirt 1", "Shirt 2", "Shirt 3"];
    let dropDownArr = Array.from(dropDownItems)
    for(let i = 0; i < dropDownArr.length; i++){
      dropDownArr[i].innerText = arr[i]
    }
    console.log(dropDownArr)
  } else if (clothingType == "pants") {
    console.log("pants");
    let arr = ["Pants 1", "Pants 2", "Pants 3"];
    let dropDownArr = Array.from(dropDownItems)
    for(let i = 0; i < dropDownArr.length; i++){
      dropDownArr[i].innerText = arr[i]
    }
  } else if (clothingType == "jackets") {
    console.log("jackets");
    let arr = ["Jacket 1", "Jacket 2", "Jacket 3"];
    let dropDownArr = Array.from(dropDownItems)
    for(let i = 0; i < dropDownArr.length; i++){
      dropDownArr[i].innerText = arr[i]
    }
  }
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = `${randomColor()}`;
  document.querySelector(".dropDown").classList.toggle("showDropDown");
}

function randomColor() {
  let arr = ["red", "green", "blue"];
  return arr[Math.floor(Math.random() * 3)];
}
