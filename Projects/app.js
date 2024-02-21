let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");


const genComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const ranIndx = Math.floor(Math.random() * 3);
    return options[ranIndx];
};

const draw = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "Purple";

};
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin == true)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }    
    else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>
{
    const compChoice = genComputerChoice();
    if (userChoice == compChoice)
    {
        draw();
    }
    else {
        let userWin = true;
        if (userChoice == "rock")
        {
            if (compChoice == "scissor")
            {
                userWin = true;
            }
            else {
                userWin = false;
            }
        }
        else if (userChoice == "paper")
        {
            if (compChoice == "rock")
            {
                userWin = true;
            }
            else {
                userWin = false;
            }
        }
        else {
            if (compChoice == "paper")
            {
                userWin = true;
            }
            else {
                userWin = false;
            }
        }
        showWinner(userWin,userChoice,compChoice);

    }
}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
