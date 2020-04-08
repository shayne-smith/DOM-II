// Your code goes here
// ---- mouseover
// ---- mousedown
// ---- keydown **** Come back to this one and improve
// ---- wheel
// drag / drop
// ---- load
// focus
// ---- resize
// scroll
// select
// ---- dblclick
// ---- mouseleave
// ---- keyup
// ---- click


// Create a function called 'get'
// that takes a CSS selector as its argument
// and executes document.querySelector with the argument.
const get = (selector) => {
    return document.querySelector(selector)
}

const getAll = (selector) => {
    return document.querySelectorAll(selector)
}

// ============= CREATE VARIABLES TO STORE ELEMENTS ===========
// use 'get' function to retrieve specific elements
const body = get('body')

const mainNav = get('.main-navigation')
const navLink = getAll('.nav-link')
const logo = get('.logo-heading')

const intro = get('.intro')
const headerImg = get('.intro img')
const contentSection = get('.content-section')
const destinationText = getAll('.destination')

let onOff = 0 // create on/off state for image flipping

let scale = 0.5
const adventureImg = get('.img-content img')

const buttons = getAll('.btn') // creates a buttons array
const footer = get('.footer')


// ================= FUNCTION DECLARATIONS ==================
function red(event) {
    console.log('You are mousing over something!')
    event.target.style.backgroundColor = 'red'
}
function white(event) {
    console.log('You are leaving something!')
    event.target.style.backgroundColor = 'white'
}
function yellow(event) {
    console.log('You are changing button color')
    event.target.style.backgroundColor = 'yellow'
}
function blackText(event) {
    console.log('You are changing button text')
    event.target.style.color = 'black'
}
function whiteText(event) {
    console.log('You are changing text color to white')
    event.target.style.color = 'white'
}
function logoHover(event){
    event.target.style.color = 'blue'
}
function logoLeave(event) {
    event.target.style.color = 'black'
}
function dimming(event) {
    if (event.key === 'ArrowDown'){
        console.log('You are hitting down arrow')
        event.target.style.opacity = 0.5
    }
}
function brightening(event) {
    if (event.key === 'ArrowUp'){
        console.log('You are hitting the up arrow :)')
        event.target.style.opacity = 1
    }
}
function flipImg(event) {
    console.log('You are flipping an image :)')
    if (onOff === 0){
        event.target.style.transform = 'scaleX(-1)'
        onOff = 1
    } else if (onOff === 1){
        event.target.style.transform = 'scaleX(1)'
        onOff = 0
    }
}
function popup(event) {
    window.alert('You are resizing the webpage!')
}
function popupLoad(event) {
    window.alert('The webpage is finished loading! :)')
}
function zoom(event) {
    event.preventDefault()

    scale += event.deltaY * 0.0005
    debugger

    // Apply scale transform
    event.target.style.transform = `scale(${scale})`
}
function redBorder(event){
    event.target.style.border = '5px dashed red'
}

// ================== ADD EVENT LISTENERS ======================
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('dblclick', yellow)
    buttons[i].addEventListener('dblclick', blackText)
}

// add event listener to navigation to turn it red when moused over
mainNav.addEventListener('mouseover', red) 

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('mouseover', white)
    navLink[i].addEventListener('mouseleave', yellow)
}

// add event listener 
logo.addEventListener('mouseover', logoHover)
logo.addEventListener('mouseleave', logoLeave)

body.addEventListener('keydown', dimming)
body.addEventListener('keyup', brightening)
window.addEventListener('load', popupLoad)


headerImg.addEventListener('click', flipImg)
window.addEventListener('resize', popup)

// look over this tomorrow to understand better
adventureImg.addEventListener('wheel', zoom)

for (let i = 0; i < destinationText.length; i++){
    destinationText[i].addEventListener('mousedown', red)
}

