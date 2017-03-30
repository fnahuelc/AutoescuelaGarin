$.get( "./admin.html", function( data ) {
  $( "#adminPromocionExplicacion" ).html( data );
  alert( "Load was performed." );
});

    // $("#promocionExplicacion").val(promocionExplicacion);
