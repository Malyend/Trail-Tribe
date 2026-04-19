// Dropdown menu

const dropDown = document.getElementById('dropDown');
const menu = document.querySelector('.DropDown');

dropDown.addEventListener("click", openDDMenu)

function openDDMenu(){
    menu.classList.toggle('openY');

    if(menu.classList.contains('openY')) {
        dropDown.value = "⋮";
    } else {
        dropDown.value = "≡";
        }
}

