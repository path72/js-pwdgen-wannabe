//###################################################### 
//

var usrName, 
    usrSurName, 
    usrColor, 
    usrSuffix, 
    pwdReturn;

usrName     = prompt('Scrivi il tuo nome:');
usrSurName  = prompt('Scrivi il tuo cognome:');
usrColor    = prompt('Qual è il tuo colore preferito?');
usrSuffix   = 19;
pwdReturn   = usrName + usrSurName + usrColor + usrSuffix;

document.getElementById('pwd_return').innerHTML = pwdReturn;

//###################################################### 
//


