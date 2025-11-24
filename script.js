let main = document.querySelector("main");
let btn = document.querySelector("button");
let reload = document.querySelector("#reload");
let arr = [
  "Hello, World!",
  "Access Denied.",
  "404: Brain Not Found.",
  "Code, Sleep, Repeat.",
  "It works on my machine.",
  "console('Danger!');",
  "Ship it!",
];

btn.addEventListener("click", function () {
  let x = Math.random() * 80;
  let y = Math.random() * 80;
  let rot = Math.random() * 360;
  let scl = Math.random() * 3;
  let r = Math.random() * 256;
  let g = Math.random() * 256;
  let b = Math.random() * 256;

  var h1 = document.createElement("h1");
  let idx = Math.floor(Math.random() * arr.length);
  h1.innerHTML = arr[idx];
  h1.style.position = "absolute";
  h1.style.top = x + "%";
  h1.style.left = y + "%";
  h1.style.rotate = rot + "deg";
  h1.style.scale = scl;
  h1.style.color = `rgb(${r}, ${g}, ${b})`;

  main.appendChild(h1);
});

reload.addEventListner('click', () => {
  window.location.reload();
})
