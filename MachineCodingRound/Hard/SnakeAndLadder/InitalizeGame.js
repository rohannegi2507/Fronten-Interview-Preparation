const INITIALIZE_GAME = (function() {
    const initGame = () => {
        PLAYER.initPlayer();
        ROLL_DICE.initDice();
    }
    initGame();
    return {
        initGame: initGame
    }
})();
