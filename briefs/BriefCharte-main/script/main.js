let togg1 = document.getElementById("togg1");
let d1 = document.getElementById("d1");
togg1.addEventListener("click", () => {
  if (getComputedStyle(d1).display != "none") {
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
});

let togg2 = document.getElementById("togg2");
let d2 = document.getElementById("d2");
togg2.addEventListener("click", () => {
  if (getComputedStyle(d2).display != "block") {
    d2.style.display = "block";
  } else {
    d2.style.display = "none";
  }
});

let togg3 = document.getElementById("togg3");
let d3 = document.getElementById("d3");
togg3.addEventListener("click", () => {
  if (getComputedStyle(d3).display != "block") {
    d3.style.display = "block";
  } else {
    d3.style.display = "none";
  }
});

let togg4 = document.getElementById("togg4");
let d4 = document.getElementById("d4");
togg4.addEventListener("click", () => {
  if (getComputedStyle(d4).display != "block") {
    d4.style.display = "block";
  } else {
    d4.style.display = "none";
  }
});
