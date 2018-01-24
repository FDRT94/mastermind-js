var colors = ['red','blue','green','yellow','white','black'];
var row = 0;
var puzzle = [];
var result = [];
var inPuzzle = [];
var correct = 0;
colorChecking = [];

function Start() {
for (i=0; i < 6 ; i++){
    colorKnop = document.createElement('button');
    colorKnop.id = i;
    colorKnop.setAttribute ('onclick','setColor(event)');
    colorKnop.style.backgroundColor = colors[i];
    document.getElementById('bottom').appendChild(colorKnop);
  
    }
    createButton();
    setPuzzle();
}

function createButton() {
    row++;

    for (i=0 ; i < 4; i++){
    targetKnop = document.createElement('button');
    targetKnop.id = row +'_' + i;
    targetKnop.setAttribute('onclick','putColor(event)');
    document.getElementById('top').appendChild(targetKnop);
    }  
    checkKnop = document.createElement('button');
    checkKnop.id = 'checkKnop';
    checkKnop.setAttribute ('onclick','check()');
    document.getElementById('top').appendChild(checkKnop);   
}

function check() {
    var gameTry = [];
    for (var i = 0; i < 4; i++) {
        gameTry.push(document.getElementById(row + '_' + i).style.backgroundColor);
        if (puzzle[i] === gameTry[i]) {
            result[i] = 'correct';
            correct++
        } 
        else if (puzzle.includes(gameTry[i])){
            result[i] = 'correctwrong';
        }
        else {
            result[i] = 'wrong';
        }
  
    }
    if (correct === 4 ){
        alert('you won!')
    }
    else {
        correct = 0;
    }
    console.log(result, inPuzzle);
    console.log(colorChecking);
}

function setColor(event) {
    x = event.target.style.backgroundColor;
    return x;
}

function putColor(event) {
    event.target.style.backgroundColor = x; 
}

function setPuzzle(){
  for (i=0; i < 4; i++){
      puzzle.push(colors[Math.floor(Math.random() * colors.length)]);
    
    } console.log(puzzle)
}



