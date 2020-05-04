"use strict";

let message; // a-z, A-Z, 0-9(nevar sakties ar skaitli), $, _

message = "Teksts"; // String

let myMessage = 5; // Number

myMessage = "6"; // String

let myBoolean = true; // or false

let myNull = null;

let myNan = "abc" * 5; //not possible
console.log(myNan);

let myUndefined;
console.log(myUndefined);

let inf = 1 / 0;
console.log(inf);

console.log(typeof message);

let myObject = {
  name: "Pēteris",
  age: 54,
};
console.log(myObject);
console.log(myObject.age);

const PI = 3.1415926; //can't be changed

let r = 5;
let area = PI * r * r;
console.log(area);

//TIPU MAINĪŠANA

let str = "12.5";
let number = Number(str);
console.log("Type of variable str - " + typeof str + ": " + str);
console.log("Type of variable number - " + typeof number + ": " + number);

console.log(Number("abc"));

console.log(Number(true) + " " + Number(false));
console.log("1" + "2");
console.log(1 + Number("2"));

console.log(String(15) + " - " + typeof String(15));
console.log(String(true) + " - " + typeof String(true));
console.log(Boolean(15) + " - " + typeof Boolean(15)); //everything >0 means TRUE
console.log(Boolean(0) + " - " + typeof Boolean(0)); // 0 = FALSE
console.log(Boolean(0) + " - " + Boolean("")); // FALSE & FALSE
console.log(Boolean(0) + " - " + Boolean(" ")); // FALSE & TRUE

let a = "12";
let b = "15";

console.log(a + b);
console.log(Number(a) + Number(b));
console.log(+a + +b);

// NUMBERS

let c = 15.7,
  d = 25;

console.log("c = " + c);

// d = -d; // to NEGATIVE
// d = --d; // subtract 1
console.log("d = " + d);

console.log(`${c} + ${d} = ${c + d}`); //15.7 + 25 = 40.7
console.log(`${c} - ${d} = ${c - d}`);
console.log(`${c} * ${d} = ${c * d}`);
console.log(`${c} / ${d} = ${c / d}`);
console.log(`${c} % ${d} = ${c % d}`);

c = 10;
d = 4;

console.log(`${c} ** ${d} = ${c ** d}`); //Pakape

c++; // 11
c--; // 10
c += 2; // 12
c -= 2; // 10
c *= 2; // 20
c /= 2; // 10

console.log(c);

console.log(Math.round(5.45)); // Rounding
console.log(Math.round(5.55)); // Rounding

console.log(Math.ceil(5.15)); // ROunding up
console.log(Math.floor(5.95)); // Rounding down
