$(document).ready(function(){
    //selecciona select
    var $select = $('select');
    //capturo section
    var $peruvianFood = $('#op-peruvian-food');
    var $mexicanFood = $('#op-mexican-food');
    var $fastFood = $('#op-fast-food');
    var $italianFood = $('#op-italian-food');
    // console.log($peruvianFood);
    // console.log($mexicanFood);
    // console.log($fastFood);
    // console.log($italianFood);

    // evento change
    $select.on('change', function() {
        var optionSelect = $(this).val();//captura option
        // console.log($(this).val());
        if (optionSelect === 'peruvian') {
            $peruvianFood.addClass('block')
          } else if (optionSelect === 'mexican') {
            $mexicanFood.addClass('block');
          } else if (optionSelect === 'fastfood'){
            $fastFood.addClass('block');
          } else if (optionSelect === 'italian'){
            $fastFood.addClass('block');
          }
        });
      
      });