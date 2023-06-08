const cssColors = require('./csscolors');
// Regex
COLOR_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
THREE_CHARS = /[a-zA-Z0-9]{3}/

class cliInputValidation{
    constructor(txt, message){  
        this.txt = txt;
        this.message = message;
    }

    valTxt(){
        return THREE_CHARS.test(this.txt);
    }
    valHexColor(){
        return COLOR_REGEX.test(this.txt);
    }
    valColorName(){
        return !(cssColors[this.txt] === undefined);
    }

}

module.exports = cliInputValidation;
console.log(!(cssColors['Gray ']=== undefined));