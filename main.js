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


vid.addEventListener('click', muted)







for (let i =0; i<photo.length;i++) {

    gallery.innerHTML += `<div class ="photo photo-${i}"></div`
    document.getElementsByClassName(`photo-${i}`)[0].innerHTML = `<video class ="cbvid" src="${photo[i]}" autoplay muted loop></video>`
    

}



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