// timer

let tokenEdit = 0;
let seconds = 0;
let minutes = 0;

var interval

let btnPlay = document.getElementById('btnPlay').addEventListener('click', () =>
{

    tokenEdit++

    let numberSeconds = document.getElementById('numberSeconds');
    
    interval = setInterval(() => {
        
        seconds++
        seconds = (seconds < 10 ? '0' + seconds : seconds)
        numberSeconds.innerHTML = seconds;

    }, 1000);

});

let btnPause = document.getElementById('btnPause').addEventListener('click', () =>
{

    clearInterval(interval);

});

let bnReset = document.getElementById('bnReset').addEventListener('click', () => 
{

    seconds = 0;
    clearInterval(interval);
    numberSeconds.innerHTML = '0' + seconds;

});