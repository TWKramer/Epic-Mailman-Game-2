let isMainMenuOpen = true;
let isNamePageOpen = false;
let isGameplayOpen = false;
let isGameResultPageOpen = false;
let stateOfPage = false

// the next 4 if statements represent the 4 pages I have coded into the game.
//main menu, enter your name, play the game, did you win or not... those
//are the 4 UI's basically

if (isMainMenuOpen = true){
isNamePageOpen = false;
isGameplayOpen = false;
isGameResultPageOpen = false;
  
}

//above is the state of the user in the main menu. Page One

if (isNamePageOpen = true){
isMainMenuOpen = false;
isGameplayOpen = false;
isGameResultPageOpen = false;
  
}

//above is the state of the user in the page where you
//create a name for your character. Page Two


if (isGameplayOpen = true){
isMainMenuOpen = false;
isNamePageOpen = false;
isGameResultPageOpen = false;
  
}

//above is the state of the user acutally playing the game Page Three


if (isGameResultPageOpen = true){
isMainMenuOpen = false;
isNamePageOpen = false;
isGameplayOpen = false;

}

//above is the state of the user has finished the game and win loss result is being show Page Four

function newGameFunction() {
   isMainMenuOpen = false;
   isNamePageOpen = true;
    if (isMainMenuOpen === false){
      var mainMenu = document.getElementById("mainMenuContainer")
      mainMenu.style.display = "none";
    if (isNamePageOpen === true){
      var namePage = document.getElementById("nameContainer")
      namePage.style.display = "block";
    }
}
}
//below is the function i've added which is called after you enter the name of your character
//and you are ready to begin the game... this function will save input info, close the namePage, and begin the gameplay all in one click
function createPlayerAndBeginFunction() {
   isNamePageOpen = false;
   isGameplayOpen = true;
    if (isMainMenuOpen === false){
      namepage = document.getElementById("nameContainer")
      namePage.style.display = "none";
      if (isGameplayOpen === true){
      var gameplayPage = document.getElementById("playingContainer")
      gameplayPage.style.display = "block";
    }
}
}
  

/*
function newGameFunction() {
  var newGame = document.getElementById("mainMenuContainer");
    if (newGame.style.display === "none") {
      newGame.style.display = "block";
    } else {
      newGame.style.display = "none";
      nameContainer.style.display = "block";
    }
  }
function nameMenuStartGameFunction() {
  var startGame = document.getElementById("nameContainer");
    if (startGame.style.display === "none") {
      startGame.style.display = "block";
    } else {
      startGame.style.display = "none";
      playingContainer.style.display = "block";
    }
  }
  exitFunction
  function exitFunction() {
    var exitGame = document.getElementById("mainMenuContainer");
      if (exitGame.style.display === "none") {
        exitGame.style.display = "block";
      } else {
        exitGame.style.display = "none";
        nameContainer.style.display = "none";
      }
    }

*/
/*
function myFunction() {
  document.getElementById("newGamebtn").onclick = function(){

    alert("display of Main Menu is '" + mainMenuContainer.style.display + "'");
    alert("display of Name Page is '" + nameContainer.style.display + "'");
    alert("display of Game Page is '" + playingContainer.style.display + "'");
    
    document.getElementById("mainMenuContainer").style.display="none";
    document.getElementById("nameContainer").style.display="block";
    document.getElementById("playingContainer").style.display="none";


}
}
*/
