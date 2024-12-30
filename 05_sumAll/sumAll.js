const sumAll = function (start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    if (typeof end !== "number" || typeof start !== "number") {
        return "ERROR";
    }
    if (end < 0 || start < 0) {
        return "ERROR";
    }
    let total = 0;
    for (let i = 1; i <= Math.max(start, end); i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
