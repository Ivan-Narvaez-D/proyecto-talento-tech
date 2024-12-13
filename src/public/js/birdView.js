
const closeDialogButton = document.getElementById("closeDialog");
const dialog = document.getElementById("dialog");
const modalImage = document.getElementById("modalImage");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const buttonHome = document.getElementById('buttonHome')

buttonHome.addEventListener('click', () => window.location.href = 'http://localhost:3000/')

function openModal(src) {
    dialog.style.display = "flex"
    updateImage(src);
}

closeDialogButton.onclick = function() {
    dialog.style.display = "none"
}

function prevImg(imgs) {
    const arrayImg = JSON.parse(imgs)
    let imgIndex = arrayImg.findIndex(element => element === modalImage.getAttribute("src"))
    let prevImg = (imgIndex === 0) ? arrayImg[arrayImg.length - 1] : arrayImg[imgIndex - 1]
    updateImage(prevImg);

}

function nextImg(imgs) {
    const arrayImg = JSON.parse(imgs)
    let imgIndex = arrayImg.findIndex(element => element === modalImage.getAttribute("src"))
    let nextImg = (imgIndex === arrayImg.length - 1) ? arrayImg[0] : arrayImg[imgIndex + 1]
    updateImage(nextImg)
}

function updateImage(src) {
    modalImage.setAttribute("src",src)
}

window.onclick = function(event) {
    if (event.target === dialog) {
        dialog.style.display = "none"
    }
}