const demo = document.getElementById('demo');
let number = 0;
let clear;
function startTiming() {
    clear = setInterval(function () {
        number += 1
        demo.innerText = number
    }, 100);
    // console.log(number)
}
function stopTiming() {
    clearInterval(clear)
    demo.innerText = number
}


function resetTiming() {
    demo.innerText = ''
    number = 0;
    clearInterval(clear)
}