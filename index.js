const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js')

const questions = [
    {
        type: 'input',
        message: 'Enter up to three characters for your logo',
        name: 'txt',
    },
    {
        type: 'input',
        message: 'Enter a color for your logos text',
        name: 'txtColor',
    },
    {
        type: 'list',
        message: 'Choose a shape for your logo',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        message: 'Enter a color for your shape',
        name: 'shapeColor',
    },
]

function writeFile(filename, data) {
    fs.appendFile(`${filename}.svg`, data, (err) => err ? console.log(err) : console.log('File created!'))
}

function init() {
    inquirer.prompt(questions)
    .then(ans => {
        if(ans.shape == 'Circle') {
            let media = new shapes.Circle(ans.shapeColor, ans.txt, ans.txtColor)
            writeFile('logo', media.render())
        }else if (ans.shape == 'Triangle') {
            let media = new shapes.Triangle(ans.shapeColor, ans.txt, ans.txtColor)
            writeFile('logo', media.render())
        }else if (ans.shape == 'Square') {
            let media = new shapes.Square(ans.shapeColor, ans.txt, ans.txtColor)
            writeFile('logo', media.render())
        }
    })
}

init();