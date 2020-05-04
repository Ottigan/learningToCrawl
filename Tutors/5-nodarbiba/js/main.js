"use strict";

let message; // a-z, A-Z, 0-9, $, _

message = "Teksts"; //String

let myMessage = 5; // Number

myMessage = "6";

let myBoolean = true; // false Boolean
let myNull = null; // Null
let myNan = "abc" * 5; // NaN

console.log(myNan);

let myUndefined; // Undefined
console.log(myUndefined);
let inf = 1 / 0; // Infinity
console.log(inf);

console.log(typeof myMessage);

let myObject = {
  name: "Pēteris",
  age: 54,
};

console.log(myObject.name);

const PI = 3.1415926;

console.log(PI);

let r = 5; // Rinka radiuss
let area = PI * r * r;
console.log(area);

// TIPU MAINĪŠANA

let str = "12.5";
let number = Number(str);
console.log("Mainīgā str tips ir – " + typeof str + " – " + str);
console.log("Mainīgā number tips ir – " + typeof number + " – " + number);

console.log(Number("abc"));

console.log(Number(true) + " " + Number(false));

console.log("1" + "2");
console.log("1" + Number("2"));

console.log(String(15) + " – " + typeof String(15));
console.log(String(true) + " – " + typeof String(true));

console.log(Boolean(15) + " – " + typeof Boolean(15));
console.log(Boolean(0) + " – " + typeof Boolean(0));
console.log(Boolean(-15) + " – " + typeof Boolean(-15));
console.log(Boolean(0) + " – " + Boolean("")); // false false
console.log(Boolean(" ")); // true

let a = "12";
let b = "15";

console.log(a + b); // 1215
console.log(Number(a) + Number(b)); //27
console.log(+a + +b);

// SKAITĻI

let c = 15.7,
  d = 25;

console.log("c = " + c);

// d = -d;
console.log("d = " + d);

console.log(`${d} + ${c} = ${d + c}`); // 15.7 + 25 = 40.7
console.log(`${d} - ${c} = ${d - c}`);
console.log(`${d} * ${c} = ${d * c}`);
console.log(`${d} / ${c} = ${d / c}`);
console.log(`${d} % ${c} = ${d % c}`);

c = 10;
d = 4;

console.log(`${c} ** ${d} = ${c ** d}`);

c = c + 1; // 11
c += 1; // 12

c++; // 13
console.log(c);

c--;
c -= 3;

d *= 2; //  d = d * 2

console.log(Math.round(5.45)); // Noapaļošana - matemātiskā
console.log(Math.round(5.55)); // Noapaļošana - matemātiskā

console.log(Math.ceil(5.15)); // Noapaļošana uz augšu

console.log(Math.floor(5.95)); // Noapaļošana uz leju
