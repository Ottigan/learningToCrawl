`use strict`;

const dc = document.querySelector("#dc"),
  tracking = document.querySelector("#tracking"),
  newProduct = document.querySelector("#new-product"),
  body = document.querySelector("body");

body.onload = function () {
  let dcUri = dc.href;
  let trackingUri = tracking.href;
  let newProductUri = newProduct.href;
  let current = window.location.href;

  if (dcUri == current) {
    dc.classList.add("location");
    // If COOKIES added
    // tracking.classList.remove("location");
    // newProduct.classList.remove("location");
  } else if (trackingUri == current) {
    tracking.classList.add("location");
    // If COOKIES added
    // dc.classList.remove("location");
    // newProduct.classList.remove("location");
  } else if (newProductUri == current) {
    newProduct.classList.add("location");
    // If COOKIES added
    // dc.classList.remove("location");
    // tracking.classList.remove("location");
  }
};
