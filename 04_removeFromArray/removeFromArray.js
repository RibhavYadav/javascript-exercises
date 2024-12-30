const removeFromArray = function(givenArray, ...args) {
    const newArray = [];
    for (let value of givenArray) {
        if (!args.includes(value)) {
            newArray.push(value);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
