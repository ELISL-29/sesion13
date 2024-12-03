/*
let num1 = parseInt(prompt("ingrese un numero"));
let num2 = parseInt(prompt("ingrese un numero"));
function sumar(x,y){
    document.write(` la sumatoria de los numero es:  ${x,y}`);
}
 
function restar(x,y){
    document.write(`   la resta de los numero es: ${x,y}  `);
}

function multiplicar(x,y){
    document.write(`  la multiplicacion de los numero es: ${x,y}`);
}

function dividir(x,y){
    document.write(`  la division de los numero es: ${x/y} `);
}
*/

//ejercicio 2

function calculadora(x,y,operacion) {
    
    switch (operacion){
        case '+': 
            return sumar(x,y);
        case '-':
            return restar(x,y);
        case '*':
            return multiplicar (x,y);
        case '/':
            return dividir(x,y); 
        default:
            return("operacion no valida...")
    }
}

let num1 = parseInt(prompt("ingrese un numero"));
let num2 = parseInt(prompt("ingrese un numero"));
let operacion = prompt("dijite una operacion (+, -, *, /)");
calculadora(x,y,operacion);