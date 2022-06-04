const getRandomNumber = function(min, max) {
  if(min >= 0 && min <= max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return null;
};
getRandomNumber(2, 7);

const getRandomCoordinate = function(min, max, digits) {
  if(min >= 0 && min <= max) {
    return (Math.random() * (max - min) + min).toFixed(digits);
  }
  return null;
};
getRandomCoordinate(2.123, 9.12, 2);
