const photo = ["media/photo1.jpg","media/photo2.jpg","media/photo3.jpg","media/photo4.jpg","media/photo5.jpg"]
iconsoc = document.getElementById('square')
const body = document.body
const gallery = document.getElementById('gallery')
let square = document.getElementById('square')
let logo= document.getElementsByClassName('logo')
let test = document.getElementsByClassName("test")


for (i of [0,1,2,3,4]) {
    gallery.innerHTML += `<div class ="photo photo-${i}"></div`
    document.getElementsByClassName(`photo-${i}`)[0].style.backgroundImage=`url(${photo[i]})`
    document.getElementsByClassName(`photo-${i}`)[0].innerHTML+= "<div class='move back'></div'"
    document.getElementsByClassName(`photo-${i}`)[0].innerHTML+= "<div class='move rrok'></div'"
}

function checkgal() {
    console.log(body.scrollTop+body.clientHeight,gallery.offsetTop)
    if (body.scrollTop+body.clientHeight-100 >= gallery.scrollTop) {
        scrolll()
    }
}
