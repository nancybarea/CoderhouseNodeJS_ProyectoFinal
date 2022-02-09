//***************************************************************************/
//FUNCIONES
//***************************************************************************/
// ---------------- CARGA DE DOM (READY) -----------------
//FUNCION QUE SE EJECUTA CUANDO SE CARGA EL DOWN. Asociacion de eventos
$(document).ready (function () {
  
    const tiempoAnimacion1 = 1000;
  
    //botones para mostrar y ocultar CARRITO
    $('#filtrosMostrarCarrito').click(function () { 
        $('#contenedorCarrito').slideDown(tiempoAnimacion1);        
    });
    $('#filtrosOcultarCarrito').click(function () { 
        $('#contenedorCarrito').slideUp(tiempoAnimacion1);        
    });

    //botones para mostrar y ocultar LISTADO DE PRODUCTOS 
    $('#filtrosMostrarListadoProd').click(function () { 
        $('#contenedorListadoProd').slideDown(tiempoAnimacion1);        
    });
    $('#filtrosOcultarListadoProd').click(function () { 
        $('#contenedorListadoProd').slideUp(tiempoAnimacion1);        
    });

     //botones para mostrar y ocultar FORMULARIO ALTA DE PRODUCTO 
     $('#filtrosMostrarFormAltaProd').click(function () { 
        $('#contenedorFormAltaProd').slideDown(tiempoAnimacion1);        
    });
    $('#filtrosOcultarFormAltaProd').click(function () { 
        $('#contenedorFormAltaProd').slideUp(tiempoAnimacion1);        
    });
    
  })