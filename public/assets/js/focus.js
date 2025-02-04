jQuery(document).ready(function( $ ) {

	//focus state
	clicked_by = "";
    $('*').click(function(evt) {
        
        if (evt.screenX == 0 && evt.screenY == 0) {clicked_by = "keyboard";} 
        else {clicked_by = "mouse";}
        if (clicked_by == "mouse") {
            $(this).addClass("hidefocus");
            $("h1").blur();
        }

        else if (clicked_by == "keyboard") {
            $(this).removeClass("hidefocus");
        }
        
    });
	//check if Mac or Windows
	if(navigator.userAgent.indexOf('Mac') > -1){
		$('html').addClass("mac");
	}else{
		$('html').addClass("win");
	}
	$("body:not(.fl-builder-edit) .focus_btn").click(function(){
		
		$('html, body').animate({
			scrollTop: $($(this).find(".focus_btn_txt a").attr('href')).offset().top
		}, 500);
	});
    //action-carousel
	$("body").on('click', '.slick-arrow', function() {
		$(this).addClass("nofocus");
	});
	$("body").on('click', '.uabb-button', function() {
		$(this).addClass("nofocus");
	});
	$("body:not(.fl-builder-edit) .action-carousel-slider .fl-col-group").each(function(){
		$(this).slick({
		  dots: true,
		  infinite: true,
		  speed: 300,
		  adaptiveHeight: false,
		  variableWidth: true,
		  draggable:false,
		  asNavFor: 'body:not(.fl-builder-edit) .action-carousel-image-box .fl-col-content',
		  appendDots: $(this).parents('.action-carousel-row').find(".slider-dot"),
		  appendArrows: $(this).parents('.action-carousel-row').find(".slider-ctl"),
		  prevArrow:'<button type="button" class="slick-prev"><img src="/wp-content/uploads/2024/08/Group-9404.svg" alt="arrow left"></button>',
		  nextArrow:'<button type="button" class="slick-next"><img src="/wp-content/uploads/2024/08/Group-9403.svg" alt="arrow right"></button>',
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				draggable:false,
				slidesToShow: 1,
			  }
			}
		  ]
		});
	});
	$("body:not(.fl-builder-edit) .action-carousel-image-box .fl-col-content").each(function(){
		$(this).slick({
		  dots: false,
		  arrows: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
  		  centerMode: false,
  		  variableWidth: false,
		  dots:false,
		  verticalSwiping:true,
		  vertical: true,
		  adaptiveHeight: false,
		  draggable:false,
		  asNavFor: 'body:not(.fl-builder-edit) .action-carousel-slider .fl-col-group',
		  draggable:true,
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				draggable:false,
				slidesToShow: 1,
			  }
			}
		  ]
		});
	});
	$("body:not(.fl-builder-edit) .video-carousel-slider .fl-col-group").each(function(){
		$(this).slick({
		  dots: true,
		  infinite: true,
        	speed: 300,
			variableWidth: true,
        	slidesToScroll: 1,
			slidesToShow: 1,
        	centerMode: false,
        	adaptiveHeight: true,
			centerMode: true,
			draggable:false,
        	centerPadding: '250px',
		  	appendDots: $(this).parents('.video-carousel-row').find(".slider-dot"),
		  	appendArrows: $(this).parents('.video-carousel-row').find(".slider-ctl"),
		  	prevArrow:'<button type="button" class="slick-prev"><img src="/wp-content/uploads/2024/08/Group-9404.svg" alt="arrow left"></button>',
		  	nextArrow:'<button type="button" class="slick-next"><img src="/wp-content/uploads/2024/08/Group-9403.svg" alt="arrow right"></button>',
		  	responsive: [
				{
				breakpoint: 993,
					settings: {
						draggable:false,
						variableWidth: true,
                		slidesToShow: 1,
                		slidesToScroll: 1,
						centerPadding: '0px'
					}
				}
		  	]
		});
	});
});