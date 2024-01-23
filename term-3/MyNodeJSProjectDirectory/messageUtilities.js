function messageRepeater(message, repeatCount) {
    let repeatedResult = "";

    for (let index = 0; index < repeatCount; index++) {
        repeatedResult += message;
    }

    return repeatedResult;
}

module.exports = {
    messageRepeater
}