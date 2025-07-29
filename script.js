const typingElement = document.getElementById('typing');
const phrases = [
  "We help you access real benefits...",
  "Fast. Smart. Stress-free.",
  "Your future is our priority."
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function type() {
  const phrase = phrases[currentPhrase];
  const displayText = phrase.substring(0, currentChar);
  typingElement.innerHTML = displayText;

  if (!isDeleting && currentChar < phrase.length) {
    currentChar++;
    setTimeout(type, 100);
  } else if (isDeleting && currentChar > 0) {
    currentChar--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", type);
