const prompt = require('prompt-sync')();

function main () {
    console.log("It's time for FizzBuzz!");
    const n = parseInt(prompt("Please enter a positive integer (n > 0): "));
    runFizzBuzz(n);
}

function runFizzBuzz(n) {
    console.log(`n = ${n}`);
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            if (i % 3 == 0) {
                process.stdout.write("Fizz");
            }
            if (i % 5 == 0) {
                process.stdout.write("Buzz");
            }
        } else {
            process.stdout.write(i.toString());
        }
        process.stdout.write("\n");
    }
}

if (require.main == module) {
    main();
}
