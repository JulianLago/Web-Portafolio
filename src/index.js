
/// hace al objeto drageable


/*
$('.ventana').draggable({
    containment:'parent'}
    );
*/

    $('.ventana-barra').on('touchstart',function(){
        $(this).parents(".ventana").draggable({
            axis:"x",
            containment:"#contenido",
            cancel:".ventana-conten, .btn-abrir"})
    });

    $('.ventana-barra').mousedown(function(){
    $(this).parents(".ventana").draggable({
        axis:"x",
        containment:"#contenido",
        cancel:".ventana-conten, .btn-abrir"
    });
    });

    $('.ventana-btn').click(function(){
        if($(this).hasClass("btn-abrir")){
            $(this).siblings(".ventana-conten").show("400"),
            $(this).toggleClass("btn-abrir btn-cerrar")
        }else{
            $(this).siblings(".ventana-conten").hide("400"),
            $(this).toggleClass("btn-cerrar btn-abrir")
        }
    });

    /*
$('.btn-cerrar').click(function(){
    $(this).siblings(".ventana-conten").hide("400")
    $(this).removeClass("btn-cerrar"),
    $(this).addClass("btn-abrir")
});
$('.btn-abrir').click(function(){
    $(this).siblings(".ventana-conten").show("400")
    $()

});
*/
