
import galleryItems from "./app.js"

const gallery = document.querySelector(".js-gallery")

galleryItems.forEach((item, index) => {
    const createItem = document.createElement("li")
    createItem.innerHTML = `<img class='gallery__item gallery__image' src='${item.preview}' alt='${item.description}' />`
    gallery.append(createItem)
})

gallery.addEventListener("click", selectPicture)

const modalWindow = document.querySelector(".js-lightbox")
const closeModalWindowButton = document.querySelector(".lightbox__button")
const modalImage = document.querySelector(".lightbox__image")

closeModalWindowButton.addEventListener("click", closeModalWindow)


function selectPicture(event) {
    
    const currentIMage = galleryItems.find(item => item.description === event.target.alt)   
    modalImage.src = `${currentIMage.original}`
    modalWindow.classList.toggle("is-open")
    
}


function closeModalWindow() {
    modalWindow.classList.remove("is-open")    
    modalImage.src = ""
}
        
        




