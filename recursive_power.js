// Recursive function that returns value of x^n
var isEven = function(n) {
  return n % 2 === 0;
};

var isOdd = function(n) {
  return !isEven(n);
};

var power = function(x, n) {
  console.log(`Computing ${x} raised to power ${n}.`);
  // base case
  if (n === 0) { return 1; }
  // recursive case: n is negative
  if (n < 0) { return 1 / power(x, -n); }
  // recursive case: n is odd
  if (isOdd(n)) { return power(x, n - 1) * x; }
  // recursive case: n is even
  if (isEven(n)) {
    var y = power(x, n/2);
    return y * y;
  }
};

var displayPower = function(x, n) {
  console.log(`${x} to the ${n} is ${power(x, n)}`);
};

// Test
displayPower(3, 0); // 1
displayPower(3, 1); // 3
displayPower(3, 2); // 9
displayPower(3, -1); // 1/3
displayPower(2, 8); // 256
displayPower(2, 11); // 2048
