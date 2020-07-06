function getWordCount(str: string) {
    let words: string[] = str.split(' ');
    return words.length;
}

let sampleInput = "This is an assignment to print number of word in a string.";
console.log(getWordCount(sampleInput));