
navigator.serviceWorker.register("./serviceWorker.js")

async function updatePWA() {
    console.log("function started");
    if ("ServiceWorker" in navigator){
        const registration = await 
        navigator.serviceWorker.getRegistration('./');
        console.log("registration found:", registration)

        if (registration){
            registration.update();
            console.log("Checking for updates...");

            registration.onupdatefound(() => {
                console.log("New Version Found! reloading...");
                window.location.reload();
            });
        }
    }
}
updatePWA()
// The News button
const drawNews = document.getElementById("News-button");
const news = document.querySelector(".news-feed");

drawNews.addEventListener("click", openNews);

function openNews() {
    news.classList.toggle("openX");
    
    if (news.classList.contains("openX")) {
        drawNews.value = "<<<";
    } else {
        drawNews.value = ">>>";
    }
}

// The Dropdown menu navigation button
const dropDown = document.getElementById("dropDown");
const menu = document.querySelector(".DropDown");

dropDown.addEventListener("click", dropDownMenu);

function dropDownMenu(){

    menu.classList.toggle("openY");

    if (menu.classList.contains("openY")) {
        dropDown.value = "⋮";
    } else {
        dropDown.value = "≡";
    }
}