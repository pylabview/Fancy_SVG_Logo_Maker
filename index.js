// node js modules
const inquirer = require("inquirer");
const fs = require("fs");
// Custom modules
const cliInputValidation = require("./libs/cliInputValidation");
// DEBUG Flag GLobal
const DEBUG = true;

inquirer.prompt([
    {
        type: 'input',
        name: 'txt_input',
        message: "Enter Text (max. 3 chars): ",
        default: () => {},
        validate: (txt_input) => new cliInputValidation(txt_input,
            ` --> Please enter three chars!!`).valTxt()
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
        name: 'txt_shape_color',
        message: "Enter color shape (color or HEX value): ",
        default: () => {},
        validate: (color) => new cliInputValidation(color, 
            ` --> Try again, ${color} is not valid!!`).valColor(),
    },
     
]).then((answer) => {
    if(DEBUG) {console.log(answer)};
    const readme = generateREADME(answer);
    fs.writeFile('README.md', readme, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );

});