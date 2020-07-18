function activaBoton(){
    $('.boton').click(function(){
        if($(this).hasClass('btn-cerrar')){
        $('.boton').removeClass('btn-abrir'),
        $('.boton').addClass('btn-cerrar'),
        $(this).toggleClass('btn-cerrar btn-abrir')
        
    }
    })};
function muestraContenido(){
    $('.boton').click(function(){
        let nombreContenido = $(this).text();
        $(`#${nombreContenido}`).siblings().hide('400'),
        $(`#${nombreContenido}`).show('400')

    })

  };


    $('.ventana-contenido').hide();
    activaBoton();
    muestraContenido();
  
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
