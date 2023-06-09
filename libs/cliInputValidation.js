const cssColors = require('./csscolors');
// Debug flag
const DEBUG = false;
// Regex
COLOR_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
THREE_CHARS = /[a-zA-Z0-9]{3}/;

class cliInputValidation{
    constructor(txt, message){  
        this.txt = txt.trim().charAt(0).toUpperCase() + txt.slice(1);
        this.message = message;
        if (DEBUG) console.log(` From Class ${this.constructor.name}:`,this.txt);
    }

    valTxt(){
        if (DEBUG) 
        {
            console.log("txt length", this.txt.length);
            console.log("this.txt.length> 0", this.txt.length> 0)
            console.log("this.txt.length <= 3", this.txt.length<= 3)
        }
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



module.exports = {cliInputValidation};