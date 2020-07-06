function convertToStatementCase(str) {
    return str.split('.')
        .map(function (statement) {
        statement = statement.trim();
        var firstLetter = statement.charAt(0).toUpperCase();
        console.log(firstLetter);
        return firstLetter + statement.substring(1, statement.length);
    }).join(". ");
}
var sampleStatements = "This is assignment1. convert statements first letter in upper case. print statements.";
console.log(convertToStatementCase(sampleStatements));
