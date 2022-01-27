function sumar(){
    let a=prompt("inserte el primer numero");
    let b=prompt("inserte el segundo numero");
    c=parseInt(a)+parseInt(b);
    document.write(a+" mas "+b+" es igual a "+c);
    return(sumar);
}
function restar(){
    let a=prompt("inserte el primer numero");
    let b=prompt("inserte el segundo numero");
    c=a-b;
    document.write(a+"menos"+b+"es igual a"+c);
    return(restar);
}
function multiplicar(){
    let a=prompt("inserte el primer numero");
    let b=prompt("inserte el segundo numero");
    c=parseInt(a)*parseInt(b);
    document.write(a+"x"+b+"es igual a "+c);

}
function dividir(){
    let a=prompt("inserte el primer numero");
    let b=prompt("inserte el segundo numero");
    c= a/b;
    document.write(a+"/"+b+"es igual a"+c);
}
function mayor(){
    let a=prompt("inserte el primer numero");
    let b=prompt("inserte el segundo numero");
   if(a==b){
       document.write("a y b son iguales")
   }else{
    if (a<=b) {
        document.write("el mayor es"+b);
    }else{
        document.write("el mayor es"+a);
    }
    return(menor);
    }
}
function menor(){
    let a=prompt("inserte el primer numero");
    let b=prompt("inserte el segundo numero");
   if(a==b){
       document.write("a y b son iguales")
   }else{
    if (a<=b) {
        document.write("el menor es"+a);
    }else{
        document.write("el menor es"+b);
    }
    return(menor);
    }
}

for (let i = 0; i < 1; i++) {
    let operacion =prompt("que operacion desea realizar: 1-sumar 2-restar 3-mutiplicar 4-dividir 5-el mayor de 2 numero 6-el menor de 2 numeros");
    if (1 == operacion) {
        sumar();        
    }
    if (2 == operacion) {
        restar();        
    }
    if (3 == operacion) {
        multiplicar();        
    }
    if (4 == operacion) {
        dividir();        
    }
    if (5 == operacion) {
        mayor();        
    }
    if (6 == operacion) {
        menor();        
    }
};