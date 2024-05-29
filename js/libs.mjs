let i = 0;
const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, magnam?!';
let speed = 50;

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