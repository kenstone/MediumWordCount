var countWords = function(displayElement) {
    var paragraphs = $(".body:not('.default-value') p");
    var wordCount = 0;
    for (var i = 0; i < paragraphs.length; i++) {
        var textToCount = paragraphs[i].innerText;
        var words = textToCount.split(' ');
        wordCount += words.length;
    }
    displayElement.text(wordCount + " words");
}

var addWordCounter = function() {
    var display = $("#mediumWordCounter");
    if (!display.length) {
        display = $("<div id='mediumWordCounter'/>");
        $(".metabar").append(display);
    }

    countWords(display);

    var keydown = function() {
        countWords(display);
    }

    window.onkeydown = keydown;

}

chrome.runtime.onMessage.addListener(function(request, sender) {
    addWordCounter();
})

