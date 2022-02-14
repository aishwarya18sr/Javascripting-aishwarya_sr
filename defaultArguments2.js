function makeImportant(inputString, numOfExclamation = inputString.length) {
    let resultString = inputString + '!'.repeat(numOfExclamation);
    return resultString;
}

module.exports = makeImportant;