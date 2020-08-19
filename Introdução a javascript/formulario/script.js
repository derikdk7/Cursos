function valida(){
    var nome = document.getElementById('nome');

    if(nome.value == ""){
        alert("Campo nome nao pode ser enviado em branco.");
    }
    else{
        alert("Nome aceito.");
    }

}