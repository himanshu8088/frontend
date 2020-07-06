function getListWithMatchingChar(text, ch) {
    var matchingSet = [];
    text.split(' ').map(function (word) {
        if (word.indexOf(ch) !== -1)
            matchingSet.push(word);
    });
    return matchingSet;
}
var matchingList = getListWithMatchingChar("Print all matching character that contains a in it.", "a");
matchingList.forEach(function (item, idx) { return console.log(item); });
