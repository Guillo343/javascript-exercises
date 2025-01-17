const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 > num2) {
        [num1, num2] = [num2, num1]
    }

    for(i = num1 ; i < num2.length; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
