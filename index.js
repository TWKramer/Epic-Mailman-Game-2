let isNamePageActive = true;
let isGameplayActive = false;
let isMainMenuActive = false;
let gameWon = false;

if (isMainMenuActive = true){
  
}






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
