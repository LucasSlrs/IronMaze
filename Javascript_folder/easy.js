const mapEasy = [
    ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
    ["|","c","-","|"," "," "," "," "," "," "," "," "," ","|"," "," "," "," "," ","|"],
    ["|"," "," ","|"," ","-","-","-","-","-","-","-"," ","|"," "," "," "," "," ","|"],
    ["|","-"," ","|"," ","|"," "," "," "," "," ","|"," ","|"," "," "," "," "," ","|"],
    ["|"," "," ","|"," ","|","-","-","-","|"," ","|"," ","|","-","-","-","-","-","|"],
    ["|"," ","-","|"," "," "," "," "," ","|"," ","|"," "," "," "," "," "," "," ","e"],//
    ["|"," ","-","|","-","-","-","|"," ","|"," "," ","|","-","-","-","-","-"," -","|"],
    ["|"," "," ","|","-","-","-","-"," ","|"," "," "," "," "," "," "," "," |"," ","|"],
    ["|","-"," ","|"," "," "," "," "," ","|","-","-","-","-","-","-"," ","-","-","|"],
    ["|"," "," ","|"," ","-"," "," "," ","|"," "," "," "," "," "," "," "," "," ","|"],
    ["|"," ","-","|"," ","|"," "," "," ","|"," ","-","-"," ","-"," "," ","|"," ","|"],
    ["|"," "," "," "," ","|"," "," "," ","|"," ","|"," "," ","|"," "," ","|"," ","|"],
    ["|"," "," ","|"," ","|"," "," "," ","|"," ","|"," ","|","|"," "," ","|"," ","|"],
    ["-","-","-","-"," ","-","-","-","-","-","|"," "," |"," ","|","-","-","|"," ","|"],
    [" "," "," ","|"," "," "," "," "," "," ","|"," ","-","-"," "," "," ","|"," ","|"],
    [" ","|"," ","|"," "," ","|","-"," ","|","|"," "," "," "," ","|"," ","|"," ","|"],
    [" ","|"," ","|","c"," ","|"," "," ","|","|"," "," "," ","|","|"," ","|"," ","|"],
    [" ","|"," ","-","-"," ","|","|"," ","|","-","-","-"," ","-","|"," ","-","-","|"],
    [" ","|"," "," "," "," ","|"," "," "," "," "," "," "," "," "," "," "," "," ","|"],
    [" ","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"],
    ];
    console.log(mapEasy[0][0]);
    function test(position) {
        const {x, y} = position;
        // console.log(mapEasy[x][y]);
        return mapEasy[x][y];
    }
var player = {
    x: 20,
    y: 0
};
function move(e){
    let newPosition = {x: player.x, y: player.y};
    console.log(e.code);
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
    }
    console.log(newPosition);
    if (test(newPosition)=== " "){
        player.x = newPosition.x;
        player.y = newPosition.y;
    };
    console.log(player);
}


const testBlackClass = document.getElementsByClassName("map");
const blackSquare = '<div class="black"></div>';
function classBlack(){
    let line = [];
    let cols = [[]];
    for (let i = 0; i < line.length; i++){
        if (line === "|" || "-"){
            testBlackClass.innerHTML = blackSquare;
        }else {
            return " ";
        }
        for (let j = 0; j < cols.length; j++){
                if (cols === "|" || "-") {
            testBlackClass.innerHTML = blackSquare;
                }else {
                    return " ";
                }
        }
    }
    return;
}
console.log(classBlack);
console.log("Welcome");
window.addEventListener('keydown', move);
// window.addEventListener('keydown', obstacle);

