"use strict";

// function buyMilk(money) {
//   let milkPrice = 1.14;
//   console.log("AIzej uz tuvāko veikalu");
//   console.log("atrodi pienu");

//   if (money >= milkPrice) {
//     console.log("Nopirkt pienu");
//     console.log("Atnest uz mājām");
//   } else {
//     console.log("Nepietiek naudas");
//     console.log("Ejam pēc naudas");
//   }
// }

// buyMilk(1);
// buyMilk(5);

function summa(a, b) {
  let sum = a + b;
  console.log(sum);
}

summa(4, 7, 10);

// function summa2() {
//   let sum = arguments[0] + arguments[1] + arguments[2];
//   console.log(sum);
// }

// summa2(3, 7, 10);

// function foo() {
//   console.log(this === undefined);
// }

// foo();

// function foo() {
//   console.log(this === undefined);
// }

// foo();

// let func;
// //   x = -6;
// let x = +prompt("ievadied skaitli");
// // x = Number(x);
// if (x < 0)
//   func = function () {
//     console.log("Skaitls ir mazāks par nulli");
//   };
// else if (x == 0)
//   func = function () {
//     console.log("Ievadīta ir 0");
//   };
// else
//   func = function () {
//     console.log("Skaitls ir lielāks par nulli");
//   };

// func();

// let h = function () {
//   console.log("Funkcija strādā");
// };

// h();

// BULTU FUNKCIJAS / ARROW FUNCTION

function summa3(a, b, c) {
  return a + b + c;
}

let str2 = (a, b, c) => a + (b - c);

console.log(str2(2, 3, 3));

let div = (x, y) => {
  if (y == 0) return false;
  return x / y;
};

console.log(div(6, 3));
console.log(div(6, 0));

// MASĪVI

let name = [];
name = ["Māris", "Ilze", 77, true];

console.log(name);
console.log(name[1]);
console.log(name[1].toUpperCase());

name[2] = "Karlis";
console.log(name);

name.push("Jūlija");
console.log(name);

let myMoney = [1, 0.5, 2, 10, 1.13];

// console.log(myMoney.length);
function buyMilk(money) {
  let milkPrice = 1.14;
  for (let i = 0; i < money.length; i++) {
    console.log("AIzej uz tuvāko veikalu");
    console.log("atrodi pienu");
    console.log(`Piena cena ir ${milkPrice}, man ir ${money[i]}`);

    if (money[i] >= milkPrice) {
      console.log("Nopirkt pienu");
      console.log("Atnest uz mājām");
    } else {
      console.log("Nepietiek naudas");
      console.log("Ejam pēc naudas");
    }
    console.log("------------------");
  }
}

buyMilk(myMoney);

function printArray(arr) {
  console.log(`Masīva garums ir ${arr.length}`);
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(`Elementa ar indeksu ${i} vērtība ir – ${arr[i]}`);
  //   }

  for (let key in arr) {
    console.log(`Elementa ar indeksu ${key} vērtība ir – ${arr[key]}`);
  }

  console.log("------------");
  for (let elem of arr) {
    console.log(`Elements – ${elem}`);
  }
}

printArray(name);

function videjaVertiba(arr) {
  let sum = 0;
  for (let elem of arr) sum += elem;
  return sum / arr.length;
}

function maxVertiba(arr) {
  let max = arr[0];
  for (let elem of arr) {
    if (elem > max) max = elem;
  }
  return max;
}

console.log(
  `Masīva [10,5,15] vidējā vērtība ir – ${videjaVertiba([10, 5, 15])}`
);

console.log(
  `Masīva [10,5,15,50] max vērtība ir – ${maxVertiba([10, 5, 15, 50])}`
);

let arr = [
  [1, 2, 3],
  [4, 5],
];

console.log(arr);

console.log(arr[1][0]);

for (let row in arr) {
  for (let col in arr[row]) {
    console.log(
      `Elementa ar indeksu ${row},${col} vērtība ir – ${arr[row][col]}`
    );
  }
}

// OBJEKTI

let person = {
  firstName: "Janis",
  lastName: "Bērzinš",
  age: 40,
  hobbies: ["foto", "ceļošana", "web"],
  persHobiji: function () {
    return this.firstName + " hobiji ir " + this.hobbies;
  },
  gimene: {
    brali: [
      {
        firstName: "Karlis",
        age: 60,
      },
      {
        firstName: "Uldis",
        age: 33,
      },
    ],
    masas: {
      firstName: "Aija",
      lastName: "Kundzina",
      age: 35,
    },
  },
};

console.log(person);
console.log(person.firstName);
console.log(person.gimene.masas.firstName);

console.log(person.persHobiji());

// let cipars = document.getElementById("counter");
// console.log(cipars);

// let skaititajs = 0;
// function increment() {
//   skaititajs++;
//   cipars.innerText = skaititajs;
//   return;
// }

// function decrement() {
//   skaititajs--;
//   cipars.innerText = skaititajs;
//   return;
// }

let counter = 0;

function updateCounterEl() {
  let counterEl = document.querySelector("#counter");
  //   console.log(counterEl);
  counterEl.innerText = counter;
}
function increment() {
  counter++;
  updateCounterEl();
}
function decrement() {
  counter--;
  updateCounterEl();
}

updateCounterEl();
