let canvas;
let ctx;
// let symbols = ['+', '-', '/', '*', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let symbols = ['+', '-', '/', '*', '0', '1'];
let symbolsLen = symbols.length;
let symbolObjectArray = [];

window.onload = () =>
{
    main();
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    // draw();
    generateRandomSymbols();
    draw();
}

window.addEventListener('resize', (e) =>
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // draw();
    generateRandomSymbols();
});

function main()
{
    let canvas = document.createElement('canvas');
    canvas.id = 'myCanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.appendChild(canvas);
}

function draw()
{
    requestAnimationFrame(draw);
    ctx.fillStyle = '#292F36';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < symbolObjectArray.length; i++)
    {
        // symbolObjectArray[i].posX += 0.5;
        // symbolObjectArray[i].posY += 0.5;
        ctx.shadowColor = symbolObjectArray[i].fillStyle;
        ctx.shadowBlur = 20;
        ctx.fillStyle = symbolObjectArray[i].fillStyle;
        ctx.fillText(symbolObjectArray[i].symbolType, symbolObjectArray[i].posX, symbolObjectArray[i].posY);
    }
}


function generateRandomSymbols()
{
    ctx.font = '30px Monospace';
    for (let i = 0; i < 100; i++)
    {
        if (i % 2 === 0)
        {
            let [randomSymbolType, randomPositionX, randomPositionY] = [symbols[Math.floor(Math.random() * symbolsLen)],
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight];

            ctx.fillStyle = '#FF6B6B';
            ctx.fillText(randomSymbolType, randomPositionX, randomPositionY);
            symbolObjectArray.push({ symbolType: randomSymbolType, fillStyle: '#FF6B6B', posX: randomPositionX, posY: randomPositionY });
        }
        else
        {
            let [randomSymbolType, randomPositionX, randomPositionY] = [symbols[Math.floor(Math.random() * symbolsLen)],
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight];

            ctx.fillStyle = '#4ECDC4';
            ctx.fillText(randomSymbolType, randomPositionX, randomPositionY);
            symbolObjectArray.push({ symbolType: randomSymbolType, fillStyle: '#4ECDC4', posX: randomPositionX, posY: randomPositionY });
        }
    }
}