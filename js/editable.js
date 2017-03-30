$.get( "./admin.html", function( data ) {
  info = data.find('#adminPromocionExplicacion')
  console.log('data',info)
  mas_info = info.val()
  console.log('mas info',mas_info)
});

    // $("#promocionExplicacion").val(promocionExplicacion);
