var arr = [2, 4, 9, 2, 0, 16, 24];

var sorted = arr.sort(function (a, b) {
  return a - b;
});

var secondSmallest = sorted[1];
var secondLargest = sorted[sorted.length - 2];

console.log("Second Smallest: " + secondSmallest);
console.log("Second Largest: " + secondLargest);