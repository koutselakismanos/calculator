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
let content = '';

function result(input)
{
    if (input === '=')
    {
        content = decode(content)
        content = eval(content)
        htmlResult.textContent = content;
    }
    else if (input === 'AC')
    {
        content = '';
        htmlResult.textContent = '0';
    }
    else if (input === '%')
    {
        content = Math.presentage(content);
        //FIXME: FIX this
        htmlResult.textContent = '0';
    }
    else if (input === '+/-' && content != '')
    {
        content = '-(' + content + ')';
        // console.log(content);
        htmlResult.textContent = content;
    }
    else
    {
        if (input !== '+/-')
        {
            content += input;
            htmlResult.textContent = content;
        }
    }

}

function decode(expression)
{
    expression = expression.replace(/([*/+-])+/gi, '$1');
    expression = expression.replace(/^[*/]/gi, '');
    expression = expression.replace(/[+/*-]$/gi, ' ');
    return expression;
}