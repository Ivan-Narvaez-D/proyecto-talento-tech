
const buttonHome = document.getElementById('buttonHome')

const homeDropdownButton = document.getElementById('homeDropdownButton')

const galeryDropdown = document.getElementById('galeryDropdown')

buttonHome.addEventListener('click', () => window.location.href = 'http://localhost:3000/')

homeDropdownButton.addEventListener('click', () => window.open('http://127.0.0.1:8050/', '_blank'))

galeryDropdown.addEventListener('click', () => window.location.href = 'http://localhost:3000/galery')
