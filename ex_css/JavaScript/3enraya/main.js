function myfunc() {
var b1, b2, b3, b4, b5, b6, b7, b8, b9;
b1 = document.getElementById("b1").value;
b2 = document.getElementById("b2").value;
b3 = document.getElementById("b3").value;
b4 = document.getElementById("b4").value;
b5 = document.getElementById("b5").value;
b6 = document.getElementById("b6").value;
b7 = document.getElementById("b7").value;
b8 = document.getElementById("b8").value;
b9 = document.getElementById("b9").value;

var btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9;

btn1 = document.getElementById("b1");
btn2 = document.getElementById("b2");
btn3 = document.getElementById("b3");
btn4 = document.getElementById("b4");
btn5 = document.getElementById("b5");
btn6 = document.getElementById("b6");
btn7 = document.getElementById("b7");
btn8 = document.getElementById("b8");
btn9 = document.getElementById("b9");

if((b1 == "X") && (b2 == "X") && (b3 == "X")){
    document.getElementById("resultado").innerHTML = "X gana";
    btn4.disabled = true; 
        btn5.disabled = true; 
        btn6.disabled = true; 
        btn7.disabled = true; 
        btn8.disabled = true; 
        btn9.disabled = true; 

        btn1.style.color = "red"; 
        btn2.style.color = "red"; 
        btn3.style.color = "red";
}

else if((b1 == "X") && (b4 == "X") && (b7 == "X")){
    document.getElementById("resultado").innerHTML = "X gana";
        btn2.disabled = true; 
        btn5.disabled = true; 
        btn6.disabled = true; 
        btn3.disabled = true; 
        btn8.disabled = true; 
        btn9.disabled = true; 

        btn1.style.color = "red"; 
        btn4.style.color = "red"; 
        btn7.style.color = "red";
}

else if((b7 == "X") && (b8 == "X") && (b9 == "X")){
    document.getElementById("resultado").innerHTML = "X gana";
        btn4.disabled = true; 
        btn5.disabled = true; 
        btn6.disabled = true; 
        btn3.disabled = true; 
        btn2.disabled = true; 
        btn1.disabled = true; 

        btn9.style.color = "red"; 
        btn8.style.color = "red"; 
        btn7.style.color = "red";
}

else if((b3 == "X") && (b6 == "X") && (b9 == "X")){
    document.getElementById("resultado").innerHTML = "X gana";
        btn4.disabled = true; 
        btn5.disabled = true; 
        btn7.disabled = true; 
        btn8.disabled = true; 
        btn2.disabled = true; 
        btn1.disabled = true; 

        btn9.style.color = "red"; 
        btn3.style.color = "red"; 
        btn6.style.color = "red";
}

else if((b1 == "X") && (b5 == "X") && (b9 == "X")){
    document.getElementById("resultado").innerHTML = "X gana";
        btn4.disabled = true; 
        btn6.disabled = true; 
        btn7.disabled = true; 
        btn8.disabled = true; 
        btn2.disabled = true; 
        btn3.disabled = true; 

        btn9.style.color = "red"; 
        btn1.style.color = "red"; 
        btn5.style.color = "red";
}

else if((b3 == "X") && (b5 == "X") && (b7 == "X")){
    document.getElementById("resultado").innerHTML = "X gana";
        btn4.disabled = true; 
        btn6.disabled = true; 
        btn9.disabled = true; 
        btn8.disabled = true; 
        btn2.disabled = true; 
        btn1.disabled = true; 

        btn7.style.color = "red"; 
        btn3.style.color = "red"; 
        btn5.style.color = "red";
}

else if((b4 == "X") && (b5 == "X") && (b6 == "X")){
    document.getElementById("resultado").innerHTML = "X gana";
        btn3.disabled = true; 
        btn7.disabled = true; 
        btn9.disabled = true; 
        btn8.disabled = true; 
        btn2.disabled = true; 
        btn1.disabled = true; 

        btn4.style.color = "red"; 
        btn6.style.color = "red"; 
        btn5.style.color = "red";
}

//OPCIONES 0

if((b1 == "0") && (b2 == "0") && (b3 == "0")){
    document.getElementById("resultado").innerHTML = "O gana";
    btn4.disabled = true; 
        btn5.disabled = true; 
        btn6.disabled = true; 
        btn7.disabled = true; 
        btn8.disabled = true; 
        btn9.disabled = true; 

        btn1.style.color = "red"; 
        btn2.style.color = "red"; 
        btn3.style.color = "red";
}

else if((b1 == "0") && (b4 == "0") && (b7 == "0")){
    document.getElementById("resultado").innerHTML = "O gana";
        btn2.disabled = true; 
        btn5.disabled = true; 
        btn6.disabled = true; 
        btn3.disabled = true; 
        btn8.disabled = true; 
        btn9.disabled = true; 

        btn1.style.color = "red"; 
        btn4.style.color = "red"; 
        btn7.style.color = "red";
}

else if((b7 == "0") && (b8 == "0") && (b9 == "0")){
    document.getElementById("resultado").innerHTML = "O gana";
        btn4.disabled = true; 
        btn5.disabled = true; 
        btn6.disabled = true; 
        btn3.disabled = true; 
        btn2.disabled = true; 
        btn1.disabled = true; 

        btn9.style.color = "red"; 
        btn8.style.color = "red"; 
        btn7.style.color = "red";
}

else if((b3 == "0") && (b6 == "0") && (b9 == "0")){
    document.getElementById("resultado").innerHTML = "O gana";
        btn4.disabled = true; 
        btn5.disabled = true; 
        btn7.disabled = true; 
        btn8.disabled = true; 
        btn2.disabled = true; 
        btn1.disabled = true; 

        btn9.style.color = "red"; 
        btn3.style.color = "red"; 
        btn6.style.color = "red";
}

else if((b1 == "0") && (b5 == "0") && (b9 == "0")){
    document.getElementById("resultado").innerHTML = "O gana";
        btn4.disabled = true; 
        btn6.disabled = true; 
        btn7.disabled = true; 
        btn8.disabled = true; 
        btn2.disabled = true; 
        btn3.disabled = true; 

        btn9.style.color = "red"; 
        btn1.style.color = "red"; 
        btn5.style.color = "red";
}

else if((b3 == "0") && (b5 == "0") && (b7 == "0")){
    document.getElementById("resultado").innerHTML = "O gana";
        btn4.disabled = true; 
        btn6.disabled = true; 
        btn9.disabled = true; 
        btn8.disabled = true; 
        btn2.disabled = true; 
        btn1.disabled = true; 

        btn7.style.color = "red"; 
        btn3.style.color = "red"; 
        btn5.style.color = "red";
}

else if((b4 == "0") && (b5 == "0") && (b6 == "0")){
    document.getElementById("resultado").innerHTML = "O gana";
        btn3.disabled = true; 
        btn7.disabled = true; 
        btn9.disabled = true; 
        btn8.disabled = true; 
        btn2.disabled = true; 
        btn1.disabled = true; 

        btn4.style.color = "red"; 
        btn6.style.color = "red"; 
        btn5.style.color = "red";
}

else { 

    if (flag == 1) { 
        document.getElementById('resultado') 
            .innerHTML = "Turno de X"; 
    } 
    else { 
        document.getElementById('resultado') 
            .innerHTML = "Turno de 0"; 
    } 
} 
}

