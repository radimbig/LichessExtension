function MainBoardDetector() {
  const MainBoard = document.querySelector(".round__app__board.main-board");
  if (!MainBoard) {
    return;
  }
  alert("Main board was detected")
  const chessTable = MainBoard.querySelector("cg-container");
  if(!chessTable){
    return;
  }
  alert(`Chess table was detected style: width ${chessTable.style.width}  height ${chessTable.style.height}`);
}

window.onload = MainBoardDetector;