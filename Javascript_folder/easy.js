const mapEasy = [
    ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
    ["-","C","-","-"," "," "," "," "," "," "," "," "," ","-"," "," "," "," "," ","-"],
    ["-"," "," ","-"," ","-","-","-","-","-","-","-"," "," "," ","-","-","-"," ","-"],
    ["-","-"," ","-"," ","-","C"," "," "," "," ","-"," ","-"," "," "," ","-","C","-"],
    ["-"," "," ","-"," ","-","-","-","-","-"," ","-"," ","-","-","-","-","-","-","-"],
    ["-"," ","-","-"," "," "," "," "," ","-"," ","-"," "," "," "," "," "," "," ","e"],//
    ["-"," ","-","-","-","-","-","-"," ","-"," ","-","-","-","-","-","-","-","-","-"],
    ["-"," "," ","-","-","-","-","-"," ","-"," "," "," "," "," "," "," ","-"," ","-"],
    ["-","-"," ","-"," "," "," ","-"," ","-","-","-","-","-","-","-"," ","-","-","-"],
    ["-"," "," ","-"," ","-"," ","-"," ","-"," "," "," "," "," "," "," "," "," ","-"],
    ["-"," ","-","-"," ","-"," ","-"," ","-"," ","-","-"," ","-"," "," ","-"," ","-"],
    ["-"," "," "," "," ","-"," "," "," ","-"," ","-"," "," ","-"," "," ","-"," ","-"],
    ["-"," "," ","-"," ","-"," ","-"," ","-"," "," "," "," ","-"," "," ","-"," ","-"],
    ["-","-","-","-"," ","-","-","-","-","-","-"," ","-"," ","-","-","-","-"," ","-"],
    [" "," "," ","-"," "," "," "," "," "," ","-"," ","-","-"," "," "," ","-"," ","-"],
    [" ","-"," ","-"," "," ","-","-"," ","-","-"," "," "," "," ","-"," ","-"," ","-"],
    [" ","-"," ","-","C"," ","-"," "," ","-","-"," "," "," ","-","-"," ","-"," ","-"],
    [" ","-"," ","-","-"," ","-","-"," ","-","-","-","-"," ","-","-"," ","-"," ","-"],
    [" ","-"," "," "," "," ","-"," "," "," "," "," "," "," "," "," "," "," "," ","-"],
    ["S","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
    ];
//    console.log(mapEasy[0][0]);
    function test(position) { //Tels the actual position of the player
        const {x, y} = position;
        return mapEasy[x][y];
    }
var player = { //Start position 
    x: 19,
    y: 0,
    coins: 0,

};
var time =0 //Timer set to 0

// When player moove, the yellow square is moving and deleting the class after changing position
function displayPlayer(oldPosition, newPosition){
    mapElem(newPosition).classList.add('player');
    mapElem(oldPosition).classList.remove('player');
//   console.log('displayPlayer');

}
// console.log(player);
function move(e){ //Move into the array
    let newPosition = {x: player.x, y: player.y};
//    console.log(e.code);
    if (e.code == 'ArrowUp'){ //up
        newPosition.x -= 1;
    }
    else if (e.code == 'ArrowDown'){ //down
        newPosition.x += 1;
    }
    else if (e.code == 'ArrowLeft'){ //left
        newPosition.y -= 1;
    }
    else if (e.code == 'ArrowRight') { //right
        newPosition.y += 1;
    }else {return};

//    console.log(newPosition);
    //if the player touch a coin, the start and the end. Player can still move
    if (test(newPosition)=== "S" || test(newPosition)=== " " || test(newPosition)=== "C" || test(newPosition)=== "e"){
        const oldPosition = {x: player.x, y: player.y};
        displayPlayer(oldPosition, newPosition);
        player.x = newPosition.x;
        player.y = newPosition.y;
        if (test(newPosition)=== "C"){
            touchBitcoin(newPosition);
        }
        if (test(newPosition)=== "e"){
            endGame();
            alert('You won the game, congratulations!');
        }
    }
//    console.log(player);
}
function endGame(){
    clearInterval(timerID);
    console.log(`You win in ${time} seconds, and you earn ${player.coins} Bitcoin(s). I hope you put them in a wallet.`);
}

//if a coin is touched, the coin disapear after
function touchBitcoin(position){
    player.coins += 1;
    const btc = mapElem(position);
    btc.classList.remove("coin");
    mapEasy[position.x][position.y] = " ";
    // console.log('bitcoin');
    // console.log(player.coins);
    const nbBTC = document.querySelector('#print-btc');
    nbBTC.innerHTML = `${player.coins} Bitcoin`;

}
//Get the actual position
const mapElem = position => document.getElementById(position.y+"."+position.x);


//Put the array into the grid
function putArrayInGrid(){ //Look into the array to see if there's an obstable or not. If there's one it create a div with a class in the HTML
    let testGrid = document.querySelector(".game-inside");
    let innerHTMLLab = "";
    for (let i = 0; i < mapEasy.length; i++){
        for (let j = 0; j < mapEasy[i].length; j++){
           if (mapEasy[i][j] === " "){
               innerHTMLLab += '<div class="map" id='+ j+"."+i +'></div>';
           }
           if (mapEasy[i][j] === "-"){
            innerHTMLLab += '<div class="black-square" id='+ j+"."+i +' ></div>';
           }
           if (mapEasy[i][j] === "S"){
            innerHTMLLab += '<div class="player start"  id='+ j+"."+i +'></div>';
           }
           if (mapEasy[i][j] === "e"){
            innerHTMLLab += '<div class="end"  id='+ j+"."+i +'></div>';
           }
           if (mapEasy[i][j] === "C"){
            innerHTMLLab += '<div class="coin"  id='+ j+"."+i +'></div>';
           }
        }
    }
        testGrid.innerHTML = innerHTMLLab;
}

putArrayInGrid();
player.dom = document.querySelector(".player");

//use timer
const timerID = setInterval(() => {
    time += 1;
    const timePrinter = document.querySelector('#print-time');
    timePrinter.innerHTML = `Timer: ${time}`;
}, 1000);

//console.log("Welcome");
window.addEventListener('keydown', move);
let playerTest = document.querySelector(".start");
let moveBy = 10;
//console.log(playerTest);


