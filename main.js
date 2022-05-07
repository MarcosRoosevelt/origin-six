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

// scroll header

const header = document.querySelector("#header")
const navHeight = header.offsetHeight // height shift

function changeHeaderWhenScroll() {

  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

//testimonials carousel/slider swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    1200: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
})

//scroll reveal

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
  `, 

  { interval: 100 }
)

// back to top button

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {

  if (window.scrollY >= 700) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//active menu according to page section

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection () {
  
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 //deslocamento Y da página 

  for ( const section of sections ) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionID = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul li a[href*=' + sectionID + ']')
      .classList.add('active')
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionID + ']')
      .classList.remove('active')
    }

  }

}

// Scroll
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection ()
})