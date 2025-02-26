const repeatString = (str, num)=> {
    if(num < 0){
        return 'Error'
    }
    let result = ''

    for(i = 0; i < num; i++){
        return result += str
    }
    return result
};

//const repeatString = (string, num) => 
//    num < 0 ? 'ERROR' : Array(num).fill(string).join('');


// Do not edit below this line
module.exports = repeatString;
