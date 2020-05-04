`use strict`;

// function buyMilk(money) {
//   let milkPrice = 1.14;
//   console.log(`Aizej uz tuvako veikalu!`);
//   console.log(`Atrodi pienu`);

//   if (money >= milkPrice) {
//     console.log(`Nopirkt pienu`);
//     console.log(`Atnest uz majam`);
//   } else {
//     console.log(`Nepietiek naudas`);
//     console.log(`Ejam pec naudas`);
//   }
// }

// buyMilk(1);
// console.log(`=============`);
// buyMilk(5);

function summa(a, b) {
  let sum = a + b;
  console.log(sum);
}

summa(2, 4, 10);

// function summa2() {
//   let sum = arguments[0] + arguments[1];
//   console.log(sum);
// }

// summa2(3, 7);

// function foo() {
//   console.log(this === undefined);
// }

// foo();

// let func;
// let x = +prompt(`ievadiet skaitli`);
// //x = Number(x);
// if (x < 0)
//   func = function () {
//     console.log(`skaitlis ir negativs`);
//   };
// else if (x == 0)
//   func = function () {
//     console.log(`Ievadita 0`);
//   };
// else
//   func = function () {
//     console.log(`Skaitlis ir pozitivs`);
//   };

// func(); //funkcijas tips?

let h = function () {
  console.log(`Work, pleaaaase!`);
};

h();

//Arrow function

function summa3(a, b, c) {
  return a + b + c;
}

let str2 = (a, b, c) => a + b + c; //same as previous example

console.log(summa3(1, 2, 3));
console.log(str2(1, 2, 3));

let div = (x, y) => {
  if (y == 0) return false;
  return x / y;
};

console.log(div(3, 6));

//ARRAYS jeb Masivi

let name = [];
name = [`Maris`, `Ilze`, 99, true, null];

console.log(name);
console.log(name[1]);
console.log(name[1].toUpperCase());

name[1] = `Karlis`;
console.log(name);
name.push(`Julija`);

let myMoney = [1, 0.5, 2, 10, 1.13];

function buyMilk(money) {
  let milkPrice = 1.14;

  for (let i = 0; i < myMoney.length; i++) {
    money = myMoney[i];
    console.log(`Aizej uz tuvako veikalu!`);
    console.log(`Atrodi pienu`);
    console.log(`Piena cena ${milkPrice} man ir ${money}`);

    if (money >= milkPrice) {
      console.log(`Nopirkt pienu`);
      console.log(`Atnest uz majam`);
      break;
    } else {
      console.log(`Nepietiek naudas`);
      console.log(`Ejam pec naudas`);
    }
    console.log(`===================`);
  }
}

buyMilk(myMoney); //defaults to index - 0 if it is the vanilla version

function printArray(arr) {
  console.log(`Array length is ${arr.length}`);
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }

  //iedod indexu || for each in C#
  // for (let i in arr) {
  //   console.log(arr[i]);
  // }

  //Iedod pasu vertibu
  for (let i of arr) {
    console.log([i]);
  }
}

printArray(name);

function videjaVertiba(arr) {
  let sum = 0;
  for (let elem of arr) sum += elem;
  return sum / arr.length;
}

console.log(`Masiva [] videja vertiba ir - ${videjaVertiba([10, 5, 15])}`);

function maxVertiba(arr) {
  let max = arr[0];
  for (let i of arr) {
    if (i > max) max = i;
  }
  return max;
}

console.log(`Masiva [10,5,15] max vertiba ir ${maxVertiba([10, 5, 15, 20])}`);

let arr = [
  [1, 2, 3],
  [4, 5],
];

console.log(arr);

console.log(arr[0][2]);

for (let row in arr) {
  for (let col in arr[row]) {
    console.log(`ELementa ar indeksu ${row},${col} vertiba = ${arr[row][col]}`);
  }
}

let person = {
  firstName: `Janis`,
  surname: `Malcans`,
  age: 29,
  hobbies: [`foto`, ` gaming`, ` coding`],
  persHobiji: function () {
    return this.firstName + ` hobiji ir ` + this.hobbies;
  },
  family: {
    brali: [
      {
        firstName: `Karlis`,
        age: 60,
      },
      {
        firstName: `Uldis`,
        age: 15,
      },
    ],
    masas: {
      firstName: `Linda`,
      surname: `Cilne`,
      age: 19,
    },
  },
};

console.log(person);
console.log(person.family.masas.firstName);
console.log(person.persHobiji());

// let cipars = document.getElementById(`counter`);
// let skaititajs = 0;

// function increment() {
//   skaititajs++;
//   cipars.innerHTML = skaititajs;
//   return;
// }

// function decrement() {
//   skaititajs--;
//   cipars.innerHTML = skaititajs;
//   return;
// }

let counter = 0;
function updateCounterEl() {
  let counterEl = document.querySelector(`#counter`);
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
