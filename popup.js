// global variables
let body;
let IsTokenProvided;
let token;

// html elements
let inputToken = document.createElement("input");
let SubmitButton = document.createElement("button");
let winRange = document.createElement("input");

//token input
inputToken.id = "token";
inputToken.type = "password";
// submit button
SubmitButton.id = "submit";
SubmitButton.addEventListener("onclick", setToken);
SubmitButton.textContent = "Submit token";
// win input
winRange.type = "range";
winRange.className = "win-range";
winRange.value = 50;
winRange.max = 100;
winRange.min = 0;
winRange.disabled = true;


// init
document.addEventListener("DOMContentLoaded", init);

// functions
function init() {
  // token checker
  body = document.getElementById("root");
  document.getElementById("pin").addEventListener("onclick", pin);
  document.getElementById("popup").addEventListener("onclick", popUp);
  document.getElementById("otherTab").addEventListener("onclick", otherTab);
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
      token = result["Lichess-Token"];
    });
  });
// elements injection
  body.appendChild(inputToken);
  body.appendChild(SubmitButton);
  body.appendChild(winRange);

  
  inputToken.value = token;
}
function setToken() {
  chrome.storage.local.set({ "Lichess-Token": inputToken.value });
  chrome.storage.local.set({ "IsTokenProvided": true });
  alert("Token set");
}

function updateWinRange(blackRate) {

}

function pin() {}
function popUp() {}
function otherTab() {}