function myfunc_2() { 
    location.reload(); 
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 

flag = 1;
function myfunc_3() { 
    if (flag == 1) { 
        document.getElementById("b1").value = "X"; 
        document.getElementById("b1").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b1").value = "0"; 
        document.getElementById("b1").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_4() { 
    if (flag == 1) { 
        document.getElementById("b2").value = "X"; 
        document.getElementById("b2").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b2").value = "0"; 
        document.getElementById("b2").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_5() { 
    if (flag == 1) { 
        document.getElementById("b3").value = "X"; 
        document.getElementById("b3").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b3").value = "0"; 
        document.getElementById("b3").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_6() { 
    if (flag == 1) { 
        document.getElementById("b4").value = "X"; 
        document.getElementById("b4").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b4").value = "0"; 
        document.getElementById("b4").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_7() { 
    if (flag == 1) { 
        document.getElementById("b5").value = "X"; 
        document.getElementById("b5").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b5").value = "0"; 
        document.getElementById("b5").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_8() { 
    if (flag == 1) { 
        document.getElementById("b6").value = "X"; 
        document.getElementById("b6").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b6").value = "0"; 
        document.getElementById("b6").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_9() { 
    if (flag == 1) { 
        document.getElementById("b7").value = "X"; 
        document.getElementById("b7").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b7").value = "0"; 
        document.getElementById("b7").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_10() { 
    if (flag == 1) { 
        document.getElementById("b8").value = "X"; 
        document.getElementById("b8").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b8").value = "0"; 
        document.getElementById("b8").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_11() { 
    if (flag == 1) { 
        document.getElementById("b9").value = "X"; 
        document.getElementById("b9").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b9").value = "0"; 
        document.getElementById("b9").disabled = true; 
        flag = 1; 
    } 
} 
