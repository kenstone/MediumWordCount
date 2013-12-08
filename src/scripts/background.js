
chrome.history.onVisited.addListener(function (result) {

    chrome.tabs.query({active:true}, function(tab) {
        chrome.tabs.sendMessage(tab[0].id, {});
    });

})

