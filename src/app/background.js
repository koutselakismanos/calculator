let canvas;
let ctx;

const maxZ = 30;
const symbols = ['+', '-', '/', '*', '0', 'x', 'y', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbolsLen = symbols.length;
let symbolArray = [];

Number.prototype.mapNumber = function (in_min, in_max, out_min, out_max)
{
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

class Symbol
{
    constructor(symbolType, fillStyle, posX, posY, posZ)
    {
        this.symbolType = symbolType;
        this.fillStyle = fillStyle;
        this.posX = posX;
        this.posY = posY;
        this.posZ = posZ;
    }

    move() 
    {
        this.posY -= this.posZ.mapNumber(0, maxZ, 0, 1);
        if (this.posY <= 0)
            this.posY = window.innerHeight + 60;
    }

    drawSymbol()
    {
        this.move();
        ctx.font = `${this.posZ}px Monospace`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.fillStyle;
        ctx.fillStyle = this.fillStyle;
        ctx.fillText(this.symbolType, this.posX, this.posY);
    }
}

// window.onload = () =>
// {
//     backgroundRun();
//     canvas = document.getElementById('myCanvas');
//     ctx = canvas.getContext('2d');
//     // draw();
//     generateRandomSymbols();
//     draw();
// }


window.addEventListener('resize', (e) =>
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateRandomSymbols();
});

function backgroundRun()
{
    let canvas = document.createElement('canvas');
    canvas.id = 'myCanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.appendChild(canvas);
    return 'meow';
}

function draw()
{
    requestAnimationFrame(draw);
    ctx.fillStyle = '#292F36';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < symbolArray.length; i++)
    {
        symbolArray[i].drawSymbol();
    }
}

function generateRandomSymbols()
{
    symbolArray = [];
    for (let i = 0; i < 300; i++)
    {
        if (i % 2 === 0)
        {
            let [randomSymbolType, randomPositionX, randomPositionY, randomPositionZ] = [symbols[Math.floor(Math.random() * symbolsLen)],
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight,
            Math.floor(Math.random() * maxZ)];

            symbolArray.push(new Symbol(randomSymbolType, 'hsl(0, 100%, 71%)', randomPositionX, randomPositionY, randomPositionZ));
        }
        else
        {
            let [randomSymbolType, randomPositionX, randomPositionY, randomPositionZ] = [symbols[Math.floor(Math.random() * symbolsLen)],
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight,
            Math.floor(Math.random() * maxZ)];

            symbolArray.push(new Symbol(randomSymbolType, 'hsl(176, 56%, 55%)', randomPositionX, randomPositionY, randomPositionZ));
        }
    }
}
