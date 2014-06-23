var countWords = function(displayElement) {

    var paragraphs = $(".surface:visible .body:not('.default-value') p");

    paragraphs.length ? displayElement.removeClass("hidden") : displayElement.addClass("hidden");

    var wordCount = 0;
    for (var i = 0; i < paragraphs.length; i++) {
        var textToCount = paragraphs[i].innerText;
        var words = textToCount.split(' ');
        wordCount += words.length;
    }
    displayElement.text(addCommas(wordCount) + " words");
};

var addWordCounter = function() {
    var display = $(".surface:visible .mediumWordCounter");
    if (!display.length) {
        display = $("<span class='mediumWordCounter'/>");
        $(".postMetaInline").append(display);
    }

    countWords(display);

    window.onkeydown = function() {
        countWords(display);
    };

};

function addCommas(intNum) {
    return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

chrome.runtime.onMessage.addListener(function() {
    addWordCounter();
});

