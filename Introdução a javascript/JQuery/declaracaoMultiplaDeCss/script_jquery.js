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
            .css({color: 'red', border: '1px solid red', backgroundColor:'#FF7F50'})  /*Formatação usada para reunir todo o CSS em uma unica linha */
            .delay(1000)
            .fadeOut();
        
    });
});