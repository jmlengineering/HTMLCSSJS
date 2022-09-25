const cardArray = [
    {
        cardName: 'mermaid',
        cardImg: 'img/mermaid.png'
    },
    {
        cardName: 'rainbow',
        cardImg: 'img/rainbow.png'
    },
    {
        cardName: 'unicorn',
        cardImg: 'img/unicorn.png'
    },
    {
        cardName: 'alpaca',
        cardImg: 'img/alpaca.png'
    },
    {
        cardName: 'frog',
        cardImg: 'img/frog.png'
    },
    {
        cardName: 'butterfly',
        cardImg: 'img/butterfly.png'
    },
    {
        cardName: 'moon',
        cardImg: 'img/moon.png'
    },
    {
        cardName: 'mermaid',
        cardImg: 'img/mermaid.png'
    },
    {
        cardName: 'rainbow',
        cardImg: 'img/rainbow.png'
    },
    {
        cardName: 'unicorn',
        cardImg: 'img/unicorn.png'
    },
    {
        cardName: 'alpaca',
        cardImg: 'img/alpaca.png'
    },
    {
        cardName: 'frog',
        cardImg: 'img/frog.png'
    },
    {
        cardName: 'butterfly',
        cardImg: 'img/butterfly.png'
    },
    {
        cardName: 'moon',
        cardImg: 'img/moon.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('grid')

function createBoard() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement("img")
        console.log(card, i)
    }
}
createBoard()
