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


const mes = 2;
switch (mes){
    case 1:
        console.log('Gener');
        break;
        
    case 2:
        console.log('Febrer');
        break;
    case 3:
        console.log('Març');
        break;
        
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Maig');
        break;
            
    case 6:
        console.log('Juny');
        break;
    case 7:
        console.log('Juliol');
        break;
    case 8:
        console.log('Agost');
        break;
    case 9:
        console.log('Setembre');
        break;
    case 10:
        console.log('Octubre');
        break;
    case 11:
        console.log('Novembre');
        break;
    case 12:
        console.log('Desembre');
        break;
    default:
        console.log('?????');
        break;

};

console.log(Math.round(Math.random()));

console.log(Math.round(Math.PI));



let palabra = 'Escuela';

console.log(palabra.replace('a', 'o'));


let palabra2 = 'Academia';

console.log(palabra2.startsWith('Aca'));
console.log(palabra.startsWith('Aca'));

let palabra3 = 'Hola ';

console.log(palabra3.repeat(3));

for(let frase = 0; frase < 10; frase++){
    console.log('I <3 code')
};

const array = ['a', 'b', 'c', 'd', 'e'];

    array.forEach(item => {console.log(item)});

for(let num4 = 5; num4 > 0; num4--){
    console.log(num4)
};