$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('#mensagem').text("Cor alterada com sucesso");
        $('#mensagem').css('color', 'blue');
        $('#mensagem').css('border', '1px solid blue');
        $('#mensagem').delay(1000);
        $('#mensagem').fadeOut('fast');
    });
    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('#mensagem').text("Cor alterada com sucesso");
        $('#mensagem').css('color', 'red');
        $('#mensagem').css('border', '1px solid red');
        $('#mensagem').delay(1000);
        $('#mensagem').fadeOut('fast');
        
    });
});