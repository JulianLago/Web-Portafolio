
/// hace al objeto drageable


/*
$('.ventana').draggable({
    containment:'parent'}
    );
*/

    
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

/// cuando clickeas en el obj se posiciona primero 
$('.ventana-contenido').mousedown(function(){
    $(this).siblings(".ventana-contenido").css("z-index",1),
    $(this).css("z-index",2);
});
/// boton de cerrar y abrir ventana
$('.cerrar-ventana').click(function(){
    $(this).parent().css("opacity","0%"),
    $(this).css("opacity","100%")
})
$('.abrir-ventana').click(function(){
    $('.info-ventana').css("display","block")
})
