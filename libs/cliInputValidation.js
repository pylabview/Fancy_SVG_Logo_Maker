const cssColors = require('./csscolors');

// Regex
COLOR_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
THREE_CHARS = /[a-zA-Z0-9]{3}/;

class cliInputValidation{
    constructor(txt, message){  
        this.txt = txt;
        this.message = message;
    }

    valTxt(){
        if(this.txt.length> 0 && this.txt.length <= 3){
            return true;            
        }else{
            console.log(this.message);
            return false;
        }
    }
    valHexColor(){
        if((COLOR_REGEX.test(this.txt))){
            return true;            
        }else{
            return false;
        }
    }
    valColorStrName(){
        if(!(cssColors[this.txt]=== undefined)){
                    return true;            
                }else{
                    return false;
                }
    }

    valColor(){

        if(this.valHexColor() || this.valColorStrName()){
            return true;            
        }else{
            console.log(this.message);
            return false;
    
    }

    }
}

module.exports = cliInputValidation;
console.log(!(cssColors['Gray ']=== undefined));