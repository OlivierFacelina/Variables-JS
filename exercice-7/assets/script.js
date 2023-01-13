// Exo 7

let number1 = window.prompt("Entrez un premier nombre");
let number2 = window.prompt("Entrez un deuxième nombre");

number1 = Number(number1);
number2 = Number(number2);

let sum = number1 + number2;
let diff = number1 - number2;
let prod = number1 * number2;
let div = number1 / number2;   
let modulo = number1 % number2;

alert(`Somme : ${sum} 
Diff : ${diff} 
Prod : ${prod} 
Div : ${div} 
Modulo : ${modulo}`)