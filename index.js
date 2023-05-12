const fs = requre('fs')
const inquirer = require('inquirer');
const shapes = require('./lib/shapes')

const questions = [
    {
        type: 'input',
        message: 'Enter up to three characters for your logo',
        name: 'logoChr',
    },
    {
        type: 'input',
        message: 'Enter a color for your logos text',
        name: 'logoColor',
    },
    {
        type: 'list',
        message: 'Choose a shape for your logo',
        name: 'logoShape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        message: 'Enter a color for your shape',
        name: 'shapeColor',
    },
]

function init() {
    inquirer.prompt(questions)
    .then(ans => {
        
    })
}

init();