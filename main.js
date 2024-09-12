

let stop = document.getElementById('stopButton');
let slow = document.getElementById('slowButton');
let go = document.getElementById('goButton');

let stopLight = document.getElementById('stopLight');
let slowLight = document.getElementById('slowLight');
let goLight = document.getElementById('goLight');
function changeLight(status) {
    if (status == 'stop') {
        stopLight.style.backgroundColor = 'rgb(193, 59, 59)';
        slowLight.style.backgroundColor = '#111'
        goLight.style.backgroundColor = '#111';
    } else if (status == 'slow') {
        stopLight.style.backgroundColor = '#111';
        slowLight.style.backgroundColor = 'rgb(222, 144, 77)'
        goLight.style.backgroundColor = '#111';
    }else if (status == 'go') {
        stopLight.style.backgroundColor = '#111';
        slowLight.style.backgroundColor = '#111'
        goLight.style.backgroundColor = 'rgb(146, 213, 115)';
    }
        
}