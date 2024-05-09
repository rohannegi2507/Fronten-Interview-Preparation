const PLAYER = (function(){
    let player = document.getElementById("player");

    const initPlayer = () => {
        player.value = 0;
        player.innerText = 0;
        player.setAttribute("class", "player");
    }

    const changePlayerValue = (value) => {
        player.value = value;
        player.innerText = value;
    }

    const getPlayerValue = () => {
        let currentPlayerVal = player.value;
        return currentPlayerVal;
    }

    return {
        changePlayerValue: changePlayerValue,
        getPlayerValue: getPlayerValue,
        initPlayer: initPlayer
    }
})();
