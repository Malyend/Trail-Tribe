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