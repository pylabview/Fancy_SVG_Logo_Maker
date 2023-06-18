// node js modules
const inquirer = require("inquirer");
const fs = require("fs");
// Custom modules
const {cliInputValidation} = require("./libs/cliInputValidation");
// --- Importing CLasses ---
const Circle = require("./libs/circle");
const Triangle = require("./libs/triangle");
const Square = require("./libs/square");
// DEBUG Flag GLobal
const DEBUG = false;

inquirer.prompt([
    {
        type: 'input',
        name: 'txt_input',
        message: "Enter Text (max. 3 chars): ",
        default: () => {},
        validate: (txt_input) => {
            const userInput = new cliInputValidation(txt_input,
            ` --> Please enter three chars!!`);
            return userInput.valTxt();
        }
    },
    {
        type: 'input',
        name: 'txt_color',
        message: "Enter color text (color or HEX value): ",
        default: () => {},
        validate: (color) => new cliInputValidation(color, 
            ` --> Try again, ${color} is not valid!!`).valColor(),
    },

    {
        type: 'list',
        message: 'Enter shape Logo (Default is Circle): ',
        name: 'shape_logo',
        default: 'Circle',
        choices: ['Circle',
                  'Triangle', 
                    'Square',
    ] 
      },
      {
        type: 'input',
        name: 'shape_color',
        message: "Enter color shape (color or HEX value): ",
        default: () => {},
        validate: (color) => new cliInputValidation(color, 
            ` --> Try again, ${color} is not valid!!`).valColor(),
    },
      
]).then((answer) => {
    if(DEBUG) {console.log(answer)};
    if(answer['shape_logo'] === 'Circle'){
        const newCircle = new Circle(answer['txt_input'],
                                     answer['txt_color'], 
                                     answer['shape_color'],);
         newCircle.makeSVG();
         if (DEBUG) console.log(newCircle.render());
         if (DEBUG) console.log(newCircle.renderTxt());
    }else if(answer['shape_logo'] === 'Square'){
        const newSquare = new Square(answer['txt_input'],
        answer['txt_color'], 
        answer['shape_color'],);
        newSquare.makeSVG();
        if(DEBUG) console.log(newSquare.render());
        if (DEBUG) console.log(newSquare.renderTxt());

    }else if (answer['shape_logo'] === 'Triangle'){
        const newTriangle = new Triangle(answer['txt_input'],
        answer['txt_color'], 
        answer['shape_color'],);
        newTriangle.makeSVG();
        if (DEBUG) console.log(newTriangle.render());
        if (DEBUG) console.log(newTriangle.renderTxt());
    }

});