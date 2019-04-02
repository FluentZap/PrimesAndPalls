// var input = 23;
// var numList = [];
// for(var i = 1; i <= input; i++) {
// 	numList.push(i);
// }
// console.log(numList);
//
//
// var result = 1;
//
// for(var i = 0; i < numList.length; i++) {
//
//   result *= numList[i];
// }
// console.log(result);


var numList= [];
var primeNumList= [];
var prime = 2;
var countTo = 10000;

for(var i = prime; i <= countTo; i++) {
  numList.push(i);
}

for(var i = 0; i < numList.length; i++) {
  var isPrime = true;

  for(var multiple = 2; multiple < numList[i] - 1; multiple++) {
    if(numList[i]%multiple === 0) {
      isPrime = false;
    }
  }

  if (isPrime)
  primeNumList.push(numList[i]);
}

console.log(primeNumList);
