const EXOTIC = 0, ENDEMIC = 1, MIGRATORY = 2, MIGRATORYDANGERINVASION = 3

const buttonGalery = document.getElementById('buttonGalery')
const buttonSiteMap = document.getElementById('buttonMapSite')
const exoticButton = document.getElementById('exoticButton')
const endemicButton = document.getElementById('endemicButton')
const migratoryButton = document.getElementById('migratoryButton')
const migratoryInDangerOfInvasionButton = document.getElementById('migratoryInDangerOfInvasionButton')
const graficBirds = document.getElementById('graficBirds')
const graficBirdsImg = document.getElementById('graficBirdsImg')

buttonGalery.addEventListener('click', () => window.location.href = 'http://localhost:3000/galery')

buttonSiteMap.addEventListener('click', () => window.location.href = 'http://localhost:3000/site-map')

exoticButton.addEventListener('click', () => showGrafic(EXOTIC))
endemicButton.addEventListener('click', () => showGrafic(ENDEMIC))
migratoryButton.addEventListener('click', () => showGrafic(MIGRATORY))
migratoryInDangerOfInvasionButton.addEventListener('click', () => showGrafic(MIGRATORYDANGERINVASION))

function showGrafic(graficType) {
    console.log(graficType)
    let src
    if (graficBirds.className.includes('off')) {
        graficBirds.classList.replace('off', 'on')
        src = addSrc(graficType)
    } else if(src === '') {
        src = addSrc(graficType)
    } else {
        graficBirds.className = graficBirds.className.replace('on', 'off')
        src = ''
    }

    graficBirdsImg.setAttribute("src", src)

}

function addSrc(graficType) {
    let src
    switch (graficType) {
        case EXOTIC:
            src = ''
            break;
        case ENDEMIC:
            src = ''
            break;
        case MIGRATORY:
            src = ''
            break;
        case MIGRATORYDANGERINVASION:
            src = ''
            break;
    }
    return src
}