// global variables
let IsTokenProvided;
let token;
const LichessTokenKey = "Lichess-Token";
const IsTokenProvidedKey = "IsTokenProvided";
// html elements
let body;
let inputToken;
let SubmitButton;
let winRange;
let digitalRepresentationt;






const MyStorage ={
  Get:async function (key) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get([key], function(result) {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(result[key]);
        }
      });
    });
  },
  Set:async function(key, value) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.set({ [key]: value }, function() {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });
  }
}


async function MainBoardDetector() {
  alert(await MyStorage.Get(LichessTokenKey));
  const MainBoard = document.querySelector(".round__app__board.main-board");
  if (!MainBoard) {
    return;
  }
  // alert("Main board was detected")
  const chessTable = MainBoard.querySelector("cg-container");
  if(!chessTable){
    return;
  }
  //  alert(`Chess table was detected style: width ${chessTable.style.width}  height ${chessTable.style.height}`);
}

window.onload = MainBoardDetector;
