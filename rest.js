function average(...args) {
    var result = 0;
    var count = 0;
    args.forEach(function (value) {
        result += value;
        count++;
    });
    return result / count;
}



module.exports = average;



