
var factorial = function(n) {
  // base case:
  if (n === 0) { return 1; }
  // recursive case:
  return factorial(n - 1) * n;
}

console.log("The value of 5! should be " + 5*4*3*2*1);
console.log("The value of 5! is " + factorial(5));
console.log("The value of 0! should be 1");
console.log("The value of 0! is " + factorial(0));
console.log("The value of 8! should be " + 8*7*6*5*4*3*2*1);
console.log("The value of 8! is " + factorial(8));
console.log("The value of 10! should be " + 10*9*8*7*6*5*4*3*2*1);
console.log("The value of 10! is " + factorial(10));
