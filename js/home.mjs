let i = 0;
const homeText =
  "I believe in sharing experiences. Every day, we learn something new, and our knowledge is valuable enough to discuss and share with others. Everyone is a teacher to everyone else. That the little things lead to the big things.";

let speed = 50;
const textcon = document.getElementById("typingEffect");
textcon.classList.add("p-active");
function typingEffect() {
  if (i < homeText.length) {
    document.getElementById("typingEffect").innerHTML += homeText.charAt(i);
    i++;
    setTimeout(typingEffect, speed);
  }
}
window.addEventListener("load", () => {
  typingEffect();
});
