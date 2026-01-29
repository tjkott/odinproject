// Create the 2 players
const Player = (name, marker) => {
  return { name, marker };
};

// Gameboard Module - the game map
const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board; // to keep 'board' private

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  }; // return array

  // logic method syntax
  const placeMarker = (index, marker) => {
    if (board[index] === "") {
      // if nothing is there
      board[index] = marker;
      return true;
    } else {
      return false;
    }
  };

  return { getBoard, resetBoard, placeMarker }; // when function calle
})();

// 3. Game Controller - win/loss logic
const GameController = (function () {
  const players = [Player("Player 1", "X"), Player("Player 2", "O")];

  let currentPlayer = players[0];
  let gameOver = false;

  const switchPlayerTurn = () => {
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    console.log(`It's now ${currentPlayer.name}'s turn.`);
  };

  const getCurrentPlayer = () => currentPlayer;

  const checkWinner = () => {
    const board = Gameboard.getBoard();
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    return winConditions.some((condition) => {
      // if one of these conditions in the array is true
      const [a, b, c] = condition;
      return board[a] !== "" && board[a] === board[b] && board[a] === board[c];
    });
  };

  const playRound = (index) => {
    // 1. Prevent move if game is over or spot is taken
    if (gameOver) return;

    // Try to place the marker. Gameboard.placeMarker should return true if successful.
    const success = Gameboard.placeMarker(index, currentPlayer.marker);

    if (!success) {
      console.log("Spot already taken! Try again.");
      return;
    }

    // 2. Check for winner
    if (checkWinner()) {
      console.log(`Congratulations! ${currentPlayer.name} wins!`);
      gameOver = true;
      return;
    }

    // 3. Check for tie (No winner, and no empty spots left)
    if (!Gameboard.getBoard().includes("")) {
      console.log("It's a tie!");
      gameOver = true;
      return;
    }

    // 4. If no win or tie, switch turn
    switchPlayerTurn();
  };

  const restartGame = () => {
    Gameboard.resetBoard();
    currentPlayer = players[0];
    gameOver = false;
    console.log("Game Restarted. Player 1's turn.");
  };

  return { playRound, getCurrentPlayer, restartGame };
})();

GameController.playRound(0);
GameController.playRound(1);

const displayController = function () {};

