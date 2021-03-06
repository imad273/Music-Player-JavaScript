// Variables
let sound = document.getElementById("music");
let playbtn = document.getElementById("btn");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let image = document.getElementById("img");

fetch("js/sounds.json").then((response) => {
    return response.json();
}).then((data) => {
    var index = 0;

    // Show The Song
    function showSong(data) {
        title.innerHTML = data.title;
        sound.src = data.sound;
        image.src = data.img;
    }

    showSong(data[index]);

    // Next Sound Function
    next.addEventListener('click', () => {
        if (index === data.length - 1) {
            index = 0;
            showSong(data[index]);
            sound.play();
            playbtn.className = "bx bx-pause";
        } else {
            index++;
            showSong(data[index]);
            sound.play();
            playbtn.className = "bx bx-pause";
        }
    })

    // Previous Sound Function
    prev.addEventListener('click', () => {
        if(index === 0) {
            index = data.length - 1;
            showSong(data[index]);
            sound.play();
            playbtn.className = "bx bx-pause";
        } else {
            index--;
            showSong(data[index]);
            sound.play();
            playbtn.className = "bx bx-pause";
        }
    })

    // Play And Pause Music Button
    playbtn.addEventListener('click', () => {
        if(sound.paused){
            sound.play();
            playbtn.className = "bx bx-pause";
        } else {
            sound.pause();
            playbtn.className = "bx bx-play";
        }
    })
}) 

// Make Some Animation When Page Load
window.addEventListener('load', () => {
    let content = document.getElementById("content");
    content.style.left = "0px";
})