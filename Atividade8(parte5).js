var x = Number(prompt('Digite um numero'))
var y = Number(prompt("Digite um numero maior que o primeiro")); 



while(y <= x){
 
 x = Number(prompt('Digite um numero'))
 y = Number(prompt("Digite um número maior que o primeiro")); 


}



var Soma = 0


if(x <= y){while(x <= y){
 if(x % 2 != 0){

    Soma= Soma + x 
 
alert(x)
}
    x++;

  
  
}
}






alert("O resultado da soma dos números impares é " + Soma)




/*var x = 0
var y = 10; 

while(x <= y){
 if(x % 2 != 0){
alert(x)
}
    x++;
}*/


// x = 0; 0/2 = 0
// x = 1; 1%2 != 0 é verdadeiro
// x = 2; 2/2 = 1 e resto 0
// x = 3; 3/2 = 1 e resto  1, ou seja, verdadeiro











   
