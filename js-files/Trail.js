
navigator.serviceWorker.register("./serviceWorker.js")

//Public VAPID key
const PUBLIC_VAPID_KEY = 'BHuOL-x5Ui1ZaD_qFa80oVvrIUFwmbs66LI0xajiRrLMc_Ypazc5w79H17urtlEYZ7lh4YctJcZuOn_lABL0HMc';
updatePWA()
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

document.querySelector('video').disablePictureInPicture = true;


// The News button
const drawNews = document.getElementById("News-button");
const news= document.querySelector(".news-feed");
const newl = document.getElementById('feed');

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