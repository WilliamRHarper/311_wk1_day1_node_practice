const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 === 0? true:false;
}

const sum = (arr) => {
  // write code for numbers.sum
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer);
}

const comboSum = (arr, sum) => {
  let result = false;
  // write code for numbers.comboSum
  for (let i = 0; i < arr.length; i++){
    for (let j = 1; j < arr.length; j++){
      if (arr[i] !== arr[j] && arr[i] + arr[j] === sum) {
        result = true;
      }
    }
  }
  return result;
}

module.exports = {
  isEven,
  sum,
  comboSum
}