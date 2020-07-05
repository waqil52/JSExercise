var arr = [2, 2, 4, 2, 6, 4, 7, 8];
var counts = {};
var i, value;
for (i = 0; i < arr.length; i++) {
    value = arr[i];
    if (typeof counts[value] === "undefined") {
        counts[value] = 1;
    } else {
        counts[value]++;
    }
}
console.log(counts);