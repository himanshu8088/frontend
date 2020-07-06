function getCountOfMatchingWord(text, matchingWord) {
    var count = 0;
    text.split(' ').map(function (word) {
        if (word.indexOf(matchingWord) !== -1)
            count++;
    });
    return count;
}
console.log(getCountOfMatchingWord("Print the count for the matching word found in the text.", "the"));
