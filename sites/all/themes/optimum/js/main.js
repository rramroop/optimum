jQuery(document).ready(function($){
	$(".tab-link").click(function(e){
		$(this).tab('show');
		e.preventDefault();
	});
	
	
});