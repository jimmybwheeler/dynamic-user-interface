const navBar = document.querySelector('.navBar');

function addNavBarMenus(){
    navBar.append(navBarMenu())
}

function navBarMenu(){
    const div = document.createElement('div');
    div.innerText = 'Home';
    return div;
}

addNavBarMenus();