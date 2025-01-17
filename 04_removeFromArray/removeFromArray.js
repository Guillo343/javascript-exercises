const removeFromArray = function(arr, itemToRemove) {
    const index = arr.indexOf(itemToRemove);
    if (index == -1) {
        arr.splice(index,1)
    }
    return arr
};

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))

// Do not edit below this line
module.exports = removeFromArray;
