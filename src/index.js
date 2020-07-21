
function muestraContenido(){
    $('.boton').click(function(){
        let nombreContenido = $(this).text();
        $(`#${nombreContenido}`).siblings().hide('400'),
        $(`#${nombreContenido}`).show('400')
    })

  };

  function responsiveBio(){
    if (window.matchMedia('(max-width: 800px)').matches) {
        $('#bio').insertBefore('#contenido');
    }
};
        /////////////////////////////////////////////////////////////

    $('.ventana-contenido').hide();
    $('#Proyectos').show();
    
  
    muestraContenido();
    responsiveBio();
   
   
