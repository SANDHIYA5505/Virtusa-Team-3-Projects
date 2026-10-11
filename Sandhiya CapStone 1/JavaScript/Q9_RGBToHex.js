const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter Red value: ", (rInput) => {
    rl.question("Enter Green value: ", (gInput) => {
        rl.question("Enter Blue value: ", (bInput) => {
            const r = Number(rInput);
            const g = Number(gInput);
            const b = Number(bInput);
            const red = r.toString(16).padStart(2, "0");
            const green = g.toString(16).padStart(2, "0");
            const blue = b.toString(16).padStart(2, "0");
            const hex = "#" + red + green + blue;
            console.log("Hexadecimal:", hex);
            rl.close();
        });
    });
});
