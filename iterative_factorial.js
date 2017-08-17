var factorial = function(n) {
    var result = 1;

    for (var i = 2; i <= n; i++) {
      result = result * i;
    }
    return result;
};

console.log("The value of 5! should be " + 5*4*3*2*1);
console.log("The value of 5! is " + factorial(5));
console.log("The value of 0! should be 1");
console.log("The value of 0! is " + factorial(0));
console.log("The value of 8! should be " + 8*7*6*5*4*3*2*1);
console.log("The value of 8! is " + factorial(8));
console.log("The value of 10! should be " + 10*9*8*7*6*5*4*3*2*1);
console.log("The value of 10! is " + factorial(10));
