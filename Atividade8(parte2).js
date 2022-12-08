var x = Number(prompt('Escreva um numero'))

var y = prompt('Digite um Sinal podendo ser +,-,*,** ou /')

var z = Number(prompt('Escreva outro numero'))

if (y === '+') {

    let soma = x + z

    alert(' o Resultado é ' + soma) }

    else if (y === '-') {

        let soma = x - z

        alert(' O Resultado é ' + soma)

        


    }

     else if (y === '*') {

        let soma = x * z

        alert(' O Resultado é ' + soma)


    } 

    else if( y === "**"){

   let soma = x**z

   alert(' O Resultado é ' + soma)


    }

  


  else  if( y === "/"){


        let soma = x/z
        
        alert("O Resultado é " + soma)
            }
        
   else {

 alert("Tentou colocar outra coisa no lugar de um número ou sinal né? ")



   }

  
   





