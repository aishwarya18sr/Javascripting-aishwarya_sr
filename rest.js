function average(...args) {
    let result = 0;
    let count = 0;
    args.forEach(function (value) {
        result += value;
        count++;
    });
    return result / count;
}



module.exports = average;



