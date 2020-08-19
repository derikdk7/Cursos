$(function(){
    $('#azul').click(function(){
        /* Aqui é um exemplo de encadeamento em bloco*/
        $('p')
            .css("color", "blue")
            .fadeOut()
            .delay(1000)
            .fadeIn();
    });
    $('#vermelho').click(function(){
        $('p')
            .css("color", "red");
        $('#mensagem')    
            .text("Cor alterada com sucesso")
            .css('color', 'red')
            .css('border', '1px solid red')
            .delay(1000)
            .fadeOut('fast');
        
    });
});