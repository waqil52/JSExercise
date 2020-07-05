var arr = Array.from(Array(4), () => new Array(4));
var i = 0,
    j = 0;
var count = 1;
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        arr[i][j] = count;
        count++;
    }
}
console.log(arr);