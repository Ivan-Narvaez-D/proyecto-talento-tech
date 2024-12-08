
const buttonHome = document.getElementById('buttonHome')

const homeDropdownButton = document.getElementById('homeDropdownButton')
const homeDropdownButtonImg = document.getElementById('homeDropdownButtonImg')
const homeDropdown = document.getElementById('homeDropdown')

const exoticBirdsDropdownButton = document.getElementById('exoticBirdsDropdownButton')
const exoticBirdsDropdownButtonImg = document.getElementById('exoticBirdsDropdownButtonImg')
const exoticBirdsDropdown = document.getElementById('exoticBirdsDropdown')

const endemicBirdsDropdownButton = document.getElementById('endemicBirdsDropdownButton')
const endemicBirdsDropdownButtonImg = document.getElementById('endemicBirdsDropdownButtonImg')
const endemicBirdsDropdown = document.getElementById('endemicBirdsDropdown')

const migratoryBirdsDropdownButton = document.getElementById('migratoryBirdsDropdownButton')
const migratoryBirdsDropdownButtonImg = document.getElementById('migratoryBirdsDropdownButtonImg')
const migratoryBirdsDropdown = document.getElementById('migratoryBirdsDropdown')

const migratoryInDangerOfInvasionDropdownButton = document.getElementById('migratoryInDangerOfInvasionDropdownButton')
const migratoryInDangerOfInvasionDropdownButtonImg = document.getElementById('migratoryInDangerOfInvasionDropdownButtonImg')
const migratoryInDangerOfInvasionDropdown = document.getElementById('migratoryInDangerOfInvasionDropdown')

const galeryDropdown = document.getElementById('galeryDropdown')

buttonHome.addEventListener('click', () => window.location.href = 'http://localhost:3000/')

homeDropdownButton.addEventListener('click', () => showDropdown(homeDropdown, homeDropdownButtonImg))
exoticBirdsDropdownButton.addEventListener('click', () => showDropdown(exoticBirdsDropdown, exoticBirdsDropdownButtonImg))
endemicBirdsDropdownButton.addEventListener('click', () => showDropdown(endemicBirdsDropdown, endemicBirdsDropdownButtonImg))
migratoryBirdsDropdownButton.addEventListener('click', () => showDropdown(migratoryBirdsDropdown, migratoryBirdsDropdownButtonImg))
migratoryInDangerOfInvasionDropdownButton.addEventListener('click', () => showDropdown(migratoryInDangerOfInvasionDropdown, migratoryInDangerOfInvasionDropdownButtonImg))

galeryDropdown.addEventListener('click', () => window.location.href = 'http://localhost:3000/galery')

function showDropdown(dropdown, dropdownIcon) {
    if(dropdown.className.includes('off')) {
        dropdownIcon.style.transform = 'rotate(90deg)'
        dropdown.className = dropdown.className.replace('off', 'on')
    } else {
        dropdownIcon.style.transform = 'rotate(0deg)'
        dropdown.className = dropdown.className.replace('on', 'off')
    }
}
