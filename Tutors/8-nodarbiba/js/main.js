"use strict";

// console.log(document.documentElement);
console.log(document.body);

console.log("-------------");

for (let node of document.body.childNodes) {
  //   console.log(node);
  if (node.nodeName == "UL") {
    //  console.log(node.childNodes);
  }
}

console.log("-------------");

// console.log(document.body.childNodes[7]);
// console.log(document.body.childNodes[7].childNodes[3]);

// console.log(document.body.childNodes[7].childNodes[3].nextSibling.nextSibling);

// let header = document.getElementsByTagName("h1");
let header = document.getElementById("vv");
header.innerHTML = "<span>Jaunais teksts</span>";
// header.innerText = "<span>Jaunais teksts</span>";

// DARBS AR STILIEM

let element = document.querySelector("h1");
console.log(element);
element.style.fontSize = "5em";
element.style.color = "red";

let elements = document.querySelectorAll("ul li");

for (let elem of elements) {
  console.log(elem);
  elem.style.color = "#0c0";
}

let par = document.querySelector("p");
par.style.fontStyle = "italic";

function hide() {
  let opacity = Number(document.body.style.opacity);
  opacity -= 0.01;
  if (opacity <= 0) opacity = 0;

  document.body.style.opacity = opacity;
  console.log(opacity);
  if (opacity > 0) setTimeout(hide, 10);
}

document.body.style.opacity = 1;
// hide();

// DARBS AR ATRIBŪTIEM

console.log(element.hasAttribute("id")); // pārbaudīt vai tāds atr ir elementam
console.log(element.getAttribute("id")); // iegūt atr vērtību
element.setAttribute("data-id", "h155"); // Nomainīt / izveidot atr vērtību
element.removeAttribute("id"); // dzēšam atr

let atrEl = document.querySelectorAll("a");
for (let a of atrEl) {
  a.setAttribute("target", "_blank");
}

// PIEVIENOT / DZĒST ELEMENTUS
let cont = document.querySelector(".container");
let p = document.createElement("p");

p.innerHTML = "Jauns paragrāfs izveidots ar <b>JS</b>";
cont.append(p); // Beigās
cont.prepend(p); // Sākumā

let ulSaraksts = document.querySelector(".ulSaraksts");
ulSaraksts.insertAdjacentHTML("beforebegin", "<p>Paragrāfs pirms UL</p>");
ulSaraksts.insertAdjacentHTML("afterbegin", "<li>LI pēc UL</li>");
ulSaraksts.insertAdjacentHTML("afterend", "<p>Paragrāfs pēc UL</p>");
ulSaraksts.insertAdjacentHTML("beforeend", "<li>LI pēdējais</li>");

let removeLi = document.querySelector("a").remove(); // Dzēst

let ul = document.querySelector("ul").cloneNode(true);

cont.append(ul);
