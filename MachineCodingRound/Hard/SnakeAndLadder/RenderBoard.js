const RENDER_BOARD = (function(){
    let ludoBoard = document.getElementById("ludoBoard");

    const createBoard = () => {
        let rows=10,columns=10;
        let flag = true;
        for(let i= rows; i >=1 ; i--) {
            let ludoRow = document.createElement("ludoRow");
            ludoRow.setAttribute("class", "ludoRow");
            for(let j = 1; j <= columns ; j++) {
                let boxNumber;
                if(!flag) {
                    boxNumber = (i-1) * 10 + j
                } else {
                    boxNumber = ((i-1)*10) + 10 - (j-1)
                }
                 
                let ludoNumber = document.createElement("div");
                ludoNumber.setAttribute("class", "ludoNumber");
                ludoNumber.setAttribute("id", boxNumber);
                ludoNumber.innerText = boxNumber;
                ludoRow.appendChild(ludoNumber);
            }
            flag=!flag
            ludoBoard.appendChild(ludoRow);
        }
    }

    createBoard();
    SNAKE_AND_LADDER.createLadderSanke()

    const highLightNumberBox = (prevNumber, currentNumber) => {
        let prevNumBox = document.getElementById(prevNumber); 
        let currentNumberBox = document.getElementById(currentNumber); 
        if(prevNumBox) {
            prevNumBox.classList.remove("activeBox");
        }
        if(currentNumberBox) {
            currentNumberBox.classList.add("activeBox");
        }
    }

    return {
        highLightNumberBox: highLightNumberBox,
        createBoard: createBoard
    }
})()