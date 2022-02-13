function makeImportant(inputString, noExclamation = inputString.length) {
    let resultString = inputString + '!'.repeat(noExclamation);
    return resultString;
}

module.exports = makeImportant;