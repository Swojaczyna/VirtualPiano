document.addEventListener("keydown", function (e){
    if(e.code === "KeyA"){
        play_key("A");
    } else if(e.code === "KeyS"){
        play_key("S");
    } else if(e.code === "KeyD"){
        play_key("D");
    } else if(e.code === "KeyF"){
        play_key("F");
    } else if(e.code === "KeyG"){
        play_key("G");
    } else if(e.code === "KeyH"){
        play_key("H");
    } else if(e.code === "KeyJ"){
        play_key("J");
    } else if(e.code === "KeyW"){
        play_key("W");
    } else if(e.code === "KeyE"){
        play_key("E");
    } else if(e.code === "KeyT"){
        play_key("T");
    } else if(e.code === "KeyY"){
        play_key("Y");
    } else if(e.code === "KeyU"){
        play_key("U");
    } else {
        console.log("Not autorised key is pressed")
    }

    function play_key(sound) {
        let audio = new Audio("Audio/" + sound + ".mp3");
        audio.load();
        audio.play();
    }
})