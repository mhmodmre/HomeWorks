class Timer {

    #timeNum = 0;
    time;
    #startBtn;
    #stopBtn;
    #pauseBtn;
    #flag = false;
    
    constructor (timeId = "time", startBtn = "startBtn", stopBtn = "stopBtn", pauseBtn = "pauseBtn") {
        
        this.time = document.getElementById(timeId);
        this.#startBtn = document.getElementById(startBtn);
        this.#stopBtn = document.getElementById(stopBtn);
        this.#pauseBtn = document.getElementById(pauseBtn);

        this.#startBtn.addEventListener('click',()=>{
           
            this.start();
        });
        this.#stopBtn.addEventListener('click',()=>{
        this.stop();
        });
        this.#pauseBtn.addEventListener('click',()=>{
            this.pause();
        })
;
    }

    #counter() {
        if (this.#flag === true) {
            this.time.innerText = this.#timeNum++;
            setTimeout(() => this.#counter(), 1000);
        }
    }

    start() {
        if (this.#flag === false) {
            this.#flag = true;
            this.#counter();
        }
    }

    stop() {
        this.#flag = false;
        this.#timeNum = 0;
        this.time.innerHTML = 0
    }

    pause() {
        this.#flag = false;
    }
}
let timer1 = new Timer();




// let timer = 0; //keeps the record       .
// let watcher = false; // the stopper should not be active.
// let timekeeper;

// document.getElementById('startBtn').addEventListener('click',()=>{
//     start();
// });
// document.getElementById('stopBtn').addEventListener('click',()=>{
//     stop();
// });

// function start() {
//         timekeeper = setTimeout(changeStopwatch, 1000);   
// }
// function changeStopwatch() {
//     timer++;
//     document.getElementById('screen').innerText = timer;
//     start();
// }
// function stop() {
//     clearTimeout(timekeeper);
// }