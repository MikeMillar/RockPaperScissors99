// All code should be written in this file.
// Player one move types - ex: rock, paper, scissors
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

// Player one move str values
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

// Player two move types
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

//player two move str values
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

// Game constant values
const P1 = 'Player One';
const P2 = 'Player Two';
const TIE = 'Tie';
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';


// Takes all 3 moves and make sure all types are valid
const validTypes = (t1, t2, t3) => validType(t1) && validType(t2) && validType(t3);
// Takes move and verified its valid
const validType = (type) => type === ROCK || type === PAPER || type === SCISSORS;
// Takes all move values, verified they match minimums, but don't exceed max
const validValues = (v1, v2, v3) => v1 >=1 && v2 >=1 && v3 >=1 && v1 + v2 + v3 <= 99;


// Verified player, moves, and values
const setPlayerMoves = (player, m1t, m1v, m2t, m2v, m3t, m3v) => {
  // Checks values have been set for move type/str value, returns if not.
  if (!m1t || !m1v || !m2t || !m2v || !m3t || !m3v) {
    return;
  }
  // Checks all move types, if invalid it returns.
  if (!validTypes(m1t, m2t, m3t)) {
    return;
  }
  // Checks all move values, if invalid it returns.
  if (!validValues(m1v, m2v, m3v)) {
    return;
  }

  // Checks for player one value and sets move types/str values.
  if (player === P1) {
    playerOneMoveOneType = m1t;
    playerOneMoveOneValue = m1v;
    playerOneMoveTwoType = m2t;
    playerOneMoveTwoValue = m2v;
    playerOneMoveThreeType = m3t;
    playerOneMoveThreeValue = m3v;
  }
  // Checks for player two value and sets move types/str values.
  if (player === P2) {
    playerTwoMoveOneType = m1t;
    playerTwoMoveOneValue = m1v;
    playerTwoMoveTwoType = m2t;
    playerTwoMoveTwoValue = m2v;
    playerTwoMoveThreeType = m3t;
    playerTwoMoveThreeValue = m3v;
    }
};

const randomMove = () => {
  let moveType = Math.ceil(Math.random() * 3);
  let move;
  if (moveType === 1) {
    move = ROCK;
  } else if (moveType === 2) {
    move = PAPER;
  } else if (moveType === 3) {
    move = SCISSORS;
  } else {
    return;
  }
  return move;
}

const setComputerMoves = () => {
  // Gets randomMove value and sets value to round move types
  playerTwoMoveOneType = (randomMove());
  playerTwoMoveTwoType = (randomMove());
  playerTwoMoveThreeType = (randomMove());

  // Calculates random move str values that sum to 99
  playerTwoMoveOneValue = Math.ceil(Math.random() * 97);
  playerTwoMoveTwoValue = Math.ceil(Math.random() * (98 - playerTwoMoveOneValue));
  playerTwoMoveThreeValue = 99 - playerTwoMoveOneValue - playerTwoMoveTwoValue;
}


const getRoundWinner = (roundNumber) => {

}



/* Computer Random 1-99 idea:
m1v = Math.ceil(Math.Random() * 97);
m2v = Math.ceil(Math.random() * (98 - m1v));
m3v = 99 - m1v - m2v; */
