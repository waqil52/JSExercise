var stars = '';
var size = 3
var maxWidth = size + 2;
var num = (maxWidth + 1) / 2;
for (let i = num - 1; i > -num; i--) {
    for (let j = num - Math.abs(i); j < num; j++) {
        stars += ' '
    }
    for (let j = 0; j < 2 * (num - Math.abs(i)) - 1; j++) {
        stars += "*";
    }
    stars += "\n";
}
console.log(stars);