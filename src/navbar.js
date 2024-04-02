const menuOne = document.querySelector('.menuOne');
menuOne.addEventListener('click', showDropDown)

function showDropDown() {
    const dropDown = document.querySelector('.dropDown')
    dropDown.classList.toggle('showDropDown');
}