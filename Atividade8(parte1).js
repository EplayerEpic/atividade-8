 function Anime(x,y){

return x-y



 }
 
 
 
 alert(' Os produtos a seguir tem um custo, o custo vem logo depois dele')

alert('Produtos')

var Notebook = 10000

var Playstation5 = 25000

alert( 'Notebook custa ' +  Notebook + '\n' + 'Playstation5 custa ' + Playstation5
) 


 var Produto =  prompt('Digite aqui o que você quer comprar?')

 /*Playstation5*/

if( Produto == 'Playstation5'){

var Saldo = prompt('Quanto de dinheiro você tem?')

if(Saldo < Playstation5){

 let Resultado = Anime(Saldo,Playstation5)

    alert('Saldo insuficiente,ainda falta ' + Resultado)
}

else if(Saldo >= Playstation5){

   let Resultado= Anime(Saldo,Playstation5)

    alert('Compra relizada com Sucesso!, o valor que devemos te voltar é '+ Resultado)
} 
}

/* Notebook*/

else if( Produto == 'Notebook'){

var Saldo = prompt(' Quanto de dinheiro você tem?')

if( Saldo < Notebook){

   let Resultado =  Anime(Saldo,Notebook)

    alert('Saldo Insuficiente,ainda falta ' + Resultado)
}

 else if( Saldo >= Notebook){

    let Resultado= Anime(Saldo,Notebook)

    alert('Compra relizada com Sucesso!, o valor que devemos te voltar é '+ Resultado)

}



}

else{

alert("Tentou bugar o sistema né?")

}

// esse negocio dos resultados negativos eu coloquei pq achei qeu deixaria o site mais completo mesmo não precisando ;-;


