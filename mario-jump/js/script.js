const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => { // function to jump
    mario.classList.add('jump'); // add class jump to mario

    setTimeout(() => { // function to remove class jump
        mario.classList.remove('jump');

    }, 500); // set timeout to remove class jump
}

const loop = setInterval(() => { // function to loop

    console.log('loop')


    const pipePosition = pipe.offsetLeft; // get offset left of pipe
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // get offset bottom of mario

    console.log(marioPosition);

    /*console.log(pipePosition); // logpipe position*/


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'; // remove animation
        pipe.style.left = `${pipePosition}px`; // move pipe to the right

        mario.style.animation = 'none'; // remove animation
        mario.style.bottom = `${marioPosition}px`; // move mario to the bottom

        mario.src = './mario-jump-images/game-over.png'; // change mario image to game over
        mario.style.width = '75px'; // change mario width
        mario.style.marginLeft = '50px'; // change mario margin left

        clearInterval(loop); // clear interval

    }
}, 10); // set timeout to remove class jump


document.addEventListener('keydown', jump); // add event listener to jump when keydown