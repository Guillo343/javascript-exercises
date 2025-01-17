const convertToCelsius = function(x) {
  const formulaToCelsius = (x - 32) * (5 / 9);
  let result = Math.round(formulaToCelsius * 10) / 10;
  return result
};

const convertToFahrenheit = function(x) {
  const formulaToFahrenheit =  x * (9 / 5) + 32;
  let result = Math.round(formulaToFahrenheit * 10) / 10;
  return result
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
