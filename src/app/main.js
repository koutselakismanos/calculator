window.onload = () =>
{
    main();
    backgroundRun();
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    // draw();
    generateRandomSymbols();
    draw();
}


function main()
{
    let buttons = document.querySelectorAll('.grid-block div');
    for (let i of buttons)
    {
        i.addEventListener("click", (e) =>
        {
            result(i.innerHTML);
        })
    }
}

const htmlResult = document.querySelector('.result');
const htmlContext = document.querySelector('.context');
let context = '';

function result(input)
{
    if (input === '=')
    {
        context = eval(context)
        htmlResul.textContent = context;
    }
    else if (input === 'AC')
    {
        context = '';
        htmlResult.textContent = '0';
    }
    else if (input === '%')
    {
        context = Math.presentage(context);
        htmlResult.textContent = '0';
    }
    else if (input === '-' || input === '+' || input === '/' || input === '*')
    {
        context += input;
        context = eval(context)
        htmlResult.textContent = context;
    }
    else
    {
        context += input;
        htmlResult.textContent = context;
    }
}

