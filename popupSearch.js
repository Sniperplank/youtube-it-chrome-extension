let url = "https://www.youtube.com/results?search_query=";
let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {
    chrome.tabs.create({ url: url + searchInput.value })
})
