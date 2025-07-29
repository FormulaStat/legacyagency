const text = "Helping you claim what you deserve.";
let index = 0;
const speed = 80;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = () => {
  typeEffect();
};
