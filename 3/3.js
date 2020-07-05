const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");
    return str.split(' ').length;
}

readline.question('Enter Your String:', name => {
    console.log('Your String has:' + ' ' + countWords(name) + ' ' + 'word/s');
    readline.close();
});