

function newGameFunction() {
   fromMenuToNamePage = true;
    if (fromMenuToNamePage === true){
    let nameContainer = document.getElementById("nameContainer")
    nameContainer.style.display = "block";
    let mainMenuContainer = document.getElementById("mainMenuContainer")
    mainMenuContainer.style.display = "none";
    let nameForm1 = document.getElementById("nameForm1")
    nameForm1.style.display = "block";
    let namePageButtons = document.getElementById("namePageButtons")
    namePageButtons.style.display = "block";

    }
}
//below is the function i've added which is called after you enter the name of your character
//and you are ready to begin the game... this function will save input info, close the namePage, and begin the gameplay all in one click
function createPlayerAndBeginFunction() {
   inGamePage = false;
   isGameplayOpen = true;
   isMainMenuOpen = false;
    if (isMainMenuOpen === false){
      nameContainer = document.getElementById("nameContainer")
      nameContainer.style.display = "none";
      if (isGameplayOpen === true){
      var inGamePage = document.getElementById("inGamePage")
      inGamePage.style.display = "block";
      let inGameButtons = document.getElementById("inGameButtons")
      inGameButtons.style.display = "block";
    }
}
}
//add a pause button somewhere



function quitFunction1() {
    quittingPrompted = true;
  if (quittingPrompted === true){
    let namePageButtons = document.getElementById("namePageButtons")
    namePageButtons.style.display = "none";
    let nameForm1 = document.getElementById("nameForm1")
    nameForm1.style.display = "none";
    let gamePausedAlert1 = document.getElementById("gamePausedAlert1")
    gamePausedAlert1.style.display = "block";
    let quitMessageBox1 = document.getElementById("quitMessageBox1")
    quitMessageBox1.style.display = "block";
    let quitMessage1 = document.getElementById("quitMessage1")
    quitMessage1.style.display = "block";
  }
}

function yesQuitFunction1() {
  selectedyesQuitFunction1 = true
if (selectedyesQuitFunction1 === true){
  let gamePausedAlert1 = document.getElementById("gamePausedAlert1")
  gamePausedAlert1.style.display = "none";
  let quitMessageBox1 = document.getElementById("quitMessageBox1")
  quitMessageBox1.style.display = "none";
  let quitMessage1 = document.getElementById("quitMessage1")
  quitMessage1.style.display = "none";
  let mainMenuContainer = document.getElementById("mainMenuContainer")
  mainMenuContainer.style.display = "block";


}
}

function dontQuitFunction1() {
  selectedDontQuitFunction = true;
if (selectedDontQuitFunction === true){
  let namePageButtons = document.getElementById("namePageButtons")
  namePageButtons.style.display = "block";
  let nameForm1 = document.getElementById("nameForm1")
  nameForm1.style.display = "block";
  let gamePausedAlert1 = document.getElementById("gamePausedAlert1")
  gamePausedAlert1.style.display = "none";
  let quitMessageBox1 = document.getElementById("quitMessageBox1")
  quitMessageBox1.style.display = "none";
  let quitMessage1 = document.getElementById("quitMessage1")
  quitMessage1.style.display = "none";

 }
}
function quitFunction2() {
    quittingPrompted = true;
  if (quittingPrompted === true){
    let gamePausedAlert2 = document.getElementById("gamePausedAlert2")
    gamePausedAlert2.style.display = "block";
    let quitMessageBox2 = document.getElementById("quitMessageBox2")
    quitMessageBox2.style.display = "block";
    let quitMessage2 = document.getElementById("quitMessage2")
    quitMessage2.style.display = "block";
    let inGameButtons = document.getElementById("inGameButtons")
    inGameButtons.style.display = "none";
  

    
  }
  }


function dontQuitFunction2() {
    selectedDontQuitFunction = true;
  if (selectedDontQuitFunction === true){
    let gamePausedAlert2 = document.getElementById("gamePausedAlert2")
    gamePausedAlert2.style.display = "none";
    let quitMessageBox2 = document.getElementById("quitMessageBox2")
    quitMessageBox2.style.display = "none";
    let quitMessage2 = document.getElementById("quitMessage2")
    quitMessage2.style.display = "none";
    let inGameButtons = document.getElementById("inGameButtons")
    inGameButtons.style.display = "block";
  

   }
  }
  function yesQuitFunction2() {
    selectedyesQuitFunction2 = true
  if (selectedyesQuitFunction2 === true){
    let gamePausedAlert2 = document.getElementById("gamePausedAlert2")
    gamePausedAlert2.style.display = "none";
    let quitMessageBox2 = document.getElementById("quitMessageBox2")
    quitMessageBox2.style.display = "none";
    let quitMessage2 = document.getElementById("quitMessage1")
    quitMessage2.style.display = "none";
    let mainMenuContainer = document.getElementById("mainMenuContainer")
    mainMenuContainer.style.display = "block";
    let inGameButtons = document.getElementById("inGameButtons")
    inGameButtons.style.display = "none";
  
  
  }
  }

