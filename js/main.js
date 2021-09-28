// Variable
var sound = document.getElementById("music");
var btn = document.getElementById("btn");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var image = document.getElementById("img");

fetch("js/sounds.json").then((response) => {
    return response.json();
}).then((data) => {
    var index = 0;

    function showSong(data) {
        title.innerHTML = data.title;
        sound.src = data.sound;
        image.src = data.img;
    }

    showSong(data[index]);

    next.addEventListener("click", () => {
        if (index === data.length - 1) {
            index = 0;
            showSong(data[index]);
            sound.play();
            btn.className = "bx bx-pause";
        } else {
            index++;
            showSong(data[index]);
            sound.play();
            btn.className = "bx bx-pause";
        }
    })

    prev.addEventListener("click", () => {
        if(index === 0) {
            index = data.length - 1;
            showSong(data[index]);
            sound.play();
            btn.className = "bx bx-pause";
        } else {
            index--;
            showSong(data[index]);
            sound.play();
            btn.className = "bx bx-pause";
        }
    })

    // Play And Pause Music Button
    btn.addEventListener("click", () => {
        if(sound.paused){
            sound.play();
            btn.className = "bx bx-pause";
        } else {
            sound.pause();
            btn.className = "bx bx-play";
        }
    })
}) 