
/// hace al objeto drageable


/*
$('.ventana').draggable({
    containment:'parent'}
    );
*/
    /*
    $('.ventana-barra').on('mousedown',function(){
        $(this).parents(".ventana").sortable()});

    $('.ventana-barra').mousedown(function(){
    $(this).parents(".ventana").draggable({
        
        containment:"#contenido",
        cancel:".ventana-conten, .btn-abrir"
    });
    });
*/  
    $('.ventana-conten').hide();
  
    $('.ventana-btn').click(function(){
        if($(this).hasClass('btn-cerrar')){
            $('.ventana-conten').hide('400'),
        $(this).parent().siblings('.ventana-conten').show('400'),
        $('.ventana-btn').removeClass('btn-abrir'),
        $('.ventana-btn').addClass('btn-cerrar'),
        $(this).toggleClass('btn-cerrar btn-abrir')
        
    }
    })
  
    /*
    $('.ventana-btn').click(function(){
        if($(this).hasClass('btn-abrir')){
            $('.ventana-conten').hide('400'),
            $(this).parent().siblings('.ventana-conten').show('400')
    
        }else{
            $(this).parent().siblings('.ventana-conten').hide('400'),
            $(this).toggleClass("btn-cerrar btn-abrir")
        }
    });


    $('.ventana-btn').click(function(){
        let $boton = $(this);
        $(this).toggleClass('btn-abrir btn-cerrar'),
        $('.ventana-btn').toggleClass('btn-cerrar btn-abrir')

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
*/
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
