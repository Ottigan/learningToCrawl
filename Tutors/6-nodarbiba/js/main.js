"use srtrict";

// SALĪDZINĀŠANAS OPERĀCIJAS

let a = 5;
let b = 8;

console.log(a == b); // == salīdzina uz vienādību

console.log(a > b);
console.log(a < b); // true
console.log(a >= b);
console.log(a <= b); // true

let bool_1 = a < b;
let bool_2 = a > b;

console.log(bool_1); // true
console.log(bool_2); // false

console.log(5 == 5);
console.log(5 != 5); // vai nav vienāds – false, jo ir vienāds
console.log(7 != 5); // vai nav vienāds – true, jo nav vienāds

console.log('0 == "" = ' + (0 == "")); // true
console.log('0 == "0" = ' + (0 == "0")); // true
console.log('0 == "1" = ' + (0 == "1")); // false
console.log('0 === "0" = ' + (0 === "0")); // false

console.log("true == false = " + (true == false));

// let x = "hhhh 'jjhjhj' ";
// x = 'lllll "hhghg" ';

// x = 'hhhh ... class=""> ';
// console.log(x);

console.log("ABC > BBC = " + ("ABC" > "BBC")); // false
console.log("ABC < BBC = " + ("ABC" < "BBC")); // true
console.log("ABC == BBC = " + ("ABC" == "BBC")); // false
console.log("ABC == ABC = " + ("ABC" == "ABC")); // true
console.log("ABCA == ABC = " + ("ABCA" == "ABC")); // false

console.log("123 > ABC = " + ("123" > "ABC")); // false

// LOĢISKĀS OPERĀCIJAS

a = true;
b = false;

console.log(a);

// a = !a;

// console.log(a);

console.log("a && b = " + (a && b)); // loģiskais UN (sauc par loģisko reizināšanu) = false

// 1 * 0 = 0;
// 1 * 1 = 1;
// 0 * 1 = 0;
// 0 * 0 = 0

console.log("a || b = " + (a || b)); // Loģisnkais VAI (loģiskā saskaitīšana) = true

// 1 + 0 = 1
// 0 + 1 = 1
// 1 + 1 = 1
// 0 + 0 = 0

console.log(5 > 4 && 5 < 5);

console.log("a && (a || b || (5 < 7)) = " + (a && (a || b || 5 < 7)));

// NOSACĪJUMI

a = 5;

if (a == 5) {
  console.log("Mainīgais a ir vienāds ar 5");
}

if (a > 5) {
  console.log("Mainīgais a ir lielākas par 5");
} else {
  console.log("Mainīgais a ir mazāks vai vienāds par 5");
}

a = 7;
if (a > 5) {
  console.log("Mainīgais a ir lielākas par 5");
} else if (a == 5) {
  console.log("Mainīgais a ir vienāds par 5");
} else {
  console.log("Mainīgais a ir mazāks par 5");
}

if (false) console.log("Patiesība");
else console.log("Nepatiesība");

if (false) console.log("Patiesība");
else if (5 < 3) console.log("aaa");
else console.log("Nepatiesība");

b = 0;

// let result;
// if (b != 0) result = a / b;
// else result = 0;
let result = b != 0 ? a / b : 0;
console.log("result = " + result);

b = 3;
result = b != 0 ? a / b : 0;
console.log("result = " + result);

let lang = "lv";
lang = "en";
lang = "fr";
lang = 6;

let str =
  lang == "lv"
    ? "Sveiki"
    : lang == "en"
    ? "Hello"
    : lang == "fr"
    ? "Bonjour"
    : "Nezināma valoda";

console.log(str);

// CIKLI

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("cikls ir beidzies");

console.log("================");

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

console.log("================");

i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

console.log("================");

for (let i = 0; i < 12; i += 2) {
  if (i == 4) continue;
  if (i == 8) break;
  console.log(i);
}

console.log("================");
// Skaitļu summa no 1 līdz 10
let summa = 0;
let n = 10;
i = 1;

for (; i <= n; i++) {
  summa += i; // analogs   summa = summa + i
}

console.log(`Skaitļu no 1 līdz ${n} summa ir vienāda ar ${summa}`);

console.log("================");

// while (true) {
//   a = prompt("Ievadiet skaitli");
//   if (a == "") continue; // pārbauda vai nav tukša rinda
//   a = Number(a);
//   if (!Number.isNaN(a)) break; // Pārbauda, vai ir ievadīts cipars
// }
// alert("Ievadītā skaitļa kvadrāts ir = " + a ** 2);

// SWITCH-CASE

// let g = +prompt("Ievadīt skaitli no 1 līdz 3");

// console.log(g + " " + typeof g);

// switch (g) {
//   case 1:
//     alert("Ievadīts skaitlis 1");
//     break;
//   case 2:
//     alert("Ievadīts skaitlis 2");
//     break;
//   case 3:
//     alert("Ievadīts skaitlis 3");
//     break;
//   default:
//     alert("Ievadīts nekorekts skaitlis");
// }

// FUNKCIJAS

// function hello(msg) {
//   console.log(`Summa ir ${msg}`);
// }

// hello("Hello");

// function summaFun(x, y) {
//   console.log(x + y);
// }

// summaFun(2, 5);
// summaFun(5, 10);

// function funSumma(x, y, r = false) {
//   let resultFun = x + y;
//   if (r) return resultFun;
//   hello(resultFun);
// }

// let uu = funSumma(5, 15);

// uu = funSumma(7, 22, true);

// console.log(uu);

const LENGTH = 2;

function checkName(name) {
  return name.length >= LENGTH;
}

let name = prompt("Ierakstiet savu vārdu:");
if (checkName(name)) alert(`Paldies, ${name}!`);
else alert(`Nekorekts vārds: minimālais burtu skaits –  ${LENGTH} simboli`);
