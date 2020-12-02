// state = {
//   gameTitle: 'Rock, Paper, Scissors',
//   choicePrompt: "Click your choice below.",
//   playerScore: 0,
//   computerScore: 0,
//   roundWinner: '',
//   choices: [ "Rock", "Paper", "Scissors" ],
// };
// 
// const determineWinner = (playerChoice, computerChoice) => {
//   if(playerChoice == "Rock") {
//     if(computerChoice == "Paper") {winner = 'computer'}
//     if(computerChoice == "Scissors") {winner = 'player'}
//   };
// };
// 
// 
// const renderChoices = (choices) => {
//   choiceStr = '';
//   choices.forEach = (choice) => {
//   choiceStr += `<div>${choice}</div>`;
//   };
//   return choiceStr;
// };
// 
// const render = () => {
//   const {gameTitle, choicePrompt, playerScore, computerScore, roundWinner, choices} = state;
//   document.getElementById("game").innerHTML = `<h1>${gameTitle}</h1>
//                                                <p>${choicePrompt}</p>
//                                                <div>${renderChoices(choices)}</div>`;
//   renderChoices(choices);
// };
// 
// render();
//   

let state = {
  message: 'Welcome to Rock, Paper, Scissors',
  gameStatusMessage: 'Please select an option',
  gameResultMessage: '',
  choices: ["Rock", "Paper", "Scissors"],
  wins: 0,
  losses: 0,
  ties: 0,
};

const getHistory = () => {
  let htmlString = "<div>";
  htmlString += `<div>Wins: ${state.wins}, Losses: ${state.losses}, Ties: ${state.ties}</div>`;
  htmlString += "</div>";
  return htmlString;
};

// has no params, returns a string
const getHeader = () => {
  const { message, gameStatusMessage, gameResultMessage } = state;
  let htmlString = "<div class='message'>"; 
  htmlString += `<h1>${message}</h1>`;
  htmlString += `<h3>${gameStatusMessage}</h3>`;
  htmlString += `<h3>${gameResultMessage}</h3>`;
  htmlString += "</div>";
  return htmlString;
};

//  takes an integer and returns an integer (0-2)
const rand = (num) => Math.floor(Math.random() * num); 

// takes two integers and return integer 1 if player wins, -1 if computer wins, and 0 if tie
const getGameResult = (playerChoiceIndex, computerChoiceIndex) => {
  if (playerChoiceIndex === computerChoiceIndex) {
    return 0;
  }
  // player loss
  if ( 
    (playerChoiceIndex === 0 && computerChoiceIndex === 1) ||
    (playerChoiceIndex === 1 && computerChoiceIndex === 2) ||
    (playerChoiceIndex === 2 && computerChoiceIndex === 0)
  ) {
    return -1;
  }
  return 1;
};

// takes an integer and returns ...
const handleClick = (playerChoiceIndex) => {
  const {choices} = state;
  const playerChoice = choices[playerChoiceIndex];
  const computerChoiceIndex = rand(choices.length);
  const computerChoice = choices[computerChoiceIndex];

  const gameResult = getGameResult(playerChoiceIndex, computerChoiceIndex);

  if(gameResult === 0) {
    state.gameResultMessage = 'Tie';
    state.ties += 1;
  } else if(gameResult === 1) {
    state.gameResultMessage = 'Win';
    state.wins += 1;
  } else if(gameResult === -1) {
    state.gameResultMessage = 'Loss';
    state.losses += 1;
  }

  state.gameStatusMessage = `Player choice: ${playerChoice}, Computer choice: ${computerChoice}`;

  render();
};

// has no params and returns a string
const getChoices = () => {
  const { choices } = state;
  let choicesHTMLStringArray = choices.map((choice, index) => {
    return `<div class='choice' onclick='handleClick(${index})'>${choice}</div>`;
  });
  let choicesHTMLString = choicesHTMLStringArray.join("");
  let htmlString = "<div class='choices'>"; 
  htmlString += choicesHTMLString;
  htmlString += "</div>";
  return htmlString;
};

// takes no arguments and returns undefined
const render = () => {
  let htmlString = '<div>';
  htmlString += getHeader();
  htmlString += getChoices();
  htmlString += getHistory();
  htmlString += "</div>";
  let appDiv = document.getElementById('app');
  appDiv.innerHTML = htmlString;
};

render();
console.log("rps loaded")


