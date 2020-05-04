"use strict";

let a = 5;
let b = 8;

console.log(a == b);
console.log(a < b);
console.log(a > b);
console.log(a >= b);
console.log(a <= b);

let bool_1 = a < b;
let bool_2 = a > b;

console.log(bool_1);
console.log(bool_2);

console.log(5 != 5);
console.log(5 == 5);

console.log(`0 == "" = ` + (0 == "")); //true, because an empty String = 0
console.log(`0 == "0" = ` + (0 == "0")); //true, because an empty String = 0
console.log(`0 === "0" = ` + (0 === "0")); //true, 3x= means strong comparison (data type)

console.log(`true == false = ` + (true == false));

// let x = "hhhh `jsdjsdj`";
// x = `1111 "hhghg"`;
// x = 'html..... class=""> '; // use \"\" if you have to use the SAME quotes within
// console.log(x);

console.log(`ABC > BBC = ` + (`ABC` > `BBC`));
console.log(`ABC < BBC = ` + (`ABC` < `BBC`));
console.log(`ABC == BBC = ` + (`ABC` == `BBC`));
console.log(`123 > ABC = ` + (`123` > `ABC`));

//LOGICAL OPERATIONS;

a = true;
b = false;

console.log(a);
// a = !a;
console.log(a);

console.log(`a && b = ` + (a && b)); // logical AND (logical multiplier)

// 1 * 0 = 0; // false
// 1 * 1 = 1; // true
// 0 * 1 = 0; // false
// 0 * 0 = 0; // false

console.log(`a || b = ` + (a || b)); //logical OR (logical addition)

// 1 + 0 = 1; // true
// 0 + 1 = 1; // true
// 1 + 1 = 2; // everything greater than 0 = true
// 0 + 0 = 0; // false

console.log(5 > 4 && 5 > 5);

console.log(`a && (a || b || (5 < 7)) = ` + a && (a || b || 5 < 7));

a = 7;

if (a == 5) {
  console.log(`Variable a = 5`);
}

if (a > 5) {
  console.log(`Variable a = 5`);
} else if (a == 5) {
  console.log(`Variable a = 5`);
} else {
  console.log(`Variable a < 5`);
}

if (true) console.log(`Saisinats pieraksts, ja viens statement`);
else console.log(`False`);

if (false) console.log(`Saisinats pieraksts, ja viens statement`);
else if (5 < 3) console.log(`aaa`);
else console.log(`fdf`);

b = 0;

// let result;
// if (b != 0) result = a / b;
// else result = 0;

let result = b != 0 ? a / b : 0;
console.log(`result = ` + result);

b = 3;
result = b != 0 ? a / b : 0;
console.log(`result = ` + result);

let lang = `lv`;

let str =
  lang == `lv`
    ? `Sveiki`
    : lang == `en`
    ? `Hello`
    : lang == `fr`
    ? `Bonjour`
    : `Unknown language`;

console.log(str);

//LOOPS
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(`IF loop has concluded!`);
console.log(`===================`);

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
console.log(`WHILE loop has concluded!`);

i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
console.log(`DO WHILE loop has concluded!`);

for (let i = 0; i < 12; i += 2) {
  if (i == 4) continue;
  if (i == 8) break;
  console.log(i);
}
console.log(`===================`);
//Sum of number in a range 1-10
let summa = 0;
let n = 10;
i = 1;

for (; i <= n; i++) {
  summa += i;
}

console.log(`Sum of numbers ranging from 1 to ${n} is equal to ${summa}`);
console.log(`===================`);

// let c;
// while (true) {
//   c = prompt(`Username:`);
//   if (c == ``) continue;
//   console.log(c);
//   c = Number(c);
//   if (!Number.isNaN(c)) break;
// }

// alert(c ** 2);
// console.log(c);

// let g = +prompt(`Enter a number 1-3`);

// console.log(g + ` ` + typeof g);

// switch (g) {
//   case 1:
//     alert(`Input = 1`);
//     break;
//   case 2:
//     alert(`Input = 2`);
//     break;
//   case 3:
//     alert(`Input = 3`);
//     break;
//   default:
//     alert(`Incorrect input!`);
// }

//Functions

function hello() {
  console.log(`Hello`);
}

hello();

function summa4ka(x, y) {
  console.log(x + y);
}

summa4ka(5, 10);

function something(x, y, r = false) {
  let resultFun = x + y;
  if (r) return resultFun;
  hello(resultFun);
}

let uu = something(5, 15);
uu = something(7, 22, true);

console.log(uu);

const LENGTH = 2;

function checkName(word) {
  return name.length > LENGTH;
}

let name = prompt(`Input your name`);

if (checkName(name)) alert(`Sveiki ${name}!`);
else alert(`Tu esi debils!`);
