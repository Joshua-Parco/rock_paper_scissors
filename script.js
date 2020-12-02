state = {
  gameTitle: 'Rock, Paper, Scissors',
  choicePrompt: "Click your choice below.",
  playerScore: 0,
  computerScore: 0,
  roundWinner: '',
  choices: [ "Rock", "Paper", "Scissors" ],
};

// const determineWinner = (playerChoice, computerChoice) => {
//   if(playerChoice == "Rock") {
//     if(computerChoice == "Paper") {winner = 'computer'}
//     if(computerChoice == "Scissors") {winner = 'player'}
//   };
// };
// 

const renderChoices = (choices) => {
  choiceStr = '';
  choices.forEach = (choice) => {
  choiceStr += `<div>${choice}</div>`;
  };
  return choiceStr;
};

const render = () => {
  const {gameTitle, choicePrompt, playerScore, computerScore, roundWinner, choices} = state;
  document.getElementById("game").innerHTML = `<h1>${gameTitle}</h1>
                                               <p>${choicePrompt}</p>
                                               <div>${renderChoices(choices)}</div>`;
  renderChoices(choices);
};

render();
  

