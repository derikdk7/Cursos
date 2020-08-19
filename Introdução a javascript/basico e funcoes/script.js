var mensagem = "olá mundo!!";
var numero = 6;
var num_decimal = 6.5;
var lista = ["laranja", " maçã", " banana"];


for( i in lista){
    alert(lista[i]);//alert exibe como pop up, fica "travado" até que seja clicado no ok
    console.log(lista[i]);//já o console.log exibe a mensagem no console do inspecionar
}

soma(3, 5);

console.log(subtracao(5, 3));

function soma(a, b){
    console.log("A soma é:", a+b);
}

function subtracao(a, b){
    return a-b;
}