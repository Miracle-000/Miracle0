const photo = ["media/cb1.webm","media/cb2.webm","media/cb3.webm","media/cb4.webm","media/cb5.webm","media/cb6.webm"]
iconsoc = document.getElementById('square')
const body = document.body
const gallery = document.getElementById('gallery')
let square = document.getElementById('square')
let logo= document.getElementsByClassName('logo')
let test = document.getElementsByClassName("test")
let vid = document.getElementById("video")
let noise = document.getElementById("noise")
let scrolll = document.getElementById("scrolll")
let mute=0
let soc = document.getElementsByClassName('socs')
const aphish = document.querySelector('.aphish')
let cbs = document.querySelectorAll('.cbimg')

prog = document.getElementsByClassName('prog')
const fullimg = new Image()
fullimg.src= aphish.getAttribute('data-src')
fullimg.onload = ()=>{
    aphish.src=fullimg.src
    aphish.classList.add('loaded')
}



vid.addEventListener('click', muted)


console.log(cbs)
let imgobs = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let img = entry.target
            img.src = img.dataset.src
            img.classList.add('aftersee')
            observer.unobserve(img)}})},{})


cbs.forEach(it=>{
    imgobs.observe(it)
})




function muted(){
    if ( mute==0) {
        vid.muted=""
        noise.style.backgroundImage='url("media/noize.png")'
        mute=1
    }
    else {
        vid.muted="muted"
        noise.style.backgroundImage='url("media/nonoize.png")'
        mute=0
    }
}