//Made 2 modules, gameBoard and displayController. Made a playerFactory which takes num of player, num corresponds to sign

const gameBoard = (() => {
    // gameBoard holds variables, gamearray and turn
    // gamearray is an array by default of zeros, will be replaced by num of player
    let gamearray = [0,0,0,0,0,0,0,0,0];
    let turn = 0;

    //play is a module function taking input of num and location, replaces zero by num
    const play = (num, location) => {
        if (gamearray[location] === 0) {
            gamearray[location] = num;
        }
    };

    //check is a function whick checks if someone won, returns player num or zero
    const check = () => {
        if (gamearray[0] === gamearray[1] && gamearray[1] === gamearray[2]) {
            if (gamearray[0] != 0) {return gamearray[0];}
        }
        if (gamearray[3] === gamearray[4] && gamearray[4] === gamearray[5]) {
            if (gamearray[3] != 0) {return gamearray[3];}
        }
        if (gamearray[6] === gamearray[7] && gamearray[7] === gamearray[8]) {
            if (gamearray[6] != 0) {return gamearray[6];}
        }
        if (gamearray[0] === gamearray[3] && gamearray[3] === gamearray[6]) {
            if (gamearray[0] != 0) {return gamearray[0];}
        }
        if (gamearray[1] === gamearray[4] && gamearray[4] === gamearray[7]) {
            if (gamearray[1] != 0) {return gamearray[1];}
        }
        if (gamearray[2] === gamearray[5] && gamearray[5] === gamearray[8]) {
            if (gamearray[2] != 0) {return gamearray[2];}
        }
        if (gamearray[0] === gamearray[4] && gamearray[4] === gamearray[8]) {
            if (gamearray[0] != 0) {return gamearray[0];}
        }
        if (gamearray[2] === gamearray[4] && gamearray[4] === gamearray[6]) {
            if (gamearray[2] != 0) {return gamearray[2];}
        }
        return 0;
    };

    //reset function resets board and turns
    const reset = () => {
        gamearray = [0,0,0,0,0,0,0,0,0];
        turn = 0;
    };


    return {play, check, reset};
})();



const displayController = (() => {
    const updateDisplay = () => {

    };
    return {updateDisplay};
})();



const playerFactory = (num) => {
    return {num};
};
