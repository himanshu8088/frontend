
function convertToStatementCase(str: string) {
    return str.split('.')
        .map(statement => {
            statement = statement.trim();
            let firstLetter = statement.charAt(0).toUpperCase();
            console.log(firstLetter);
            return firstLetter + statement.substring(1, statement.length);
        }).join(". ");
}

let sampleStatements = "This is assignment1. convert statements first letter in upper case. print statements.";
console.log(convertToStatementCase(sampleStatements));