// Variable
var sound = document.getElementById("music");
var nbr = document.getElementById("music-nbr");
var btn = document.getElementById("btn");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var soundArray = [
    {
        music: "sounds/say-so.mp3",
        img: 'images/say-so.png',
        title: "Say So",
    },
    {
        music: "sounds/kiss-me.mp3",
        img: 'images/kiss-me.jpg',
        title: "Kiss Me",
    },
    {
        music: "sounds/streets.mp3",
        img: 'images/streets.jpg',
        title: "Streets",
    }

];
var i = 0;

// Play And Pause Music Button
btn.addEventListener("click", (event) => {
    if(sound.paused){
        sound.play();
        btn.className = "fas fa-pause";
    } else {
        sound.pause();
        btn.className = "fas fa-play";
    }
})

// Next Sound
next.addEventListener("click", (event) => {
    sound.src = soundArray[i].music;
    btn.className = "fas fa-pause";
    sound.play();
    document.getElementById("title").innerHTML = soundArray[i].title;
    document.getElementById("img").src = soundArray[i].img;
    
    if(i < soundArray.length-1){
        i++;
    } else {
        i = 0; 
    }
})

// Previous Sound
prev.addEventListener("click", (event) => {
    sound.src = soundArray[i].music;
    btn.className = "fas fa-pause";
    sound.play();
    document.getElementById("title").innerHTML = soundArray[i].title;
    document.getElementById("img").src = soundArray[i].img;
    if(i > 0){
        i--;
    } else{
        i = soundArray.length-1
    }
})