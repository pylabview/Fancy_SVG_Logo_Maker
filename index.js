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
        name: 'email',
        message: "Enter color text (color or HEX value): ",
        default: () => {},
        validate: (color) => new cliInputValidation(color, 
            ` --> Try again, ${color} is not valid!!`).valColor(),
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your the project Title:',
        default: () => {},
        validate: (title) => checkTextLength(title,1,"The Title must be at least one word")
    }
    ,
    {
        type: 'editor',
        name: 'description',
        message:'*** Enter Project description: ',
        default: () => {},
        validate: (description) => checkTextLength(description,10,"The Description must be at least ten word")
    },
    {
        type: 'editor',
        name: 'installation_instructions',
        message: 'Enter installation instructions: ',
        default: () => {},
        validate: (installation_instructions) => 
                    checkParagraphLines(installation_instructions,1,"Must be at least one line")
    },
    {
        type: 'list',
        message: 'Enter license type',
        name: 'license_type',
        default: 'MIT',
        choices: ['MIT',
                  'Apache_v2.0', 
                    'GNU_v3.0', 
                    'ISC',
                    'BSL_1.0',],
      },
      {
          type: 'editor',
          name: 'usage',
          message: 'Enter usage information: ',
          default: () => {},
          validate: (installation_instructions) => 
                      checkParagraphLines(installation_instructions,1,"Must be at least one line")
      },
      {
          type: 'editor',
          name: 'credits',
          message: 'Enter credits information: ',
          default: () => {},
          validate: (credits) => 
                      checkParagraphLines(credits,1,"Must be at least one line")
      },
      
]).then((answer) => {
    if(DEBUG) {console.log(answer)};
    const readme = generateREADME(answer);
    fs.writeFile('README.md', readme, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );

});