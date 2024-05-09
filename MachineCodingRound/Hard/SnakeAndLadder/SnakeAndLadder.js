const SNAKE_AND_LADDER = (function(){
    const calculateFinalPosition = (position) => {
        let finalPositon;
        switch(position) {
            //Ladder Cases
            case 9:
                finalPositon = 25;
                break;
            case 15:
                finalPositon = 40;
                break;
            case 34:
                finalPositon = 56;
                break;
            case 75:
                finalPositon = 93;
                break;
            //cases for snake
            case 17:
                finalPositon = 2;
                break;
            case 42:
                finalPositon = 23;
                break;
            case 99:
                finalPositon = 11;
                break;
        }
        return finalPositon;
    }

    const createLadderSanke = () => {
        createLadderSnake(9, "Ladder 1 start");
        createLadderSnake(15, "Ladder 2 start");
        createLadderSnake(34, "Ladder 3 start");
        createLadderSnake(75, "Ladder 4 start");

        createLadderSnake(25, "Ladder 1 end");
        createLadderSnake(40, "Ladder 2 end");
        createLadderSnake(56, "Ladder 3 end");
        createLadderSnake(93, "Ladder 4 end");

        createLadderSnake(17, "Snake 1 start");
        createLadderSnake(42, "Snake 2 start");
        createLadderSnake(99, "Snake 3 start");

        createLadderSnake(2, "Snake 1 end");
        createLadderSnake(23, "Snake 2 end");
        createLadderSnake(11, "Snake 3 end");
    }

    const createLadderSnake = (number, text) => {
        let numberBox = document.getElementById(number);
        let endNode = document.createElement("div");
        endNode.innerText = text;
        endNode.classList.add("ladderEnd");
        numberBox.appendChild(endNode)
    }

    return {
        calculateFinalPosition: calculateFinalPosition,
        createLadderSanke: createLadderSanke
    }
})()