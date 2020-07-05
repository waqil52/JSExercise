const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function tConv24(time24) {
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = (H % 12) || 12;
    h = (h < 10) ? ("0" + h) : h;
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
};

readline.question('Enter Your Time:', time => {
    console.log(tConv24(time));
    readline.close();
});