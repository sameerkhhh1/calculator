let remove = document.querySelector("#delete");
remove.addEventListener("click", () => {
  show.innerText = show.innerText.slice(0, -1);
});
let seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
  show.innerText += seven.value;
});
let eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
  show.innerText += eight.value;
});
let nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
  show.innerText += nine.value;
});
let four = document.querySelector("#four");
four.addEventListener("click", () => {
  show.innerText += four.value;
});
let five = document.querySelector("#five");
five.addEventListener("click", () => {
  show.innerText += five.value;
});
let six = document.querySelector("#six");
six.addEventListener("click", () => {
  show.innerText += six.value;
});

let one = document.querySelector("#one");
one.addEventListener("click", () => {
  show.innerText += one.value;
});
let two = document.querySelector("#two");
two.addEventListener("click", () => {
  show.innerText += two.value;
});
let three = document.querySelector("#three");
three.addEventListener("click", () => {
  show.innerText += three.value;
});
let zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
  show.innerText += zero.value;
});
let dot = document.querySelector("#dot");
dot.addEventListener("click", () => {
  show.innerText += dot.value;
});

let divide = document.querySelector("#divide");
divide.addEventListener("click", () => {
  show.innerText += divide.value;
});
let percent = document.querySelector("#percent");
percent.addEventListener("click", () => {
  show.innerText += percent.value;
});
let plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
  show.innerText += plus.value;
});

let sub = document.querySelector("#sub");
sub.addEventListener("click", () => {
  show.innerText += sub.value;
});
let mul = document.querySelector("#mul");
mul.addEventListener("click", () => {
  show.innerText += mul.value;
});
let show = document.querySelector("#span");

let all = document.querySelector("#all");
all.addEventListener("click", () => {
  show.innerText = "";
});

let equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  console.log(show.innerText);
  console.log(eval(show.innerText));
  show.innerText = eval(show.innerText);
});
