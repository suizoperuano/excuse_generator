let who = [
  "My parents",
  "My wife",
  "The racoon from the neigborhood",
  "My dog",
  "My cat",
  "My boss",
  "Santa"
];
let action = ["destroyed", "took away", "lost", "broke", "damaged"];
let what = [
  "my homework",
  "my work computer",
  "my pencil",
  "the documentation",
  "the project"
];
let when = [
  "rigth before the class",
  "just right now",
  "after I finished",
  "when I was not looking",
  "while I was watching watching youtube"
];
function generate() {
  let text = `${randomize(who)} ${randomize(action)} ${randomize(
    what
  )} ${randomize(when)}`;
  let myH1 = document.getElementById("my-excuse");
  myH1.innerHTML = text;
}

function randomize(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.addEventListener("load", event => {
  generate();

  var select = document.getElementById("color-select");
  var selectedOption = select.options[select.selectedIndex].value;
  console.log(selectedOption);
});
