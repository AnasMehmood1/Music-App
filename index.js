let song = document.querySelector(".song")
let progress = document.querySelector(".progress")
let control = document.querySelector(".control")

song.onloadedmetadata = function(){
   progress.max = song.duration;
   progress.value = song.currentTime;
}
function playpause(){
     if(control.classList.contains("fa-pause")){
        song.pause()
        control.classList.remove("fa-pause")
        control.classList.add("fa-play")
     }
     else if(song.play()){
        setInterval(() => {

            progress.value = song.currentTime
      
        }, 200);
        control.classList.add("fa-pause")
        control.classList.remove("fa-play")
     }
}

progress.onchange = function(){
    song.play()
    song.currentTime = progress.value
}
function backward(){
    song.currentTime -=2
}
function forward(){
    song.currentTime +=2
}