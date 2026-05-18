// Dropdown menu

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

// Email Functionality

const form = document.getElementById('contact-F');
form.addEventListener('submit', submitEmail)

async function submitEmail(event){
    event.preventDefault();
    const username = document.getElementById('Username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    await fetch('http://localhost:8080/contact', {
        method: "POST",
        Headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name:`${username}`, email: `${email}`, message:`${message}` }),
    })
}