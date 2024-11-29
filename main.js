const photo = ["media/photo1.jpg","media/photo2.jpg","media/photo3.jpg","media/photo4.jpg","media/photo5.jpg"]
iconsoc = document.getElementById('square')
const body = document.body
const gallery = document.getElementById('gallery')
let square = document.getElementById('square')
let logo= document.getElementsByClassName('logo')
let test = document.getElementsByClassName("test")
body.addEventListener('scroll',checkgal)


for (i of [0,1,2,3,4]) {
    gallery.innerHTML += `<div class ="photo photo-${i}"></div`
    document.getElementsByClassName(`photo-${i}`)[0].style.backgroundImage=`url(${photo[i]})`
}

function checkgal() {
    console.log(body.scrollTop+body.clientHeight,gallery.offsetTop)
    if (body.scrollTop+body.clientHeight-100 >= gallery.scrollTop) {
        scrolll()
    }
}

function scrolll() {
    let scr = setInterval(gallery.scrollBy({top:0,left:gallery.clientWidth/1.5,behavior:"smooth"}),10000)
}
