const photo = ["media/photo1.jpg","media/photo2.jpg","media/photo3.jpg","media/photo4.jpg","media/photo5.jpg"]
iconsoc = document.getElementById('square')
const body = document.body
const gallery = document.getElementById('gallery')
let square = document.getElementById('square')
let logo= document.getElementsByClassName('logo')
let test = document.getElementsByClassName("test")
let vid = document.getElementById("video")
let mute=0
let soc = document.getElementsByClassName('socs')


vid.addEventListener('click', muted)

soc[0].onclick=e=> {
    soc[0].style.animation='sc .5s linear'
    setTimeout(soc[0].style.animation='none',500)
}




        



for (i of [0,1,2,3,4]) {
    gallery.innerHTML += `<div class ="photo photo-${i}"></div`
    document.getElementsByClassName(`photo-${i}`)[0].style.backgroundImage=`url(${photo[i]})`
    document.getElementsByClassName(`photo-${i}`)[0].innerHTML+= "<div class='move back'></div'"
    document.getElementsByClassName(`photo-${i}`)[0].innerHTML+= "<div class='move rrok'></div'"
}

function checkgal() {
    if (body.scrollTop+body.clientHeight-100 >= gallery.scrollTop) {
        scrolll()
    }
}


function muted(){
    if ( mute==0) {
        vid.muted="muted"
        mute=1
    }
    else {
        vid.muted=""
        mute=0
    }
}