function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle event blue button onclick using function
const blue = document.getElementById('btn-click-blue');
blue.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// handle event using anonymous function
const greenBtn = document.getElementById('btn-click-green');
// anonymous function
greenBtn.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handle event by using add eventListener
const btnGoldenRod = document.getElementById('btn-goldenRod');
btnGoldenRod.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenRod';
}

// addEventListener
const hotPink = document.getElementById('btn-hotPink');
hotPink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

// direct shortcut
document.getElementById('btn-lightBlue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})