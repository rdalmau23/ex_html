// window.alert("Hello world!");
// alert("Hello world!");
// const nombre = prompt("introduce tu nombre");
// alert(nombre);

// let var1 = "Hola";
// var var2 = true;
// const var3 = 34.5;

// console.log(var1);
// console.log(typeof var1);

// console.log(var2);
// console.log(typeof var2);

// console.log(var3);
// console.log(typeof var3);

const ejercicio1 = (nom, cognoms) => {
    return(nom + cognoms);

};
console.log(ejercicio1("Rafel ", "Dalmau"));


function ejercicio2(valor) {
    console.log("El valor booleano es:", valor);
}

ejercicio2(true);
ejercicio2(false);

function ejercicio3(...valores) {
    valores.forEach(valor => {
        console.log(valor);
    });
}
ejercicio3(1, 2, 3, 4, 5);

//ejercicio cara cruz

function caraOcruz(num = Math.round(Math.random())){
    
    if(num == 1){
        console.log('cara');
    }
    else{
        console.log('cruz')
    }
}
caraOcruz();

// ejercicio 5

function suma3(num1 = 2, num2 = 1, num3 = 6){
    let suma = num1 +num2 +num3;
    console.log(suma);
}

suma3();

function nomComplet(nom, cognom1, cognom2){
    return(nom+cognom1+cognom2);
}
console.log(nomComplet("Rafel ", "Dalmau ", "Chaco"));


function comparaNum(num1 = 3, num2 = 3){

    if(num1 > num2){
        console.log(num1 + ' és mayor que ' + num2)
    }
    else if(num1 < num2){
        console.log(num2 + ' és mayor que ' + num1)
    }
    else{
        console.log('Són iguales.')
    }
}
comparaNum();
