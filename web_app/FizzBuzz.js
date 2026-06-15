const numberInput = document.getElementById("number-input");
const runButton = document.getElementById("run-button");
const output = document.getElementById("output");

function updateOutput() {
    // Remove all children (nodes) of output element.
    output.replaceChildren();

    const number = numberInput.value;
    if (number > 0) {
        runFizzBuzz(number);
    }
}

function runFizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        let message = "";
        if (i % 3 === 0) {
            message += "Fizz";
        }
        if (i % 5 === 0) {
            message += "Buzz";
        }
        if (!message) {
            message += i;
        }
        addParagraphToOutput(message);
    }
}

function addParagraphToOutput(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    output.appendChild(paragraph);
}

runButton.addEventListener("click", updateOutput);
