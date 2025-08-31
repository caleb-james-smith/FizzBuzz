const prompt = require('prompt-sync')();

function main () {
    console.log("It's time for FizzBuzz!");
    const n = parseInt(prompt("Please enter a positive integer (n > 0): "));
    runFizzBuzz(n);
}

function runFizzBuzz(n) {
    console.log(`n = ${n}`);
}

if (require.main == module) {
    main();
}
