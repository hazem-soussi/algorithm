const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter the array :", (arr) => {
    let array = arr.split(',').map(x=>parseInt(x));
    let maxLength = 0;
    let index = -1;
    let currentLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                index = i;
            }
            currentLength = 0;
        }
    }
    let maxLeft = 0;
    let maxRight = 0;
    for (let i = 0; i < index; i++) {
        if (array[i] === 1) {
            maxLeft++;
        }
    }
    for (let i = index + 1; i < array.length; i++) {
        if (array[i] === 1) {
            maxRight++;
        }
    }
    console.log("The index of the zero that should be replaced with a one to get the longest sequence of ones is: ", index - maxLeft);
    rl.close();
});
