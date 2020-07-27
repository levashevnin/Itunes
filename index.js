import {radioPlayer, radioPlayerInit} from "./radioPlayer.js";
import {musicPlayer} from "./musicPlayer.js";
import {videoPlayer} from "./videoPlayer.js";

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');

const deactivationPlayer = () =>{
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));
}

playerBtn.forEach((btn, i) => btn.addEventListener('click', () =>{
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    }))
radioPlayerInit();
videoPlayerInit();
musicPlayerInit();

