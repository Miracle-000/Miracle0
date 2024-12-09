const photo = ["media/cb1.webm","media/cb2.webm","media/cb3.webm","media/cb4.webm","media/cb5.webm","media/cb6.webm"]
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