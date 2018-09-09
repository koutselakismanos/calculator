window.onload = () => {
    main();
    backgroundRun();
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    generateRandomSymbols();
    draw();
}


function main() {
    let buttons = document.querySelectorAll('.grid-block div');
    for (let i of buttons) {
        i.addEventListener("click", (e) => {
            result(i.innerHTML);
        })
    }
}

const htmlResult = document.querySelector('.result');
const htmlContext = document.querySelector('.context');
let content = '0';
let regexNumber = /[*-/+]/;

function result(input) {
    if (input === '=') {
        try {
            content = decode(content.toString())
            content = eval(content)
            if (content === undefined) throw htmlResult.textContent = '0';
            htmlResult.textContent = content;
        }
        catch{
            console.log('error');
        }
    }
    else if (input === 'AC') {
        content = '0';
        htmlResult.textContent = '0';
    }
    else if (input === '%') {
        // try {
        content = decode(content.toString())
        content = eval(content)
        content = (content / 100);
        htmlResult.textContent = content;
    }
    else if (input === '+/-' && content != '') {
        content = '-(' + content + ')';
        htmlResult.textContent = content;
    }
    else {
        if (input !== '+/-' && content[content.length - 1] === ')' && regexNumber.test(input)) {
            content += input;
            htmlResult.textContent = content;
        }
        else if (content[content.length - 1] !== ')') {
            content += input;
            htmlResult.textContent = content;
        }
    }

}

function decode(expression) {
    expression = expression.replace(/([*/+-])+/gi, '$1');
    expression = expression.replace(/^[*/]/gi, '');
    expression = expression.replace(/[+/*-]$/gi, ' ');
    return expression;
}