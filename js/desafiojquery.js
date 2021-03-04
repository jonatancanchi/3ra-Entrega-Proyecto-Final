
    $(document).ready(function() {

        var ocultar = $("#ocultar");
        var mostrar = $("#mostrar");
        var elemento = $("#elemento");
      
        ocultar.click(function() {
          elemento.hide(1000);
        });
      
        mostrar.click(function() {
          elemento.show(1000);
        });
    
    //evento click
    $('#boton1').on('click',function(){
    $('#contenido h2').toggleClass('display-4');
});

});  



    