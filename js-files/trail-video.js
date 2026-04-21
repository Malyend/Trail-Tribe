//Drop down menu
const dropButton = document.getElementById('dropDown');
const dropMenu = document.querySelector('.DropDown');

dropButton.addEventListener("click", dropDownMenu)

function dropDownMenu(){
    dropMenu.classList.toggle('openY');

     if (dropMenu.classList.contains("openY")) {
        dropDown.value = "⋮";
    } else {
        dropDown.value = "≡";
    }
}
