// DropDown menu

const dropButton = document.getElementById("dropDown");
const dropButtonOut = document.getElementById("dropOut");
const menu = document.querySelector(".DropDown");

dropButton.addEventListener("click", dropDownMenu);
dropButtonOut.addEventListener("click", dropDisappear)

function dropDownMenu(){

        menu.classList.add("openY");

        dropDown.value = "⋮";
        dropDown.style.transition = "1s";
   
}

function dropDisappear(){
    menu.classList.remove("openY");
    dropDown.value = "≡";
    dropDown.style.background = "#3c798D";
}