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