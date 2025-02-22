import '../scss/style.scss'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      modules: [Navigation, Pagination],

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })
  }
})
function show() {
  document.querySelector('.swiper').style.height = 'auto'
  document.querySelector('.show').style.display = 'none'
  document.querySelector('.hide').style.display = 'flex'
}
let buttonShow = document.querySelector('.show')
buttonShow.addEventListener('click', show)
function hide() {
  document.querySelector('.swiper').style.height = '185px'
  document.querySelector('.show').style.display = 'flex'
  document.querySelector('.hide').style.display = 'none'
}

let buttonHide = document.querySelector('.hide')
buttonHide.addEventListener('click', hide)

function show2() {
  document.querySelector('.swiper2').style.height = 'auto'
  document.querySelector('.show2').style.display = 'none'
  document.querySelector('.hide2').style.display = 'flex'
}
let buttonShow2 = document.querySelector('.show2')
buttonShow2.addEventListener('click', show2)
function hide2() {
  document.querySelector('.swiper2').style.height = '185px'
  document.querySelector('.show2').style.display = 'flex'
  document.querySelector('.hide2').style.display = 'none'
}

let buttonHide2 = document.querySelector('.hide2')
buttonHide2.addEventListener('click', hide2)

function showMenu() {
  document.querySelector('.left').style.display = 'block'
  document.querySelector('.menu-cover').style.display = 'block'
}
let showMenuButton = document.querySelector('.show-menu')
showMenuButton.addEventListener('click', showMenu)

function closeMenu() {
  document.querySelector('.left').style.display = 'none'
  document.querySelector('.menu-cover').style.display = 'none'
}
let closeMenuButton = document.querySelector('.close-menu')
let closeMenuArea = document.querySelector('.menu-cover')
closeMenuButton.addEventListener('click', closeMenu)
closeMenuArea.addEventListener('click', closeMenu)

function openMailMenu() {
  document.querySelector('.menu-form').style.display = 'block'
  document.querySelector('.menu-cover').style.display = 'block'
  document.querySelector('.main-menu').style.zIndex = '1'
}

let openMail = document.querySelector('.icons--open-mail')
openMail.addEventListener('click', openMailMenu)

function closeMailMenu() {
  document.querySelector('.menu-form').style.display = 'none'
  document.querySelector('.menu-cover').style.display = 'none'
  document.querySelector('.main-menu').style.zIndex = '3'
}

let closeMail = document.querySelector('.close-mail')
closeMail.addEventListener('click', closeMailMenu)

function openPhoneMenu() {
  document.querySelector('.menu-form-phone').style.display = 'block'
  document.querySelector('.menu-cover').style.display = 'block'
  document.querySelector('.main-menu').style.zIndex = '1'
}

let openPhone = document.querySelector('.icons--open-phone')
openPhone.addEventListener('click', openPhoneMenu)

function closePhoneMenu() {
  document.querySelector('.menu-form-phone').style.display = 'none'
  document.querySelector('.menu-cover').style.display = 'none'
  document.querySelector('.main-menu').style.zIndex = '3'
}

let closePhone = document.querySelector('.close-phone')
closePhone.addEventListener('click', closePhoneMenu)
