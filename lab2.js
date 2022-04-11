function lab2 () { 
var a = 9, b = 5;
var suma,resta,mult,div;
let l1 = "var1",l2 = "var2";
const c1 = 5;
const c2 = "constante";
var myObj = new Object(),
            objint = "Número",
            objstr = "Cadena",
            objbool = "Boolean",
            obj1 = "Objeto";

suma = a +b;
resta = a - b;
mult = a * b;
div = a / b;

console.log("La suma es: "+ suma);
console.log("La resta es: "+ resta);
console.log("La multiplicación es: "+ mult);
console.log("La división es: "+ div);
console.log("Variable let1: "+ l1);
console.log("Variable let2: "+ l2);
console.log("Concatenación: "+ l1+l2);
console.log("Constante 1: "+ c1);
console.log("Constante 2: "+ c2);
console.log("Tipo de dato Constante 1: "+ typeof(c1));
console.log("Tipo de dato Constante 2: "+ typeof(c2));
myObj[objint] = 10;
myObj[objstr] = "cadena1";
myObj[objbool] = true;
myObj[obj1] = new Object();
console.log(myObj);
};