document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'bender',
            img : 'images/bender.png'
        },
        {
            name: 'blank',
            img : 'images/blank.png'
        },
        {
            name: 'homer',
            img : 'images/homer.png'
        },
        {
            name: 'ironman',
            img : 'images/ironman.png'
        },
        {
            name: 'mando',
            img : 'images/mando.png'
        },
        {
            name: 'mario',
            img : 'images/mario.png'
        },
        {
            name: 'walter',
            img : 'images/walter.png'
        },
        {
            name: 'white',
            img : 'images/white.png'
        },
        {
            name: 'bender',
            img : 'images/bender.png'
        },
        {
            name: 'blank',
            img : 'images/blank.png'
        },
        {
            name: 'homer',
            img : 'images/homer.png'
        },
        {
            name: 'ironman',
            img : 'images/ironman.png'
        },
        {
            name: 'mando',
            img : 'images/mando.png'
        },
        {
            name: 'mario',
            img : 'images/mario.png'
        },
        {
            name: 'walter',
            img : 'images/walter.png'
        },
        {
            name: 'white',
            img : 'images/white.png'
        }

    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector("#result");
    const triesDisplay = document.querySelector("#attempts");
    let tries = 0;
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    

    /********   CREATES THE BOARD  ********/
    function createBoard()
    {
        for(let i = 0 ; i <cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }

    }
      /********   CHECK FOR MATCHED  ********/
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(optionOneId == optionTwoId) 
        {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('You have clicked the same image!');
        }
        else if(cardsChosen[0] === cardsChosen[1])
        {
            alert('You have found a match!!')
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen[0]);
            cardsWon.push(cardsChosen[1]);
        }else
        {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            tries++;
            alert('Sorry, those cards did not match :( ... Try again!');
        }
        cardsChosen = [];
        cardsChosenId = [];

        resultDisplay.textContent = cardsWon.length/2;

        triesDisplay.textContent = tries;

        if(cardsWon.length === cardsArray.length/2){
            resultDisplay.textContent = 'CONGRATS!!! YOU HAVE FOUND ALL OF THE MATCHES'
        }

    }
   

        /********   FLIPS THE CARD  ********/

        function flipCard(){
            var cardId = this.getAttribute('data-id');
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if(cardsChosen.length === 2){
                setTimeout(checkForMatch, 500);
            }
        }

    createBoard();


});