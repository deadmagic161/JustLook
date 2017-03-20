$(function(){
	$('.first-class').click(function(){
		$('.dropdown__list').slideToggle('fast');
	});

$('.dropdown__list-item').click(function(){
	var tx = $(this).html();
	$('.dropdown__list').slideUp('fast');
	$('.selected-class').html(tx);
});
})


$( function() {
  $( '#slider' ).slider({
    value:1,
    min: 3,
    max: 300,
    slide: function( event, ui ) {
      $( '#amount' ).val( ui.value ).trigger('change');
    }
  });
  $( '#amount' ).val($( '#slider' ).slider( 'value' ) );
} );

var value;
$('#amount').change(function(){
		  value = this.value.substring(0);
		  console.log(value);
		$('#slider').slider('value', parseInt(value));	
	});


$('#amount').keypress(function(event){
  var key, keyChar;
  if(!event) var event = window.event;

  if(event.keyCode) key = event.keyCode;
  else if(event.which) key = event.which;

  if(key==null || key==0 || key==8 || key==13 || key==46 || key==37 || key==39) return true;
  keyChar = String.fromCharCode(key);

  if(!/\d/.test(keyChar)) return false;
});

var priceAvto = function(){
  var avto = document.querySelector('.dropdown__list').addEventListener('click',function(ev){
  	if(ev.target.tagName == 'LI') {
  		let base = ev.target.getAttribute('data-value');
  		var kmPrice = 10;
			var price = +base + (value-3)*kmPrice + "руб";
			$('.price__count').html(price);
      //count();
  	}
  });
};


priceAvto();