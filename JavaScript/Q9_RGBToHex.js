function rgbToHex(r, g, b) {
    let red = r.toString(16).padStart(2, "0");
    let green = g.toString(16).padStart(2, "0");
    let blue = b.toString(16).padStart(2, "0");
    return "#" + red + green + blue;
}
let r = 255;
let g = 165;
let b = 0;
console.log(rgbToHex(r, g, b));
