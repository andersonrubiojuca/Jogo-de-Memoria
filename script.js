let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//ordem aleatoria de cores
let shufferOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];


    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
};

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
};

//checa se os botou clicados esta em ordem
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê Acertou! Iniciando próximo nível!`)
        nextLevel();
    }
};

//clique
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

};

//funcao que retorna a cor
let createColorElement = (color) => {
    switch (color) {
        case 0:
            return green;
        case 1:
            return red;
        case 2:
            return yellow;
        case 3:
            return blue;
        default:
            console.error('algo muito doido aconteceu!!!')
            break;
    }
};

//proximo nivel
let nextLevel = () => {
    score++;
    shufferOrder();
};

//game over
let gameOver = () => {
    alert(`Pontuação ${score}!\nVocê perdeu!\nClique em OK para jogar novamente`);
    order = 0;
    clickedOrder = [];

    playGame();
};

// iniciar o jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando um novo jogo!');

    score = 0;
    nextLevel();
};
/*
green.addEventListener('click', click(0));
red.addEventListener('click', click(0));
yellow.addEventListener('click', click(0));
blue.addEventListener('click', click(0));
*/

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();