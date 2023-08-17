var first = 1;

var check = true;

var decisionArray = [];
  for (var i = 0; i < 3; i++){
    decisionArray[i] = [];
  }

var box1 = false;
var box2 = false;
var box3 = false;
var box4 = false;
var box5 = false;
var box6 = false;
var box7 = false;
var box8 = false;
var box9 = false;

//My program will block a win in column 1 by placing an X in position [2][0]
//The code for this may be found at line number "393"
//O # #   O # #
//O # # → O # #
//# # #   X # #

//My program will block a win in row 1 by placing an X in position [0][2]
//The code for this may be found at line number "330"
//O O #   O O X
//# # # → # # #
//# # #   # # #

//My program will block a win in row 3 by placing an X in position [2][2]
//The code for this may be found at line number "372"
//# # #   # # #
//# # # → # # #
//O O #   O O X

//My program will block a win in column 2 by placing an X in position [2][1]
//The code for this may be found at line number "414"
//# O #   # O #
//# O # → # O #
//# # #   # X #

//My program will block a win in column 1 by placing an X in position [1][0]
//The code for this may be found at line number "407"
//O # #   O # #
//# # # → X # #
//O # #   O # #


function setup() {
  initArray(decisionArray);
  consoleOutput(decisionArray);
  createCanvas(600, 600);
  background("black");
  drawGrid();
  console.log(" turn = Player 1")
}

function initArray(x){
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      x[i][j] = "#"; 
    }
  }
}

function enterMove(x, i, j, first){
  let char = "#";
  if (first === 0){
    x[i][j] = "O";
  }
  else if (first === 1){
    x[i][j] = "X";
  }
}

function consoleOutput(x){
  for (var i = 0; i < 3; i++) {
    print(i + ": " + x[i][0] + " " + x[i][1] + " " + x[i][2] + " ");
 } 
}

