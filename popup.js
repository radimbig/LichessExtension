// global variables
let IsTokenProvided;
let token;

// html elements
let body;
let inputToken;
let SubmitButton;
let winRange;
let digitalRepresentationt;


/*


*/
// init
document.addEventListener("DOMContentLoaded", init);

// functions
function init() {
  // token checker
  
  body = document.getElementById("root");
  binder();
  
  chrome.storage.local.get("IsTokenProvided", function (result) {
    if (result["IsTokenProvided"] == undefined) {
      chrome.storage.local.set({ "IsTokenProvided": false });
      return;
    }
    IsTokenProvided = result["IsTokenProvided"];
    chrome.storage.local.get("Lichess-Token", function (result) {
      if (result["Lichess-Token"] == undefined) {
        chrome.storage.local.set({ "Lichess-Token": "" });
        return;
      }
      alert(result["Lichess-Token"]);
      token = result["Lichess-Token"];
    });
  });
// elements injection
//   body.appendChild(inputToken);
//   body.appendChild(SubmitButton);
//   body.appendChild(winRange);


// win input
inputToken.value = token;


}



function binder(){
  digitalRepresentationt = document.getElementById("digitalRepresentationt");
  inputToken = document.getElementById("token");
  SubmitButton = document.getElementById("submit");
  winRange = document.getElementById("winRange");
  document.getElementById("pin").onclick = pin;
  document.getElementById("popup").onclick = popUp;
  document.getElementById("otherTab").onclick = otherTab;
  winRange.addEventListener('mousedown', (event) => event.preventDefault());
  winRange.addEventListener('touchstart', (event) => event.preventDefault());
  winRange.addEventListener('keydown', (event) => event.preventDefault());
  SubmitButton.onclick = setToken;
}

function setToken() {
  chrome.storage.local.set({ "Lichess-Token": inputToken.value });
  chrome.storage.local.set({ "IsTokenProvided": true });
  alert("token value =" +inputToken.value);
  0
}

function updateWinRange(blackRate) {

}

function pin() {
  alert("pin")
}
function popUp() {
  alert("popUp")
}
function otherTab() {
  alert("other Tab")
}
