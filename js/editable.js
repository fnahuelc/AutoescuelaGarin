$(function(){
    $.ajax('admin.html', function (data) {
      var data = $(data).find('h1#adminPromocionExplicacion');
      console.log(data)
  });

    // $("#promocionExplicacion").val(promocionExplicacion);

   });
