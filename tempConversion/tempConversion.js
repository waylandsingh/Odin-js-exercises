const ftoc = function(temp) {
  // returns the Celsius scale temperature for temp(F)
  //convert
  let c = (temp - 32) * 0.5556
  
  // round to 1 decimal place
  c = Math.round(c * 10) / 10
  return c

};

const ctof = function(temp) {
  // returns Farenheidt scale temp from C
  // convert
  let f = temp*9/5 + 32

  // round to 1 decimal
  f = Math.round(f * 10) / 10
  return f
};

module.exports = {
  ftoc,
  ctof
};
