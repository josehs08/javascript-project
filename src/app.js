/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  let excusa =
    who[Math.floor(Math.random() * 3) + 1] +
    " " +
    action[Math.floor(Math.random() * 3) + 1] +
    " " +
    what[Math.floor(Math.random() * 2) + 1] +
    " " +
    when[Math.floor(Math.random() * 3) + 1];
  document.getElementById("excuse").innerHTML = excusa;
  return excusa;
};
