
chrome.history.onVisited.addListener(function (result) {

    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendMessage(tab.id, {});
    });

})

