$('#spinnerButton').click(function() {
    $(this).each(function(){
        $('#animationelement').removeClass(); 
        $('#animationelement').addClass("spinner");
      });
  });