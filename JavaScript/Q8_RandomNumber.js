const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter minimum: ", (minInput) => {
    rl.question("Enter maximum: ", (maxInput) => {
        const min = Number(minInput);
        const max = Number(maxInput);
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("Random number:", result);
        rl.close();
    });
});