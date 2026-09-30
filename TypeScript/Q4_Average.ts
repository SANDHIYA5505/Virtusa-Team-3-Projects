let numbers: number[] = [10, 20, 30, 40, 50];
let sum: number = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average: number = sum / numbers.length;
console.log(average);
export {};
