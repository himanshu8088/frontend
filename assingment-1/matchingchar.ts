function getListWithMatchingChar(text: string, ch: string) {
    let matchingSet: string[] = [];
    text.split(' ').map((word) => {
        if (word.indexOf(ch) !== -1)
            matchingSet.push(word);
    });
    return matchingSet;
}

let matchingList: string[] = getListWithMatchingChar("Print all matching character that contains a in it.", "a");
matchingList.forEach((item, idx) => console.log(item));