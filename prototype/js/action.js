function elementHeight() {
	var winH = $(window).height();
	var halfWinH = winH / 2;
	var threeForthWinH = winH / 4 * 3;
	var thirdWinH = winH / 3;
	$('.intro').css('height',winH+'px');
	$('.divider').css('height',threeForthWinH+'px');
	$('.info').css('height',thirdWinH * 2+'px');
	if($('.main-view').hasClass('active')){
		$('.viewport').css('height',winH+'px');
	}
}
function positionContent() {
	$('section .pagewrap').each(function(){
		var h = $(this).height();
		var parentH = $(this).parent().height();
		if (h > parentH){
			if($(this).parent().hasClass('intro')){
				$(this).parent().css('height',h+150+'px');
			}
			else {
				$(this).parent().css('height',h+100+'px');
			}
		}
		if($(this).parent().hasClass('intro')){
			$(this).css('margin-top',-1*h/2+'px');
		}
		else {
			$(this).css('margin-top',-1*h/2-30+'px');
		}
	});
}
function dropToggle(){
	var $dropdown = $(this).siblings('ul').eq(0);
	if ($dropdown.hasClass('active')){
		$dropdown.removeClass('active');
		$(this).removeClass('active');
	}
	else {
		$('.drop-bttn').each(function(){
			$(this).siblings('ul').eq(0).removeClass('active');
			$(this).removeClass('active');
		})
		$dropdown.addClass('active');
		$(this).addClass('active');
	}
}
function sidebarToggle() {
	if ($('.main-view').eq(0).hasClass('active')){
		$('.main-view').removeClass('active');
		$('.viewport').css({'height':'','overflow':''});
		$('.sidenav').removeClass('hide');
		$('.drop-bttn').removeClass('active');
		$('.drop-bttn').siblings('ul').removeClass('active');
	}
	else {
		var winH = $(window).height();
		$('.main-view').addClass('active');
		$('.sidenav').addClass('hide');
		$('.viewport').css({'height':winH+'px','overflow':'hidden'});
	}
}
function leftSwipeNav(event){
	event.preventDefault();
	var touch = event.originalEvent.touches[0];
	var touchx = touch.pageX;
	var touchy = touch.pageY;
	$('.sidenav > button').each(function(){
		var h = $(this).height();
		var w = $(this).width();
		var ypos = $(this).offset().top;
		var endy = ypos + h;
		var lowx = $(this).offset().left;
		var highx = lowx + w;
		if((touchy >= ypos - 4)&&(touchy <= endy + 4)){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		}

	});
}
function leftSwipeMove(event){
	event.preventDefault();
	var touch = event.originalEvent.changedTouches[0];
	var touchx = touch.pageX;
	var touchy = touch.pageY;
	console.log('touch end even fired');
	$('.sidenav > button').each(function(){
		var h = $(this).height();
		var w = $(this).width();
		var ypos = $(this).offset().top;
		var endy = ypos + h;
		var lowx = $(this).offset().left;
		var highx = lowx + w;
		if((touchy >= ypos - 4)&&(touchy <= endy + 4)){
			/*if($(this).hasClass('start')){
				$('body, html').animate({scrollTop:0},800);
			}
			else {
				var goToSection = $('.sidenav > button').index($(this)) - 1;
				var goToTop = $('section.info').eq(goToSection).offset().top - adjust;
				$('body, html').animate({scrollTop:goToTop},800);
			}*/
			$(this).trigger('click');
		}
	});
}
function leftNavClick(){
	var winH = $(window).height();
	var adjust = winH / 6;
	if($(this).hasClass('start')){
		$('body, html').animate({scrollTop:0},800);
	}
	else {
		var goToSection = $('.sidenav > button').index($(this)) - 1;
		var goToTop = $('section.info').eq(goToSection).offset().top - adjust;
		$('body, html').animate({scrollTop:goToTop},800);
	}
	$('.sidenav > button').removeClass('active');
}
function galleryControls() {
	$(this).siblings().removeClass('active');
	$(this).addClass('active')
}
function nextSection(){
	var winH = $(window).height();
	var adjust = winH / 6;
	var $parent = $(this).parent();
	var next = $('section').index($parent) + 1;
	var nextPos = $('section').eq(next).offset().top - adjust;
	$('body,html').animate({scrollTop:nextPos},800);
}
/* Functions fired on first load */
$(function(){
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) ||(navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/webOS/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Windows Phone/i))) {
		/* Mobile Only Functions */
		$('html').addClass('mobile');
	}
	else {
		/* Desktop only Functions */

		/* Parallax background iamges */
		$(window).on('scroll',function(){
			var currentH = $(window).height();
			var currentDividerH = currentH / 4 * 3;
			var currentScroll = $(document).scrollTop();
			$('.divider').each(function(){
				var thisPos = $(this).offset().top;
				var thisEnd = thisPos + currentDividerH;
				if ((currentScroll >= thisPos - currentH)&&(currentScroll <= thisEnd)){
					var scale = 100 / currentH; // Number here is the percentage the background position will move from the top
					var adjustedBackground = 100 + (currentScroll - thisPos - currentH) * scale;
					$(this).css('background-position','center '+adjustedBackground+'%');
				}
			});
		});
	}
	$(window).on('scroll',function(){
		var winH = $(window).height();
		var threeForthWinH = winH / 4 * 3;
		var halfpoint = threeForthWinH / 2;
		var currentScroll = $(document).scrollTop();
		if(currentScroll < winH){
			$('.sidenav > button').each(function(){
				if($(this).hasClass('start')){
					$(this).addClass('current');
				}
				else {
					if($(this).hasClass('current')){
						$(this).removeClass('current');
					}
				}
			});
		}
		else {
			$('.info').each(function(){
				var topPoint = $(this).offset().top - threeForthWinH;
				var endPoint = $(this).offset().top - 1;
				if($(this).hasClass('other-page-links')){
					if(currentScroll >= topPoint){
						var section = $('.info').index($(this)) + 1;
						$('.sidenav > button').removeClass('current');
						$('.sidenav > button').eq(section).addClass('current');
					}
				}
				else {
					if((currentScroll >= topPoint)&&(currentScroll <= endPoint)){
						var section = $('.info').index($(this)) + 1;
						$('.sidenav > button').removeClass('current');
						$('.sidenav > button').eq(section).addClass('current');
					}
				}
			});
		}
	});
	elementHeight();
	positionContent();
	$('.drop-bttn').on('click',dropToggle);
	$('.nav-right > button').on('click',sidebarToggle);
	$('.sidenav > button').on('click',leftNavClick);
	$('.sidenav').on('touchmove', leftSwipeNav);
	$('.sidenav').on('touchend', leftSwipeMove);
	$('.content-controller li').on('click', galleryControls);
	$('.next').on('click', nextSection);
});
/* Functions fired on resize */
$(window).resize(function(){
	elementHeight();
	positionContent();
});