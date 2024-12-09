
const buttonGalery = document.getElementById('buttonGalery')
const buttonSiteMap = document.getElementById('buttonMapSite')
const graficBirds = document.getElementById('graficBirds')

buttonGalery.addEventListener('click', () => window.location.href = 'http://localhost:3000/galery')

buttonSiteMap.addEventListener('click', () => window.location.href = 'http://localhost:3000/site-map')

graficBirds.addEventListener('click', () => window.open('http://127.0.0.1:8050/', '_blank'))
