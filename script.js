let progressBar = document.querySelectorAll(".circular-progress");
let valueContainer = document.querySelectorAll(".value-container");

let progressValue = 0;
let speed = 50;

let progress1 = setInterval(() => {
    fill(0, 45, progress1)
}, 50)
let progress2 = setInterval(() => {
    fill(1, 65, progress2)
}, 50)
let progress3 = setInterval(() => {
    fill(2, 30, progress3)
}, 50)

function fill(index, progressEndValue, progress) {
    progressValue++;
    console.log(progressValue, progressEndValue);
    valueContainer[index].textContent = `${progressValue}%`;
    progressBar[index].style.background = `conic-gradient(
        #4d5bf9 ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
    )`;
    if (progressValue == progressEndValue) {
        clearInterval(progress);
    }
};