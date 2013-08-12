jQuery(document).ready(function($){
	$(".tab-link").click(function(e){
		$(this).tab('show');
		e.preventDefault();
	});
	
	$('body').scrollspy({ offset: -200, target: '#sticky-nav-wrap' });
	
	
	
	$("#sticky-nav li a[href^='#']").on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 300);
   });
});