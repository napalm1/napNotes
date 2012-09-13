$(function(){
	var doc = $(document);
	$('#note').css({width:doc.width()-30,height:doc.height()-30}).focus();
	setInterval(function(){
		$.post('napalm2.php', $('form').serialize(), function(resp){
			$('span').show().fadeOut(4000);
		});
	}, 10000);
});
