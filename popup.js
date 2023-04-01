

/*


*/
// init
document.addEventListener("DOMContentLoaded", init);

// functions
 async function init() {
  // token checker
  
  
  binder();
  token = await MyStorage.Get("Lichess-Token");
  if(token == undefined){
    alert("Provide a token!");
  }



}



function binder(){
  
  body = document.getElementById("root");
  digitalRepresentationt = document.getElementById("digitalRepresentationt");
  inputToken = document.getElementById("token");
  SubmitButton = document.getElementById("submit");
  winRange = document.getElementById("winRange");
  
  // disable winrange
  winRange.addEventListener('mousedown', (event) => event.preventDefault());
  winRange.addEventListener('touchstart', (event) => event.preventDefault());
  winRange.addEventListener('keydown', (event) => event.preventDefault());
  // listeners
  document.getElementById("pin").onclick = pin;
  document.getElementById("popup").onclick = popUp;
  document.getElementById("otherTab").onclick = otherTab;
  SubmitButton.onclick = setToken;
}

function setToken() {
  if(inputToken.value == undefined || inputToken.value == "" || inputToken.value == "undefined"){
    alert("Invalid token!")
    return;
  }
  chrome.storage.local.set({ "Lichess-Token": inputToken.value });
  chrome.storage.local.set({ "IsTokenProvided": true });
  alert("token value =" +inputToken.value);
  
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