function aiMove(x){
let i = int(random(0,3));
let j = int(random(0,3));
  while (first === 0 && decisionArray[i][j] === "#"){ 
    
    if (decisionArray[1][1] === "#" && first === 0){
      decisionArray[1][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    
    else if (decisionArray[1][1] === "X" && decisionArray[2][2] === "#" && first === 0 && decisionArray[0][2] === "#" && decisionArray[0][0] === "#" && decisionArray[2][0] === "#"){
      if (first === 0 && decisionArray[2][2] === "#" && decisionArray[2][1] === "O"){
        decisionArray[2][2] = "X";
        first = 1; 
        consoleOutput(decisionArray);   
        console.log (" turn: Player 1");
        aiMove(decisionArray);
        }
      else if (first === 0 && decisionArray[0][0] === "#" && decisionArray[0][1] === "O"){
        decisionArray[0][0] = "X";
        first = 1; 
        consoleOutput(decisionArray);   
        console.log (" turn: Player 1");
        aiMove(decisionArray);
        }
      else if (first === 0 && decisionArray[2][0] === "#" && decisionArray[1][0] === "O"){
        decisionArray[2][0] = "X";
        first = 1; 
        consoleOutput(decisionArray);   
        console.log (" turn: Player 1");
        aiMove(decisionArray);
        }
      else if (first === 0 && decisionArray[0][2] === "#" && decisionArray[1][2] === "O"){
        decisionArray[0][2] = "X";
        first = 1; 
        consoleOutput(decisionArray);   
        console.log (" turn: Player 1");
        aiMove(decisionArray);
        }
             
    }
    
    else if (decisionArray[1][1] === "O" && decisionArray[2][2] === "#" && first === 0 && decisionArray[0][2] === "#" && decisionArray[0][0] === "#" && decisionArray[2][0] === "#"){
      if (first === 0 && decisionArray[2][2] === "#"){
        decisionArray[2][2] = "X";
        first = 1; 
        consoleOutput(decisionArray);   
        console.log (" turn: Player 1");
        aiMove(decisionArray);
        }
      else if (first === 0 && decisionArray[0][0] === "#"){
        decisionArray[0][0] = "X";
        first = 1; 
        consoleOutput(decisionArray);   
        console.log (" turn: Player 1");
        aiMove(decisionArray);
        }
      else if (first === 0 && decisionArray[2][0] === "#"){
        decisionArray[2][0] = "X";
        first = 1; 
        consoleOutput(decisionArray);   
        console.log (" turn: Player 1");
        aiMove(decisionArray);
        }
      else if (first === 0 && decisionArray[0][2] === "#"){
        decisionArray[0][2] = "X";
        first = 1; 
        consoleOutput(decisionArray);   
        console.log (" turn: Player 1");
        aiMove(decisionArray);
        }
             
    } 
  
    else if (decisionArray[0][0] === "X" && decisionArray[0][1] === "X" && first === 0 && decisionArray[0][2] === "#"){
      decisionArray[0][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][0] === "X" && decisionArray[0][2] === "X" && first === 0 && decisionArray[0][1] === "#"){
      decisionArray[0][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][1] === "X" && decisionArray[0][2] === "X" && first === 0 && decisionArray[0][0] === "#"){
      decisionArray[0][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][0] === "X" && decisionArray[1][1] === "X" && first === 0 && decisionArray[1][2] === "#"){
      decisionArray[1][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][0] === "X" && decisionArray[1][2] === "X" && first === 0 && decisionArray[1][1] === "#"){
      decisionArray[1][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][1] === "X" && decisionArray[1][2] === "X" && first === 0 && decisionArray[1][0] === "#"){
      decisionArray[1][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[2][0] === "X" && decisionArray[2][1] === "X" && first === 0 && decisionArray[2][2] === "#"){
      decisionArray[2][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[2][0] === "X" && decisionArray[2][2] === "X" && first === 0 && decisionArray[2][1] === "#"){
      decisionArray[2][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[2][1] === "X" && decisionArray[2][2] === "X" && first === 0 && decisionArray[2][0] === "#"){
      decisionArray[2][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][0] === "X" && decisionArray[1][0] === "X" && first === 0 && decisionArray[2][0] === "#"){
      decisionArray[2][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[2][0] === "X" && decisionArray[1][0] === "X" && first === 0 && decisionArray[0][0] === "#"){
      decisionArray[0][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][0] === "X" && decisionArray[2][0] === "X" && first === 0 && decisionArray[1][0] === "#"){
      decisionArray[1][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][1] === "X" && decisionArray[1][1] === "X" && first === 0 && decisionArray[2][1] === "#"){
      decisionArray[2][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[2][1] === "X" && decisionArray[1][1] === "X" && first === 0 && decisionArray[0][1] === "#"){
      decisionArray[0][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][1] === "X" && decisionArray[2][1] === "X" && first === 0 && decisionArray[1][1] === "#"){
      decisionArray[1][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][2] === "X" && decisionArray[1][2] === "X" && first === 0 && decisionArray[2][2] === "#"){
      decisionArray[2][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[2][2] === "X" && decisionArray[1][2] === "X" && first === 0 && decisionArray[0][2] === "#"){
      decisionArray[0][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][2] === "X" && decisionArray[2][2] === "X" && first === 0 && decisionArray[1][2] === "#"){
      decisionArray[1][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][1] === "X" && decisionArray[2][0] === "X" && first === 0 && decisionArray[0][2] === "#"){
      decisionArray[0][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][1] === "X" && decisionArray[0][2] === "X" && first === 0 && decisionArray[2][0] === "#"){
      decisionArray[2][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][2] === "X" && decisionArray[2][0] === "X" && first === 0 && decisionArray[1][1] === "#"){
      decisionArray[1][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][1] === "X" && decisionArray[0][0] === "X" && first === 0 && decisionArray[2][2] === "#"){
      decisionArray[2][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][1] === "X" && decisionArray[2][2] === "X" && first === 0 && decisionArray[0][0] === "#"){
      decisionArray[0][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][0] === "X" && decisionArray[2][2] === "X" && first === 0 && decisionArray[1][1] === "#"){
      decisionArray[1][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);      
    }
//////////////////////////////////////////////////////////////////////////////
    else if (decisionArray[0][0] === "O" && decisionArray[0][1] === "O" && first === 0 && decisionArray[0][2] === "#"){
      decisionArray[0][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][0] === "O" && decisionArray[0][2] === "O" && first === 0 && decisionArray[0][1] === "#"){
      decisionArray[0][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][1] === "O" && decisionArray[0][2] === "O" && first === 0 && decisionArray[0][0] === "#"){
      decisionArray[0][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][0] === "O" && decisionArray[1][1] === "O" && first === 0 && decisionArray[1][2] === "#"){
      decisionArray[1][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][0] === "O" && decisionArray[1][2] === "O" && first === 0 && decisionArray[1][1] === "#"){
      decisionArray[1][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][1] === "O" && decisionArray[1][2] === "O" && first === 0 && decisionArray[1][0] === "#"){
      decisionArray[1][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[2][0] === "O" && decisionArray[2][1] === "O" && first === 0 && decisionArray[2][2] === "#"){
      decisionArray[2][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[2][0] === "O" && decisionArray[2][2] === "O" && first === 0 && decisionArray[2][1] === "#"){
      decisionArray[2][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[2][1] === "O" && decisionArray[2][2] === "O" && first === 0 && decisionArray[2][0] === "#"){
      decisionArray[2][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][0] === "O" && decisionArray[1][0] === "O" && first === 0 && decisionArray[2][0] === "#"){
      decisionArray[2][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[2][0] === "O" && decisionArray[1][0] === "O" && first === 0 && decisionArray[0][0] === "#"){
      decisionArray[0][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][0] === "O" && decisionArray[2][0] === "O" && first === 0 && decisionArray[1][0] === "#"){
      decisionArray[1][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][1] === "O" && decisionArray[1][1] === "O" && first === 0 && decisionArray[2][1] === "#"){
      decisionArray[2][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[2][1] === "O" && decisionArray[1][1] === "O" && first === 0 && decisionArray[0][1] === "#"){
      decisionArray[0][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][1] === "O" && decisionArray[2][1] === "O" && first === 0 && decisionArray[1][1] === "#"){
      decisionArray[1][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][2] === "O" && decisionArray[1][2] === "O" && first === 0 && decisionArray[2][2] === "#"){
      decisionArray[2][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[2][2] === "O" && decisionArray[1][2] === "O" && first === 0 && decisionArray[0][2] === "#"){
      decisionArray[0][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][2] === "O" && decisionArray[2][2] === "O" && first === 0 && decisionArray[1][2] === "#"){
      decisionArray[1][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][1] === "O" && decisionArray[2][0] === "O" && first === 0 && decisionArray[0][2] === "#"){
      decisionArray[0][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][1] === "O" && decisionArray[0][2] === "O" && first === 0 && decisionArray[2][0] === "#"){
      decisionArray[2][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][2] === "O" && decisionArray[2][0] === "O" && first === 0 && decisionArray[1][1] === "#"){
      decisionArray[1][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][1] === "O" && decisionArray[0][0] === "O" && first === 0 && decisionArray[2][2] === "#"){
      decisionArray[2][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[1][1] === "O" && decisionArray[2][2] === "O" && first === 0 && decisionArray[0][0] === "#"){
      decisionArray[0][0] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }
    else if (decisionArray[0][0] === "O" && decisionArray[2][2] === "O" && first === 0 && decisionArray[1][1] === "#"){
      decisionArray[1][1] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);      
    }
    else if (decisionArray[1][1] === "O" && decisionArray[0][0] === "O" && first === 0 && decisionArray[0][2] === "#"){
      decisionArray[0][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);      
    }
   else if (decisionArray[2][1] === "O" && decisionArray[1][2] === "O" && first === 0 && decisionArray[2][2] === "#"){
      decisionArray[2][2] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);      
    }
    
///////////////////////////////////////////////////////////////////////////////
    else if(decisionArray[2][2] === "#" && decisionArray[0][0] === "O" && decisionArray[1][2] === "O"){
      decisionArray[2][2] = "X";
      first = 1
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
  }
    else if((decisionArray[0][2] === "#" && decisionArray[2][0] === "O" && decisionArray[1][2] === "O") || (decisionArray[0][2] === "#" && decisionArray[0][1] === "O")){
      decisionArray[0][2] = "X";
      first = 1
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
  }
  else if((decisionArray[1][0] === "O" && decisionArray[0][0] === "#")|| (decisionArray[0][0] === "#" && decisionArray[0][1] === "O" && decisionArray[1][0] === "O")){
      decisionArray[0][0] = "X";
      first = 1
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
  } 
  else if((decisionArray[1][0] === "#" && decisionArray[1][2] === "O") || (decisionArray[1][0] === "#" && decisionArray[1][2] === "O" && decisionArray[1][1] === "O") ||  (decisionArray[1][0] === "#" && decisionArray[2][1] === "O") || (decisionArray[1][0] === "#" && decisionArray[0][0] === "O")){
      decisionArray[1][0] = "X";
      first = 1
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
  }   
  else if((decisionArray[2][2] === "#" && decisionArray[1][2] === "O") || (decisionArray[2][2] === "#" && decisionArray[2][1] === "O" && decisionArray[1][2] === "O" ) || (decisionArray[2][2] === "#" && decisionArray[1][1] === "O") || (decisionArray[2][2] === "#" && decisionArray[0][0] === "O" && decisionArray[1][2] === "O")){
      decisionArray[2][2] = "X";
      first = 1
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
  }    
  else if(decisionArray[2][0] === "#" && decisionArray[0][0] === "O" && decisionArray[2][1] === "O"){
      decisionArray[2][0] = "X";
      first = 1
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
  }
  else if((decisionArray[0][1] === "#" && decisionArray[2][1] === "O") || (decisionArray[0][0] === "O" && decisionArray[0][1] === "#") || (decisionArray[1][2] === "O" && decisionArray[0][1] === "#")){
      decisionArray[0][1] = "X";
      first = 1
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
  }
  else if((decisionArray[2][1] === "#" && decisionArray[1][2] === "O") ){
      decisionArray[2][1] = "X";
      first = 1
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
  }
  else if(decisionArray[0][2] === "#" && decisionArray[1][1] === "O" ){
      decisionArray[0][2] = "X";
      first = 1
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
  }
  else if((decisionArray[1][2] === "#" && decisionArray[0][2] === "O") || (decisionArray[1][2] === "#" && decisionArray[1][1] === "O")){
      decisionArray[1][2] = "X";
      first = 1
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
  }
  else if(decisionArray[0][0] === "#" && decisionArray[2][0] === "O" && decisionArray[0][1] === "O"){
      decisionArray[0][0] = "X";
      first = 1
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
  }
  else if(decisionArray[0][2] === "#" && decisionArray[2][2] === "O" && decisionArray[0][1] === "O"){
      decisionArray[0][2] = "X";
      first = 1
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
  }

  

///////////////////////////////////////////////////////////////////////////////
    
  else if (first === 0){
      decisionArray[i][j] = "X";
      first = 1; 
      consoleOutput(decisionArray);   
      console.log (" turn: Player 1");
      aiMove(decisionArray);
    }  
     
  }
  for (let i = 0; i <= 2; i++){
    for (let j = 0; j <= 2; j++){
      if (decisionArray[i][j] === "X") drawX ((200*j) + 100, (200*i) + 100);
    }
  
}
}



function drawGrid(){
  stroke('white');
  line(200, 0, 200, 600);
  line(400, 0, 400, 600);
  line(0, 200, 600, 200);
  line(0, 400, 600, 400);
}

function drawCircle(x,y){
  fill('black');
  stroke('orange');
  strokeWeight(5);
  ellipse(x,y,120,120,0);
}

function drawX(x,y, color){
  fill('black');
  stroke('purple');
  strokeWeight(5);
  line(x-50, y-50, x+50, y+50);
  line(x+50, y-50, x-50, y+50);
}


function drawShape(){
  if (mouseX >0 && mouseX<200 && mouseY>0 && mouseY<200 &&mouseIsPressed && box1 === false && decisionArray[0][0] === "#")   {
    if (first === 1){
      drawCircle(100,100);
      first = 0;
      box1 = true;
      enterMove(decisionArray, 0, 0, first);
      consoleOutput(decisionArray);
      console.log(" turn: bot")  
    }

  }
  if (mouseX >200 && mouseX<400 && mouseY>0 && mouseY<200 &&mouseIsPressed && box2 === false && decisionArray[0][1] === "#")   {
   if (first === 1){
      drawCircle(300,100);
      first = 0;
      box2 = true;
      enterMove(decisionArray, 0, 1, first);
      consoleOutput(decisionArray);
      console.log(" turn: bot")
    }


  }
  if (mouseX >400 && mouseX<600 && mouseY>0 && mouseY<200 &&mouseIsPressed && box3 === false && decisionArray[0][2] === "#")   {
   if (first === 1){
      drawCircle(500,100);
      first = 0;
      box3 = true;
      enterMove(decisionArray, 0, 2, first);
      consoleOutput(decisionArray);
      console.log(" turn: bot")
    }


  }
  if (mouseX >0 && mouseX<200 && mouseY>200 && mouseY<400 &&mouseIsPressed && box4 === false && decisionArray[1][0] === "#")   {
   if (first === 1){
      drawCircle(100,300);
      first = 0;
      box4 = true;
      enterMove(decisionArray, 1, 0, first);
      consoleOutput(decisionArray);
      console.log(" turn: bot")
    }


  }
  if (mouseX >200 && mouseX<400 && mouseY>200 && mouseY<400 &&mouseIsPressed && box5 === false && decisionArray[1][1] === "#")   {
   if (first === 1){
      drawCircle(300,300);
      first = 0;
      box5 = true;
      enterMove(decisionArray, 1, 1, first);
      consoleOutput(decisionArray);
      console.log(" turn: bot")
    }


  }
  if (mouseX >400 && mouseX<600 && mouseY>200 && mouseY<400 &&mouseIsPressed && box6 === false && decisionArray[1][2] === "#")   {
   if (first === 1){
      drawCircle(500,300);
      first = 0;
      box6 = true;
      enterMove(decisionArray, 1, 2, first);
      consoleOutput(decisionArray);
      console.log(" turn: bot")
    }


}
  if (mouseX >0 && mouseX<200 && mouseY>400 && mouseY<600 &&mouseIsPressed && box7 === false && decisionArray[2][0] === "#")   {
   if (first === 1){
      drawCircle(100,500);
      first = 0;
      box7 = true;
      enterMove(decisionArray, 2, 0, first);
      consoleOutput(decisionArray);
      console.log(" turn: bot")
    }
  
  }
  if (mouseX >200 && mouseX<400 && mouseY>400 && mouseY<600 &&mouseIsPressed && box8 === false && decisionArray[2][1] === "#")   {
   if (first === 1){
      drawCircle(300,500);
      first = 0;
      box8 = true;
      enterMove(decisionArray, 2, 1, first);
      consoleOutput(decisionArray);
      console.log(" turn: bot")
    }
  
}
  if (mouseX >400 && mouseX<600 && mouseY>400 && mouseY<600 && mouseIsPressed && box9 === false && decisionArray[2][2] === "#")   {
   if (first === 1){
      drawCircle(500,500);
      first = 0;
      box9 = true;
      enterMove(decisionArray, 2, 2, first);
      consoleOutput(decisionArray);
      console.log(" turn: bot")
    }
   

}
}

function isWon(x){
  if (x[0][0] === 'X' && x[0][0] === x[1][0] && x[1][0] === x[2][0]){
    stroke("red")
    line (100, 50, 100, 550)
    return 2;
  }
  if (x[0][1] === 'X' && x[0][1] === x[1][1] && x[1][1] === x[2][1]){
    stroke("red")
    line (300, 50, 300, 550)
    return 2;
  }
  if (x[0][2] === 'X' && x[0][2] === x[1][2] && x[1][2] === x[2][2]){
    stroke("red")
    line (500, 50, 500, 550)
    return 2;
  }
  if (x[0][0] === 'X' && x[0][0] === x[0][1] && x[0][1] === x[0][2]){
    stroke("red")
    line (50, 100, 550, 100)
    return 2;
  }
  if (x[1][0] === 'X' && x[1][0] === x[1][1] && x[1][1] === x[1][2]){
    stroke("red")
    line (50, 300, 550, 300)
    return 2;
  }
  if (x[2][0] === 'X' && x[2][0] === x[2][1] && x[2][1] === x[2][2]){
    stroke("red")
    line (50, 500, 550, 500)
    return 2;
  }
  if (x[0][0] === 'X' && x[0][0] === x[1][1] && x[1][1] === x[2][2]){
    stroke("red")
    line (100, 100, 500, 500)
    return 2;
  }
  if (x[0][2] === 'X' && x[0][2] === x[1][1] && x[1][1] === x[2][0]){
    stroke("red")
    line (500, 100, 100, 500)
    return 2;
  }
  
  if (x[0][0] === 'O' && x[0][0] === x[1][0] && x[1][0] === x[2][0]){
    stroke("red")
    line (100, 50, 100, 550)
    return 1;
  }
  if (x[0][1] === 'O' && x[0][1] === x[1][1] && x[1][1] === x[2][1]){
    stroke("red")
    line (300, 50, 300, 550)
    return 1;
  }
  if (x[0][2] === 'O' && x[0][2] === x[1][2] && x[1][2] === x[2][2]){
    stroke("red")
    line (500, 50, 500, 550)
    return 1;
  }
  if (x[0][0] === 'O' && x[0][0] === x[0][1] && x[0][1] === x[0][2]){
    stroke("red")
    line (50, 100, 550, 100)
    return 1;
  }
  if (x[1][0] === 'O' && x[1][0] === x[1][1] && x[1][1] === x[1][2]){
    stroke("red")
    line (50, 300, 550, 300)
    return 1;
  }
  if (x[2][0] === 'O' && x[2][0] === x[2][1] && x[2][1] === x[2][2]){
    stroke("red")
    line (50, 500, 550, 500)
    return 1;
  }
  if (x[0][0] === 'O' && x[0][0] === x[1][1] && x[1][1] === x[2][2]){
    stroke("red")
    line (100, 100, 500, 500)
    return 1;
  }
  if (x[0][2] === 'O' && x[0][2] === x[1][1] && x[1][1] === x[2][0]){
    stroke("red")
    line (500, 100, 100, 500)
    return 1;
  }
}


function draw(){
  
  if (mouseButton === LEFT){
    drawShape();
    
  if (isWon(decisionArray) === 1){
    console.log(" Player 1 wins. ")
    end = true
    noLoop();
    
  }
  else if (isWon(decisionArray) === 2){
    console.log(" Bot wins. ")
    end = true
    noLoop();
  }
  } 

    aiMove(decisionArray);
    isWon(decisionArray);
}