$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('p').fadeOut('slow');  /*Tanto pro fadeOut, quanto pro fadeIn pode ser usado "fast", "slow" ou um valor numerico em milissegundos */
        $('p').delay(1000);
        $('p').fadeIn('slow');
    });
    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('p').fadeOut(1600);
        $('p').delay(1000);
        $('p').fadeIn(3000);
    });
});