const all = document.querySelector(".all");
const tl = document.querySelector(".tl");
const tr = document.querySelector(".tr");
const br = document.querySelector(".br");
const bl = document.querySelector(".bl");
const bw = document.querySelector(".bw");
const bc = document.querySelector(".bc");
const bgc = document.querySelector(".bgc");
const op = document.querySelector(".op");

const start = document.querySelector(".preview_playBtn")

const block = document.querySelector(".block");
const text = document.querySelector("textarea");
const preview = document.querySelector(".preview")

// event

const changeBlockStyle = () => {
  block.style.borderRadius = `${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px`;
  block.style.border = `${bw.value}px solid ${bc.value}`;
  block.style.backgroundColor = `${bgc.value}`;
  block.style.opacity = `${op.value}`;

  text.value = `border-radius: ${tl.value}px ${tr.value}px ${br.value}px ${tl.value}px\nborder-color: ${bc.value}\nbackgroundClolor: ${bgc.value}\nopacity: ${op.value}`;
};

all.addEventListener("input", () => {
  tl.value = all.value;
  tr.value = all.value;
  br.value = all.value;
  bl.value = all.value;

  changeBlockStyle();
});

tl.addEventListener("input", () => {
  changeBlockStyle();
});

tr.addEventListener("input", () => {
  changeBlockStyle();
});

bl.addEventListener("input", () => {
  changeBlockStyle();
});

br.addEventListener("input", () => {
  changeBlockStyle();
});

bw.addEventListener("input", () => {
  changeBlockStyle();
});

bc.addEventListener("input", () => {
  changeBlockStyle();
});

bgc.addEventListener("input", () => {
  changeBlockStyle();
});

op.addEventListener("input", () => {
  changeBlockStyle();
});

start.addEventListener("mousedown", () => {
  preview.style.display = "none"
})