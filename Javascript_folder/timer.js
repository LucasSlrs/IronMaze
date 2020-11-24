class Timer {
    constructor(){
        this.currentTime = 60;
        this.intervalID = 0;
    }
    startGame(callback){
        this.intervalID = setInterval(() =>{
            this.currentTime -=1;
        }, 1000);
    }
    getSeconds(){
        let seconds = this.currentTime;
        return seconds;
    }
}
