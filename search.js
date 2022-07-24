let url = "https://www.youtube.com/results?search_query="
let contextMenuItem = {
    "id": "youtubeIt",
    "title": `Search Youtube for `,
    "contexts": ["selection"]
}
chrome.contextMenus.create(contextMenuItem)

chrome.contextMenus.onClicked.addListener(function(clickData){
    let searchPhrase = clickData.selectionText
    if (clickData.menuItemId == "youtubeIt" && clickData.selectionText) {
        chrome.tabs.create({url: url + searchPhrase})
    }
})