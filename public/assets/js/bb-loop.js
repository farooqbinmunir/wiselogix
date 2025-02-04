jQuery(document).ready(function ($) {

	//////////////////////
	// OFFCANVAS FLYOUT //
	//////////////////////
	
		// Create overlay
		if ($(".flyout_button").length) {
			$("body").prepend("<div class='flyout_overlay'></div>")
			
		}

        $(".flyout_item").each(function(){
			let flyoutContainer = $(this);
			$("body").prepend(flyoutContainer);
			let firstHeading = flyoutContainer.find('h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6').first();
			let headingId = firstHeading.attr('id');
			if(!headingId){
				headingId = flyoutContainer.attr('id')+'_firstheading';
				firstHeading.attr('id',headingId);
			}
			flyoutContainer.attr("aria-labelledby",headingId);
        })

        
		
		// Open the Flyout
		$(".flyout_button").on('keydown', function (e) {
			if (e.key === ' ' || e.keyCode === 32) { //buttons take action when you press the spacebar
				e.preventDefault();
				$(this).trigger('click');
				return false;
			}
		}).click(function(){
			id_raw = $(this).attr("id")
			id = id_raw.replace("flyout_button_","")
			$(".flyout_item").removeClass("active")
			let flyoutContainer = $("#flyout_item_"+id);
			flyoutContainer.addClass("active");
			//track where to return focus after closing flyout dialog
			flyoutContainer.data('returnFocusTo', document.activeElement);

			
			$("body").addClass("flyout_active")
			$(".flyout_overlay").addClass("active")
			let closeButton = $("#flyout_close_"+id);
			closeButton.addClass("active");
			setTimeout(function(){
				closeButton.focus(); //set focus to close button at top of dialog
			}, 100);

			//make sure to trap keyboard focus in dialog
			oxfam.trapFocus(document.getElementById("flyout_item_"+id));

			// This is to trigger the BB "Numbers Counter" module
			if ($(".fl-number").length)
			{
				var page_scroll = $("html").scrollTop()
				setTimeout(function(){
					$("html").scrollTop(10000000000000)
					setTimeout(function(){$("html").scrollTop(page_scroll)},1)
				},200)
			}

			
			// This is to re-trigger animations for pages built with BB
			$("#flyout_item_"+id+" .fl-animation").removeClass("fl-animated")
			setTimeout(function(){$("#flyout_item_"+id+" .fl-animation").addClass("fl-animated")},1)
		})
		
		// Close the Flyout
		$(".flyout_close").click(function(){
			id_raw = $(this).attr("id")
			id = id_raw.replace("flyout_close_","")
			let returnFocusTo = $("#flyout_item_"+id).removeClass("active").data('returnFocusTo');
			if(returnFocusTo && typeof returnFocusTo['focus'] === 'function'){
				returnFocusTo.focus();
			} else {
				$('a[href]:not([disabled])').first().focus();
			}
			$(".flyout_overlay").removeClass("active");
			setTimeout(function(){$("body").removeClass("flyout_active")},100)
			$("#flyout_close_"+id).removeClass("active")
		})
		
		// Close offcanvas when click on overlay
		$(".flyout_overlay").click(function(){$(".flyout_item.active .flyout_close").trigger("click")})
		
		// Close offcanvas when ESC key pressed
	$(document).on('keydown', function (event) {
		if (event.key === 'Escape' || event.keyCode === 27) {
			$(".flyout_item.active .flyout_close").trigger("click");
		}
	});
		
	
	///////////////////
	// WINDOW RESIZE //
	///////////////////

	$(window).resize(function () {
		
		
		
	});






	///////////////////
	// WINDOW SCROLL //
	///////////////////	

	$(window).scroll(function () {
		
		
	});

	///////////////////
	// BG IMG CAPTION //
	///////////////////
	$('body:not(.fl-builder-edit) .bg_img_caption_container').each(function(){
		//move captions to be direct descendant of the .image_single element so the positioning works properly
		let self = $(this);
		self.closest('.image_single').append(self); //noop if .image_single is not present
		self.fadeIn(100);
	});
});
