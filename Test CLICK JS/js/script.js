const themeSwitch = document.querySelector('.switch')

const changeColor = document.querySelector('.switch--1')

const theme = document.querySelector('.light')

const greenText = document.querySelector('.container')

themeSwitch.addEventListener('click', () => {
    theme.classList.toggle('dark')
    themeSwitch.classList.toggle('is-active')
})

changeColor.addEventListener('click', () => {
    greenText.classList.toggle('green')
    changeColor.classList.toggle('is-active')
})