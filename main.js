const photo = ["media/cb1.mp4","media/cb2.mp4","media/cb3.mp4","media/cb4.mp4","media/cb5.mp4","media/cb6.mp4"]
iconsoc = document.getElementById('square')
const body = document.body
const gallery = document.getElementById('gallery')
let square = document.getElementById('square')
let logo= document.getElementsByClassName('logo')
let test = document.getElementsByClassName("test")
let vid = document.getElementById("video")
let mute=0
let soc = document.getElementsByClassName('socs')


window.addEventListener('scroll',e=>{
    document.body.style.cssText = `--scrollTop:${this.scrollY}px`
})


vid.addEventListener('click', muted)

soc[0].onclick=e=> {
    soc[0].style.animation='sc .5s linear'
    setTimeout(soc[0].style.animation='none',500)
}




        



for (let i =0; i<photo.length;i++) {
    gallery.innerHTML += `<div class ="photo photo-${i}"></div`
    if ('4'in photo[i].split('')) {

        document.getElementsByClassName(`photo-${i}`)[0].innerHTML = `<video class ="cbvid" src="${photo[i]}" autoplay muted loop></video>`
    }
    else {
        document.getElementsByClassName(`photo-${i}`)[0].style.backgroundImage=`url(${photo[i]})`
    }

}



function muted(){
    if ( mute==0) {
        vid.muted=""
        mute=1
    }
    else {
        vid.muted="muted"
        mute=0
    }
}