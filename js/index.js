// Your code goes here
// ---- mouseover
// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick

// Create a function called 'get'
// that takes a CSS selector as its argument
// and executes document.querySelector with the argument.
const get = (selector) => {
    return document.querySelector(selector)
}

const getAll = (selector) => {
    return document.querySelectorAll(selector)
}

// use 'get' function to retrieve specific elements
const mainNav = get('.main-navigation')
const navLink = get('.nav-link')
const logo = get('.logo-heading')

const intro = get('.intro')
const contentSection = get('.content-section')
const destination = get('.destination')

const buttons = getAll('.btn') 
console.log(buttons)

const footer = get('.footer')


function changeNavColor(event) {
    console.log('You are mousing over the navigation!')
    event.target.style.backgroundColor = 'red'
}
mainNav.addEventListener('mouseover', changeNavColor)

function yellowBtnColor(event) {
    console.log('You are changing button color')
    event.target.style.backgroundColor = 'yellow'
    event.target.children.style.color = 'black'
}

function blackText(event) {
    console.log('You are changing button text')
    event.target.style.color = 'black'
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', yellowBtnColor)
    buttons[i].addEventListener('click', blackText)
}

function logoHover(event){
    event.target.style.color = "blue"
}

function logoLeave(event) {
    event.target.style.color = "black"
}

logo.addEventListener("mouseover", logoHover)
logo.addEventListener("mouseleave", logoLeave)
