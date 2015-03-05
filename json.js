jQuery(document).ready(function() {
	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	//se añade ?jsoncallback=? para el tag
	function run(){
	$.getJSON(flickerAPI,{
		tags:$("#tag").val(),
		tagmode:"all",//muestra todas 
		format:"json"
	})
	.done(function(data){
		$('#images').html('');
			$.each( data.items, function( i, item ) {
				$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
				//bucle para añadir la url de las imagenes con la etiqueta img
			});
		});
	}


	$('#btn').click(function(){
		run();
	});
});
