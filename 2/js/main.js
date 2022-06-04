let getRandomNumber = function(min, max) {
  if(min >= 0 && min <= max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  console.log(`число "${min}" должно быть больше или равно "0", а также меньше числа "${max}"`)
}
console.log(getRandomNumber(2, 7))

let getRandomCoordinate = function(min, max, digits) {
  if(min >= 0 && min <= max) {
    return (Math.random() * (max - min) + min).toFixed(digits)
  }
  console.log(`число "${min}" должно быть больше или равно "0", а также меньше числа "${max}"`)
}
console.log(getRandomCoordinate(2.123, 9.12, 2))
