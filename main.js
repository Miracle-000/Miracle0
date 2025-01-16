iconsoc = document.getElementById('square')
const body = document.body
const gallery = document.getElementById('gallery')
let square = document.getElementById('square')
let logo = document.getElementsByClassName('logo')
let test = document.getElementsByClassName("test")
let vid = document.getElementById("video")
let noise = document.getElementById("noise")
let scrolll = document.getElementById("scrolll")
let soc = document.getElementsByClassName('socs')
let cbs = document.querySelectorAll('.cbimg')
let imgprog = document.getElementsByClassName('imgprog')
let cbimg = document.getElementsByClassName('cbimg')

let fullimgs = document.getElementById('fullimgs')
let fw = document.getElementById('fw')
let closee = document.getElementById('close')
let box = document.getElementById('box')

let mute = 0


for (let o = 0; o < imgprog.length; o++) {
    imgprog[o].onclick = () => {
        fw.style.display = 'flex'
        fw.style.top = body.scrollTop + 'px'
        body.style.overflow = 'hidden'
        box.innerHTML = `<img src="${imgprog[o].src}" alt="picture">`
    }
}

for (let o = 0; o < cbimg.length; o++) {
    cbimg[o].onclick = () => {
        fw.style.display = 'flex'
        fw.style.top = body.scrollTop + 'px'
        body.style.overflow = 'hidden'
        if (cbimg[o].src.includes(".jpg")) {
            box.innerHTML = `<img src="${cbimg[o].src}" alt="picture">`
        } else if (cbimg[o].src.includes(".mp4")) {
            box.innerHTML = ` <video src="${cbimg[o].src}" autoplay loop muted></video>`
        }

    }
}


closee.addEventListener('click', q => {
    fw.style.display = 'none'
    body.style.overflow = 'auto'
})


let bg = new Image()
bg.src = "/media/bg.avif"

bg.onload = () => {
    document.body.style.background = 'url("/media/bg.avif")'
}











prog = document.getElementsByClassName('prog')




vid.addEventListener('click', muted)


let imgobs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let img = entry.target
            img.src = img.dataset.src
            img.classList.add('aftersee')
            observer.unobserve(img)
        }
    })
}, {})


cbs.forEach(it => {
    imgobs.observe(it)
})


noise.style.backgroundImage = 'url("media/nonoize.svg")'

function muted() {
    if (mute == 0) {
        vid.muted = ""
        noise.style.backgroundImage = 'url("media/noize.svg")'
        mute = 1
    } else {
        vid.muted = "muted"
        noise.style.backgroundImage = 'url("media/nonoize.svg")'
        mute = 0
    }
}