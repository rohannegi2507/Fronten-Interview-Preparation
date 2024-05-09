const ROLL_DICE = (function () {
    const dice = document.getElementById("dice");
    const numberOndice = document.getElementById("numberOnDice");

    const initDice = () => {
        dice.addEventListener('click', () => rollDice());
        numberOndice.innerText = 'Number on Dice: '
    }

    const rollDice = () => {
        let playerCurrentValue = PLAYER.getPlayerValue();
        let randomDiceNumber = Math.floor(Math.random() * 6) + 1;
        numberOndice.innerText = `Number on Dice:  ${randomDiceNumber}`;
        let totalPositonNumber = playerCurrentValue + randomDiceNumber;
        let finalPosition = SNAKE_AND_LADDER.calculateFinalPosition(totalPositonNumber);
        if (totalPositonNumber <= 100) {
            if (finalPosition) {
                PLAYER.changePlayerValue(finalPosition);
                RENDER_BOARD.highLightNumberBox(playerCurrentValue, finalPosition);
                if (finalPosition < totalPositonNumber) {
                    alert(`Stung By Snake!!! moving down to ${finalPosition}`);
                } else {
                    alert(`congratulations hit a ladder!! moving up to ${finalPosition}`);
                }
            } else {
                PLAYER.changePlayerValue(totalPositonNumber);
                RENDER_BOARD.highLightNumberBox(playerCurrentValue, totalPositonNumber);
                if (totalPositonNumber == 100) {
                    let r = confirm(`Congratulations you won the game`);
                    if (r) {
                        INITIALIZE_GAME.initGame();
                    }
                }
            }
        }
    }

    return {
        initDice: initDice
    }
})()