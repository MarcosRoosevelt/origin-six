// icons
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) { //searching elements 
  element.addEventListener('click', function() {
    nav.classList.toggle('show') //add class show
  })
}

//choosing any option in the menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show') //removing the class show
  })  
}

