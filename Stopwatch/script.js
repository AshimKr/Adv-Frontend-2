const timer = document.getElementById('timer');

let sec = 00;
let min = 00;
// let watch = 0;

let ref = null
const stopwatch = () =>{
    ref = setInterval(()=>{
        timer.innerText = `${('0'+min).slice(-2)} : ${('0'+sec).slice(-2)}`;
        sec=sec+1;
        if(sec == 60){
            min = min+1;
            sec = 0;
        }
        // console.log(watch);
    },1000)
}

function start(){
    stopwatch()
}

function stop(){
    clearInterval(ref)
    console.log(ref);
}

function reset(){
    clearInterval(ref);
    sec = 00;
    min = 00;
    timer.innerText = `${('0'+min).slice(-2)} : ${('0'+sec).slice(-2)}`;
}
