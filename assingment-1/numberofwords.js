function getWordCount(str) {
    var words = str.split(' ');
    return words.length;
}
var sampleInput = "This is an assignment to print number of word in a string.";
console.log(getWordCount(sampleInput));
