const prompt = require('prompt-sync')();

function main () {
    console.log("It's time for FizzBuzz!");
    const n = parseInt(prompt("Please enter a positive integer (n > 0): "));
    runFizzBuzzV1(n);
}

function runFizzBuzzV1(n) {
    console.log(`n = ${n}`);
    for (let i = 1; i <= n; i++) {
        let message = "";
        if (i % 3 == 0) {
            message += "Fizz";
        }
        if (i % 5 == 0) {
            message += "Buzz";
        }
        if (!message) {
            message = i.toString();
        }
        console.log(message);
    }
}

function runFizzBuzzV2(n) {
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
