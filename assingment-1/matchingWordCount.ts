function getCountOfMatchingWord(text: string, matchingWord: string) {
    let count: number = 0;
    text.split(' ').map((word) => {
        if (word.indexOf(matchingWord) !== -1)
            count++;
    });
    return count;
}

console.log(getCountOfMatchingWord("Print the count for the matching word found in the text.", "the"));