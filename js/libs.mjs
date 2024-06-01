let i = 0;
const text = 'I believe in sharing experiences. Every day, we learn something new, and our knowledge is valuable enough to discuss and share with others. Everyone is a teacher to everyone else. That the little things lead to the big things.';
let speed = 50;
const textcon = document.getElementById('typingEffect');
textcon.classList.add('p-active')

function navResponsive(){
    const navBar = document.querySelector(".navigation");
      navBar.classList.toggle("active")
  }

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typingEffect").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, speed);
  }
}
window.addEventListener('load',() =>{
  typingEffect()
})