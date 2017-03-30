$.get( "./admin.html", function( data ) {
  var info = $( "#adminPromocionExplicacion" ).html( data );
  console.log(info)
});

    // $("#promocionExplicacion").val(promocionExplicacion);
