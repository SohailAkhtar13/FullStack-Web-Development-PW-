const button = document.getElementById("button");
const randomColor = () => {
  let val = "0123456789ABCDEF";
  let cons = "#";
  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};

function changeBackgroundColor() {
  document.body.style.backgroundColor = randomColor();
}
button.addEventListener("click", changeBackgroundColor);
