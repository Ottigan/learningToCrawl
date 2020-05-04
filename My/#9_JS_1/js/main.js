"use strict";

//First Task
let g = 9.8;
let m = 80;
let newton = m / g;

console.log(`Mass = ${newton}`);

//Second Task
let a = "12.5";
let b = "-5.7";

console.log(a + b);

a = Number(a);
b = Number(b);

console.log(a + b);

//Third Task
console.log((8 + 15) / ((14 - 9) * (7.8 - 15 * 14)));

let r = 8;
let t = 15;
let y = 14;
let u = 9;
let i = 7.8;

console.log((r + t) / ((y - u) * (i - t * y))); //sakrita

let text1 = "12";
let text2 = "40";

console.log(text1 + text2); //divas simbolu virknes tiek apvienotas viena
console.log(Number(text1) + Number(text2)); //nemot vera, ka bija iespejams sos simbolus uztvert ka skaitlus, tika veikta matematiska darbiba.
// Ja konvertacija butu neveiksmiga, tad rezultats butu NaN
