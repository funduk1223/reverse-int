module.exports = function reverse (n) {
  let numberArr = n.toString().split('');
  let char = numberArr[0];
 
  if (char === '-') {
    let resultNumber = numberArr.slice(1).reverse().join('')
    return (Number(resultNumber));
  }
  else {
    let resultNumber = numberArr.reverse().join('')
    return (Number(resultNumber));
  }
}