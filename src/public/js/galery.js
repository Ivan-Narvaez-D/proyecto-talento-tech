

const buttonHome = document.getElementById('buttonHome')

buttonHome.addEventListener('click', () => window.location.href = 'http://localhost:3000/')

function showBirdView(especie) {
    console.log(especie)
    window.location.href = `http://localhost:3000/galery/${especie}`
}