jQuery(document).ready(function ($) {

	var isMobile = false; //initiate as false
	// device detection
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
		isMobile = true;
	}


	window['oxfam'] = {
		uniqueId: function (prefix) {
			return (prefix ? prefix : '') + (Math.random().toString(36) + '00000000000000000').slice(2, 12);
		},
		semanticButtonize: function ($element) {
			return $element.attr({ role: 'button', 'tabindex': 0 })
				.on('keydown', function (e) {
					if (e.key === 'Enter' || e.keyCode === 13 || e.key === ' ' || e.keyCode === 32) {
						e.preventDefault();
						$(this).trigger('click');
						return false;
					}
				});
		},
		trapFocus: function (element, extraFocusableSelectors, onLeave) {
			let $element = $(element);
			if ($element.data('focus-trap-set')) {
				return;
			}
			let focusableSelectors = [
				'a[href]:not([disabled])',
				'button:not([disabled])',
				'textarea:not([disabled])',
				'input[type="text"]:not([disabled])',
				'input[type="radio"]:not([disabled])',
				'input[type="checkbox"]:not([disabled])',
				'select:not([disabled])',
				'[tabindex]:not([tabindex="-1"])',
				'iframe'
			];
			let focusableEls = element.querySelectorAll(focusableSelectors.join(', ') + (extraFocusableSelectors ? ', ' + extraFocusableSelectors.join(', ') : ''));
			let firstFocusableEl = focusableEls[0];
			if (firstFocusableEl.tagName === "IFRAME") {
				//we won't get keydown events from cross-origin iframes (ex: youtube), so add an invisible element right before it
				let preNode = document.createElement('div');
				firstFocusableEl.parentNode.insertBefore(preNode, firstFocusableEl);
				preNode.tabIndex = 0;
				firstFocusableEl = preNode;
			}
			let lastFocusableEl = focusableEls[focusableEls.length - 1];
			if (lastFocusableEl.tagName === 'IFRAME') {
				//we won't get keydown events from cross-origin iframes (ex: youtube), so add an invisible element right after it
				let postNode = document.createElement('div');
				lastFocusableEl.parentNode.insertBefore(postNode, lastFocusableEl.nextSibling);
				postNode.tabIndex = 0;
				lastFocusableEl = postNode;
			}

			element.addEventListener('keydown', function (e) {
				if (e.key === 'Tab' || e.keyCode === 9) {
					if (e.shiftKey) { //tabbing backwards out of modal, set focus to last
						// shift + tab //
						if (document.activeElement === firstFocusableEl) {
							(onLeave || function () {
								e.preventDefault();
								lastFocusableEl.focus();
							})();
						}
					} else {
						// tab //
						if (document.activeElement === lastFocusableEl) {
							(onLeave || function () {
								e.preventDefault();
								firstFocusableEl.focus();
							})();

						}
					}
				}
			});
			$element.data('focus-trap-set', true);
		}
	}

	///////////////////////////////////////////
	// Caption exception for non-full images //
	///////////////////////////////////////////
	// First Image
	$("body:not(.fl-builder-edit) .image_single.new_entry.notfull.notfull .bg_img_caption_container:nth-of-type(2)").each(function () {
		$container = $(this).parent().find(">.fl-row-content-wrap >.fl-row-content >.fl-col-group >.fl-col:first-child")
		$container.css("position", "relative");
		$(this).appendTo($container);
	})
	// Second Image
	$("body:not(.fl-builder-edit) .image_single.new_entry.notfull.notfull .bg_img_caption_container:nth-of-type(2)").each(function () {
		$(this).css("transform", "translateX(-26px)");
		$container = $(this).parent().find(">.fl-row-content-wrap >.fl-row-content >.fl-col-group >.fl-col:last-child")
		$container.css("position", "relative");
		$(this).appendTo($container);
	})



	//Holiday Gift 2021
	setTimeout(function () {
		if ($(".wpd-bb-popup-40343__wrap").length) {
			var scrollbar_width = window.innerWidth - document.documentElement.clientWidth;
			var maxZ = Math.max.apply(null,
				$.map($('body *'), function (e, n) {
					if ($(e).css('position') != 'static')
						return parseInt($(e).css('z-index')) || 1;
				}));
			$(".wpd-bb-popup-40343__wrap").css("z-index", maxZ);
			$(".wpd-bb-popup-40343__wrap .jBox-container").css("right", scrollbar_width);
		}
	}, 2000)


	//These are all the selectors that used to use the all caps Global Headline or TSTAR PRO Headline fonts:
	// h1, .h1, .h1 .fl-heading, .h1 h2, .h1 p
	// h2, .h2, .h2 p, .h2 .fl-heading
	// .slideup_cont_over h3
	// h5, .h5, .h5 p, .h5 .fl-heading
	// h1.top-banner-title
	// .tstar_headline,
	// .tstar_headline h1
	// .TSPH h1, .TSPH h2, .TSPH h3, .TSPH h4, .TSPH h5, .TSPH h6, .TSPH p

	//sometimes content editors typed in all caps for these types of elements, but we want to use title case (text-transform:capitalize + lowercase text) instead
	//we will select for HTML elements where content editors are likely to have typed in allcaps incorrectly:
	let fixCaseSelectors = [
		".fl-module:not('.no-text-transform') h1 > .fl-heading-text",
		".fl-module:not('.no-text-transform') h2 > .fl-heading-text",
		".fl-module:not('.no-text-transform') h5 > .fl-heading-text",
		".slideup_cont_over:not('.no-text-transform') h3",
	]
	let $bodyNoBuilderMode = $("body:not(.fl-builder-edit)");
	$bodyNoBuilderMode.find(fixCaseSelectors.join(',')).each(function () {
		let element = $(this);
		if (!element.text().match(/[a-z]/g)) {
			//assume that all uppercase means that content editors entered (incorrectly) to match the uppercase font

			//attempt to set the text to title case
			//	acronyms will come out wrong
			//	emails will come out wrong
			//	small words (and, in, etc.) will come out wrong
			element.html(element.html().replace(
				/([\w&_]+[^\s<>-]*) */g,
				function (txt) {
					return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				}
			));
		}



	});



	if ($("header").length > 1) { $("header").not(':first').remove(); }

	$("body").focus()
	$('h1:first').attr("tabindex", "-1")

	$("#skip-to-content, .skip-to-content").click(function (e) {
		let focusElement = null;
		//first, see if .skip-to-content-target is set on anything
		let userSpecifiedTarget = $('.skip-to-content-target').first();
		if (userSpecifiedTarget.length) {
			focusElement = userSpecifiedTarget;
		} else {
			//ok so now try to find the first visible H1 in the page content
			let firstHeading = $('main .fl-row:not(.entry_header_hidden) h1').first(); //some pages have extra H1 inside of entry_header_hidden at the top
			if (!firstHeading.length) {
				firstHeading = $('main h1').first(); //maybe inside entry_header_hidden and will be made visible later on
			}
			if (firstHeading.length) {
				let link = firstHeading.find('a').first(); //might have a link inside it, better to focus there
				if (link.length) {
					focusElement = link;
				} else {
					focusElement = firstHeading.attr('tabindex', -1);
				}
			}
		}
		if (focusElement) {
			setTimeout(function () {
				focusElement.focus();
			}, 50);
			e.preventDefault();
			e.stopPropagation();
			return false;
		}
	})


	///////////////////
	// Accessibility //
	///////////////////

	// Close popups and modals when ESC is pressed

	$(document).on(
		'keydown', function (event) {
			var KEYCODE_ESC = 27;
			var isESCPressed = (event.key === 'Escape' || event.keyCode === KEYCODE_ESC);
			if (isESCPressed) {
				// close acc_external
				if ($(".acc_external").css("display") !== "none") {
					$(".acc_external").css("display", "none")
				}
				// close search modal
				if ($(".searchbox").hasClass("active")) {
					searchClose()
					setTimeout(function () { $(".topbar_search button").focus() }, 50)
				}

				//close joinus modal
				else if ($(".joinusbox").hasClass("active")) {
					joinusClose()
					setTimeout(function () { $(".topbar_join button").focus() }, 50)
				}

				//close drop-down menu on small screens
				else if ($(window).width() <= 992 && $(".menu-desktop").hasClass('active')) {
					toggleMobileMenu();
					setTimeout(function () {
						$(".mobile_menu_toggle").focus()
					}, 50);
				}

				// close main menu expanded
				else if ($("#main-menu>ul>li").hasClass("section_expanded")) {
					$(".section_expanded >button").focus();
					$("#main-menu button.mainmenu_main").attr("aria-expanded", "false")
					$("#main-menu button.mainmenu_main").parent().removeClass("section_expanded")
				}

				else if ($(".tooltip_description.tooltip_visible").length > 0) {
					//set focus back to opener
					$(".tooltip_description.tooltip_visible")
						.first()
						.closest('.tooltip_wrapper')
						.find('.tooltip_term').focus();

					//close tooltips
					$('.tooltip_term').attr('aria-expanded', 'false');
					$(".tooltip_description").removeClass("tooltip_visible");
				}


			}
		});


	$("#main-menu ul.sub-menu").each(function () {
		title_id = $(this).parent().attr("data-id")
		if (title_id) $(this).attr("aria-labelledby", title_id)
	})

	$("#main-menu button.mainmenu_main, #main-menu a.menu_main_donate").on('focus', function () {
		$("#main-menu button.mainmenu_main").not(this).attr("aria-expanded", "false");
		$("#main-menu button.mainmenu_main").not(this).closest('.section_expanded').removeClass("section_expanded");
	});

	$("#main-menu button.mainmenu_main").on('click', function (e) {
		$(".section_expanded").removeClass("section_expanded");
		var aria_expanded = $(this).attr("aria-expanded")
		if (aria_expanded == "false") {
			$(this).attr("aria-expanded", "true")
			$(this).parent().addClass("section_expanded")
		}
		else {
			if (e.type != "mouseover" || e.type != "touchstart") {
				$(this).attr("aria-expanded", "false")
				$(this).parent().removeClass("section_expanded")

			}
		}
		$("#main-menu button.mainmenu_main").not(this).attr("aria-expanded", "false")
	})

	$("#main-menu").on({
		'mouseleave': function () {
			$("#main-menu button.mainmenu_main").not(this).attr("aria-expanded", "false").blur()
			$(".section_expanded").removeClass("section_expanded");
		}
	})

	if ($(window).width() > 992) {
		$("#main-menu button.mainmenu_main").on('mouseover', function (e) {
			$(".section_expanded").removeClass("section_expanded");
			var aria_expanded = $(this).attr("aria-expanded")
			if (aria_expanded == "false") {
				$(this).attr("aria-expanded", "true")
				$(this).parent().addClass("section_expanded")
			}
			else {
				if (e.type != "mouseover" || e.type != "touchstart") {
					$(this).attr("aria-expanded", "false")
					$(this).parent().removeClass("section_expanded")

				}
			}
			$("#main-menu button.mainmenu_main").not(this).attr("aria-expanded", "false")
		})

	};





	// Add Youtube attribute for autoplay
	$('iframe').attr('allow', 'autoplay; encrypted-media');



	// Templates with transparent header

	//ERROR 404
	$("body.error404").addClass("page-template-single-menuoverlap"); // 404 Error

	//OUR PEOPLE
	$("body.page-template-single-people").addClass("page-template-single-menuoverlap"); // Our People

	//OUR EXPERTS
	$("body.page-template-single-experts").addClass("page-template-single-menuoverlap"); // Our Experts

	// SUMMIT FORM
	$("body.postid-35044").addClass("page-template-single-menuoverlap"); // Our Experts

	// LANDING PAGES WITH MENU OVERLAP
	$("body.landing-page-template-single-menuoverlap").addClass("page-template-single-menuoverlap"); // Our Experts


	//TODO: fix this incorrect logic. Not all Feminist MEAL pages should use the menu overlap, ex: guidance-note-on-feminist-meal, transformative-leadership-for-womens-rights-theory-of-change
	$("body.tax_feminist-meal").addClass("page-template-single-menuoverlap"); // CPT: Publications + TAXO: Feminist MEAL



	// CAMPAIGNS: Old Vs New entries layout
	if ($("body").hasClass("single-campaign") || $("body").hasClass("single-emergency") || $("body").hasClass("single-event")) {
		if ($("body").find(".new_entry").length < 1) {
			$(".fl-row").removeClass("entry_header_hidden");
			$('.fl-post-content').addClass("old_entries_content_fix");
		}
		else $("body").addClass("page-template-single-menuoverlap"); // Campaigns
	}

	if ($("body").hasClass("archive")) $("body").removeClass("page-template-single-menuoverlap");



	////////////////////////
	// Searchbox @ Topbar //
	////////////////////////
	function searchOpen() {
		joinusClose()
		$(".searchbox").addClass("active");
		$(".searchbox .search_wrap").addClass("active");
	}
	function searchClose() {
		$(".search_wrap").removeClass("active");
		$(".searchbox").removeClass("active");
	}
	$(".topbar_search button").click(function () {
		if ($(".searchbox").hasClass("active")) {
			$(this).focus()
			searchClose()
		}
		else {
			searchOpen();
			setTimeout(function () { $("#search_input").focus() }, 50)
			oxfam.trapFocus(document.getElementById("searchbox"))
		}
	})
	$(".search_close").click(function () {
		searchClose()
		setTimeout(function () { $(".topbar_search button").focus() }, 50)
	})


	//////////////////////
	// Sign Up @ Topbar //
	//////////////////////
	function joinusOpen() {
		searchClose()
		$(".joinusbox").addClass("active");
		$(".joinus_wrap").addClass("active");
	}
	function joinusClose() {
		$(".joinus_wrap").removeClass("active")
		$(".joinusbox").removeClass("active")
	}
	$(".topbar_join button").click(function () {
		if ($(".joinusbox").hasClass("active")) {
			$(this).focus();
			joinusClose();
		}
		else {
			joinusOpen();
			setTimeout(function () { $("#en__field_supporter_firstName_inheader").focus() }, 50)
			oxfam.trapFocus(document.getElementById("joinusbox"));
		}
	})
	$(".joinus_close").click(function () {
		joinusClose()
		setTimeout(function () { $(".topbar_join button").focus() }, 50)
	})


	$("#en__field_supporter_questions_147505_inheader, #en__field_supporter_questions_147505").click(function () {
		if ($(this).parent().find(".en__field_supporter_questions_147505_control").val() == "Y")
			$(this).parent().find(".en__field_supporter_questions_147505_control").val("N")
		else $(this).parent().find(".en__field_supporter_questions_147505_control").val("Y")
	})






	/////////////////////
	// New Mobile Menu //
	/////////////////////
	var mobile_sn = `
        <div class="mobile_menu_social">
            <h3 id="header-sn-title" class="sr-only">Connect with us</h3>
            <ul aria-labelledby="header-sn-title" class="footer_sn_icons">
                <li><a href="#" target="_self" aria-label="Instagram"><span class="ua-icon ua-icon-instagram-with-circle"></span></a></li>
                <li><a href="#" target="_self" aria-label="Facebook"><span class="ua-icon ua-icon-facebook-with-circle"></span></a></li>
                <li><a href="#" target="_self" aria-label="Twitter"><span class="ua-icon ua-icon-twitter-with-circle"></span></a></li>
                <li><a href="#" target="_self" aria-label="YouTube"><span class="ua-icon ua-icon-youtube-with-circle"></span></a></li>
            </ul>
        </div>
    `;
	$('li[data-id="menu-40172-title"]').html(mobile_sn)

	var menu_desktop_main_title = $('#main-menu >ul>li:first-child').html()
	var mobile_search = `
        <h2 id="search-menumobile-title" class="sr-only">Search</h2>
        <form method="get" id="searchform_mobile" action="/">
            <label for="search_input_mobile">What can we help you find?</label>
            <input id="search_input_mobile" type="text" name="s" class="search_input">
        </form>
        <button class="search_button mobile" form="searchform_mobile">Search</button>
    `;

	function mobile_search_swap() {
		var $w_width = 976;
		if (isMobile == true) $w_width = 992;

		if ($(window).width() < $w_width) {
			if ($('#main-menu >ul>li:first-child').html() != mobile_search)
				$('#main-menu >ul>li:first-child').html(mobile_search)
		} else {
			$('#main-menu >ul>li:first-child').html(menu_desktop_main_title)
			$("#main-menu a.menu_main_logo").on('focus', function () {
				$("#main-menu button.mainmenu_main").attr("aria-expanded", "false");
				$("#main-menu button.mainmenu_main").closest('.section_expanded').removeClass("section_expanded");
			});
		}
	}
	mobile_search_swap()


	// MAX MEGA MENU
	function toggle_menu(state) {
		if (state == "green") {
			$("#mega-menu-wrap-header").addClass("active");
			$("#mega-menu-header > li:not(.mega-menu_main_donate) > a.mega-menu-link").addClass("active");
			$(".mega-menu_main_logo").addClass("active");
			$("#mega-menu-header > li > .mega-sub-menu").addClass("white");
			$("#mega-menu-header > li > .mega-sub-menu > li .mega-sub-menu ").fadeIn(1);
		}
		if (state == "white" && !$("header").hasClass("scrollfixed")) {
			$("#mega-menu-wrap-header").removeClass("active");
			$("#mega-menu-header > li:not(.mega-menu_main_donate) > a.mega-menu-link").removeClass("active");
			$(".mega-menu_main_logo").removeClass("active");
			$("#mega-menu-header > li > .mega-sub-menu").removeClass("white");
			$("#mega-menu-header > li > .mega-sub-menu > li .mega-sub-menu ").fadeOut(1);
		}

		$("#mega-menu-wrap-header #mega-menu-header").css("overflow", "visible !important");
	}



	if ($("body").hasClass("page-template-single-menuoverlap") == false) {
		toggle_menu("green");
		$("header").removeClass("header_height_fix");
	}

	$("#mega-menu-header").on('mouseenter', function () {
		toggle_menu("green");
		$("header").removeClass("header_height_fix");
	});
	$("#mega-menu-header").on('mouseleave', function () {
		if ($("body").hasClass("page-template-single-menuoverlap") == true)
			toggle_menu("white");
		$("header").addClass("header_height_fix");
	});


	$("header").addClass("header_height_fix");


	// MOBILE FIXED MENU //
	$(".oxmm_hamb").click(function () {


		if ($(".ox_mobile_menu_body").height() == 0) {
			$("header > .fl-page-header-wrap").addClass("mobile_fixed");
			$("body").css("overflow", "hidden");
		}
		else {
			$("header > .fl-page-header-wrap").removeClass("mobile_fixed");
			$("body").css("overflow", "initial");
		}




	})











	// BLOG -> Old blogs restric width of content
	if (!$("body").hasClass("fl-builder-edit") || $("body").hasClass("fl-theme-layout-template-default")) {
		if (
			$("body").hasClass("single-publication") ||
			$("body").hasClass("single-blog") ||
			$("body").hasClass("single-story") ||
			$("body").hasClass("single-news") ||
			$("body").hasClass("fl-theme-layout-template-default")
		) {
			if ($(".new_entry").length == 0) {
				//$('.fl-post-content').css({'width':'770px','margin':'auto','position':'relative'/*,'left':'-100px'*/})
				$('.fl-post-content').addClass("old_entries_content_fix");
				$('.fl-content').css({ 'margin': '0px' })
				$(".publications_old_header").css("display", "block");
				$(".entry_header_hidden").css("display", "block");
			}
		}
	}

	$('.fl-photo-caption.fl-photo-caption-below').each(function () {
		let self = $(this);
		if (!self.attr('id')) {
			self.attr('id', oxfam.uniqueId('fl-photo-caption-'));
		}
		let figure = self.closest('.fl-photo');
		figure.attr({ 'role': 'figure', 'aria-describedby': self.attr('id') });
	})

	// MODULES

	// IMAGE SINGLE CAPTION
	setTimeout(function () {
		$('.image_single').each(function () {
			let title = $.trim($(this).find('.banner_img_info.txt').text());
			if (title && !$(this).find(".image_info_outer").length) {
				$(this).append("<div class='image_info_outer'><div class='image_info_inner'><div class='image_info_txt'>" + title + "</div></div></div>");
			}
		})
	}, 100);

	// PHOTO SLIDER //
	if ($(".photo_carousel").length) {
		oxfam.semanticButtonize($('.photo_carousel .fl-slideshow-thumbs-page .fl-slideshow-image'));

		$('.photo_carousel').each(function () {
			$(this).find('.fl-slideshow-thumbs-page .fl-slideshow-image').each(function (index) {
				$(this).attr('aria-label', 'Slide ' + (index + 1));
			});
		});

		$(".photo_carousel").each(function () {
			//$(this).height($(this).height()+100) // push container height by 100px to make sure caption is visible
		});

		//fix crappy aria labels from BB/YUI slideshow
		$('.photo_carousel a[aria-label="next"]').attr('aria-label', 'next slide');
		$('.photo_carousel a[aria-label="prev"]').attr('aria-label', 'previous slide');

		setInterval(function () {
			if ($(".photo_carousel .fl-slideshow-caption-content").html() == "")
				$(".photo_carousel .fl-slideshow-caption-content").hide()
			else $(".photo_carousel .fl-slideshow-caption-content").show()
		}, 10)

		setTimeout(function () {
			$(".photo_carousel .fl-slideshow-base").addClass("height_initial");
		}, 100)


	}



	// VIDEO PLAY BUTTON
	$(".video_play").on({
		mouseenter: function () {
			$(this).find("img:not(.uabb-close-image)").attr("src", "../assets/images/playbutton_hover.png")
		},
		mouseleave: function () {
			$(this).find("img:not(.uabb-close-image)").attr("src", "../assets/images/playbutton.png")
		}
	});
	$(".video_play.yellow").on({
		mouseenter: function () {
			$(this).find("img:not(.uabb-close-image)").attr("src", "../assets/images/play-hover-yellow.svg")
		},
		mouseleave: function () {
			$(this).find("img:not(.uabb-close-image)").attr("src", "../assets/images/play-button.svg")
		}
	});



	//VIDEO HISTORY BROWSER PATCH
	$(".video_play").find("img").click(function () {
		video_iframe = $(".video_play-overlay").find("iframe").parent().html();
		video_url = $(".video_play-overlay").find("iframe").attr("src");

		data_append = $(".uabb-modal-iframe.uabb-video-player").attr("data-append");
		$(".uabb-modal-iframe.uabb-video-player").attr("data-append", data_append + "&autoplay=1");

		//video_iframe = video_iframe.replace(video_url,video_url+"?autoplay=1")
		//$(".video_play-overlay").find("iframe").parent().html(video_iframe)
	});

	$(".video_play-overlay").click(function () {
		video_iframe = $(".video_play-overlay").find("iframe").parent().html();
		video_url = $(".video_play-overlay").find("iframe").attr("src");

		data_append = $(".uabb-modal-iframe.uabb-video-player").attr("data-append");
		$(".uabb-modal-iframe.uabb-video-player").attr("data-append", data_append + "&autoplay=1");

		//video_iframe=video_iframe.replace("?autoplay=1","")
		//$(".video_play-overlay").find("iframe").parent().html(video_iframe)

		/*
		a=setTimeout(function(){
			$(".uabb-modal-close").trigger("click");
			clearTimeout(a)
		},100);
		*/
	})


	if ($('.bs_filter_wrapper').length) {
		//there is a bs_filter on this page

		$("#bs_filter_options_trigger").click(function (e) {
			e.preventDefault();
			let $button = $(this);
			let linksContainer = $button.next();
			$button.attr('aria-expanded', linksContainer.css('display') === 'none');
			linksContainer.slideToggle();
		})

		$('body').click(function (e) {
			//close the filter options box when the user clicks outside of it
			if ($(e.target).closest('.bs_filter_options_container').length === 0) {
				$('#bs_filter_options_trigger').attr('aria-expanded', false).next().slideUp();
			}
		});

		$('.bs_filter_clear').focus(function () {
			$('#bs_filter_options_trigger').attr('aria-expanded', false).next().slideUp();
		});
	}

	function setFocusToFeedItem(focusItem) {
		let firstHeading = focusItem.find('h1 a, h2 a, h3 a, h4 a, h5 a, h6 a').first();
		if (firstHeading.length) {
			firstHeading.focus(); //set focus to the first heading/link
		} else {
			focusItem.find('a, button').first().focus(); //there is no heading link, so set focus to the first link or button
		}
	}

	// BLOGS & STORIES :: LOAD MORE
	if ($(".bs_rest_item_wrapper").length) {
		let show_cluster = 8;
		let show_current = 4;
		if ($(".search_item_wrap").hasClass("bs_rest_item_wrapper")) // SEARCH 
		{
			show_cluster = 10;
			show_current = 2;
		} else if ($(".archive_item_wrap").hasClass("bs_rest_item_wrapper")) // ARCHIVE
		{
			show_cluster = 8;
			show_current = 2;
		}
		//else if ($("body").hasClass("tax-publication-type")) // ARCHIVE 
		else if ($("body").hasClass("archive")) // ARCHIVE 
		{
			show_cluster = 8;
			show_current = 2;
		}

		function loadmoreposts(setFocusAfterLoad) {
			let show_next = show_cluster + show_current;
			for (let a = show_current; a < show_next; a++) {
				let feedItem = $(".bs_rest_item_wrapper:nth-of-type(" + a + ")");
				feedItem.removeClass("hidden");
				if (setFocusAfterLoad && show_current === a) {
					setFocusToFeedItem(feedItem);
				}
			}
			show_current = show_next;

			let wrapper = $(".bs_rest_item_wrapper");
			if (wrapper.length < show_cluster || wrapper.length < show_current) {
				$("#loadMore").css("display", "none");
			}

		}

		if ($(".bs_rest_item_wrapper .unified_story_card_item").length < show_cluster) {
			$(".bs_rest_item_wrapper").removeClass("hidden");
			$("#loadMore").css("display", "none");
		} else {
			loadmoreposts(false);
			$("#loadMore").click(function () {
				loadmoreposts(true);
			})
		}

	}



	/* PEOPLE */
	$(".person_readmore").click(function () {
		let self = $(this);
		if (self.attr('aria-expanded') === 'false') {
			self.find('span').text('-');
			self.attr('aria-expanded', 'true');
		} else {
			self.find('span').text('+');
			self.attr('aria-expanded', 'false');
		}
		self.parent().find(".person_fullbio").slideToggle("fast");
	})



	/* MONARCH SOCIAL ICONS FIX */
	//$('.et_social_icons_container').append("<li class='sn_donate'><a href='#' target='_self'><div class='sn_donate_img'></div><div class='et_social_network_label'><div class='et_social_networkname'>Donate</div></div></a></li>");
	$('.et_social_icons_container a').attr("rel", "")


	/* OLD PUBLICATIONS MAKE MARGINS WIDTH */
	/*
	if (jQuery("body.single-publication").find(".container").find(".fl-row").hasClass("fl-row-fixed-width"))
	{
		$(".fl-post-content[itemprop='text']").addClass("article_widthcap");
		$(".publications_old_header").css("display","block");
	}
	*/


	/* DONATION FORMS */

	$('.donate_radio_button_label').on("click", function () {
		$(this).parents("form").find('.donate_other_outer_wrapper').removeClass('visible');
	});
	$('.donate_radio_button_label[for="donate_form_amount_option_other"]').on("click", function () {
		$(this).parents("form").find('.donate_other_outer_wrapper').toggleClass('visible');
	})

	//toggle the other amount field based on radio option selection
	$('input[name="donate_form_amount"]').change(function () {
		$(this).closest('form').find('.donate_other_outer_wrapper').css('visibility', this.value === 'other' ? 'visible' : 'hidden');
	});

	//make sure the initial visibility is correct
	$('.donation_emergency .donate_other_outer_wrapper').css('visibility', $('.donation_emergency input:checked[name="donate_form_amount"]').val() === 'other' ? 'visible' : 'hidden');
	$('.donation_standard .donate_other_outer_wrapper').css('visibility', $('.donation_standard input:checked[name="donate_form_amount"]').val() === 'other' ? 'visible' : 'hidden');

	//make sure the correct amount is sent to the donation form target
	$('.donation_emergency form, .donation_standard form').on('submit', function () {
		let amount = $(this).find('input:checked[name="donate_form_amount"]').val();
		if (amount === 'other') {
			amount = $(this).find('input[name="amount_other"]').val() || 50;
			if (isNaN(amount) || amount <= 0) {
				amount = 50;
			}
		}
		$(this).find('input[name="transaction.donationAmt"]').val(amount);
	});

	/* POPUP close button white */
	if ($(".popup_emergency_wrap").length) $(".uabb-close-icon").addClass("white");


	function menu_fixed(state) {
		if (state == "fixed") {
			toggle_menu("green");
			$("header").removeClass("header_height_fix");
			$("header").addClass("scrollfixed");
			$("#mega-menu-wrap-header").addClass("shadow");
		}
		else {
			if ($("body").hasClass("page-template-single-menuoverlap") == true)
				toggle_menu("white");
			$("header").addClass("header_height_fix");
			$("header").removeClass("scrollfixed");
			$("#mega-menu-wrap-header").removeClass("shadow");
		}

	}
	if ($(window).scrollTop() > 15) menu_fixed("fixed");
	else menu_fixed("static")




	/* SCORECARD */

	$(".opc_storycard a.uabb-new-ib-link, .scorecard_banner a.uabb-new-ib-link,.scorecard_banner a.sc_button").focus(function () {
		$(this).closest('.uabb-ib2-outter').addClass('uabb-ib2-hover');
	}).blur(function () {
		$(this).closest('.uabb-ib2-outter').removeClass('uabb-ib2-hover');
	})
	oxfam.semanticButtonize($(".opc_storycard a.uabb-new-ib-link")).removeAttr('tabindex');

	/* Scorecard single page */
	function scorecard_fullscreen() {
		if ($(".scorecard_card_column1").length) {
			if ($(".fl-page-bar").css("display") == "none") $adminbar = 0;
			else $adminbar = $(".fl-page-bar").height()

			if ($("#wpadminbar").css("display") == "none") $greenbar = 0;
			else $greenbar = $("#wpadminbar").height()

			if ($(window).width() > 768)
				$(".scorecard_card_column1, .scorecard_card_column2").height($(window).height() - $adminbar - $greenbar)
			else
				$(".scorecard_card_column1, .scorecard_card_column2").height("100%");

			$(".scorecard_card_column1").find(".fl-col-content").height("100%");
		}
	}
	function scorecard_typewriter_patch() {
		if (jQuery(".scorecard_card_column1").length) {
			curr_height = jQuery(".scorecard_card_column2").height();
			jQuery(".scorecard_card_column2").css("height", "initial")
			jQuery("html").scrollTop(1000)
			setTimeout(function () {
				jQuery("html").scrollTop(0)
				jQuery(".scorecard_card_column2").css("height", curr_height)
			}, 10)
		}
	}
	scorecard_fullscreen();
	setTimeout(function () { scorecard_typewriter_patch(); }, 500)










	// SUMMIT FORM INPUT FILE 1
	$('#input_2_13').change(function () {
		if ($(this).get(0).files.length === 0) {
			$(this).parents('.ginput_container_fileupload').removeClass('ginput_container_fileuploaded');
			$('#delete-file-1').fadeOut();
			$('#file-name-1').html('');
		} else {
			$(this).parents('.ginput_container_fileupload').addClass('ginput_container_fileuploaded');
			$('#delete-file-1').fadeIn();

			var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
			$('#file-name-1').html('<b>File: ' + filename + '</b>');
		}
	});
	// DELETE FILE 1
	$('#delete-file-1').click(function () {
		$('#input_2_13').attr('value', '');
		$('#file-name-1').html('');
		$('#input_2_13').parents('.ginput_container_fileupload').removeClass('ginput_container_fileuploaded');
		$('#input_2_13').parents('.ginput_container_fileupload').css({ 'background-color': 'rgb(68, 132, 26, .1)' });
		$(this).fadeOut();
	});

	// SUMMIT FORM INPUT FILE 2
	$('#input_2_18 ').change(function () {
		if ($(this).get(0).files.length === 0) {
			$(this).parents('.ginput_container_fileupload').removeClass('ginput_container_fileuploaded');
			$('#delete-file-2').fadeOut();
			$('#file-name-2').html('');
		} else {
			$(this).parents('.ginput_container_fileupload').addClass('ginput_container_fileuploaded');
			$('#delete-file-2').fadeIn();

			var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
			$('#file-name-2').html('<b>File: ' + filename + '</b>');
		}
	});
	// DELETE FILE 2
	$('#delete-file-2').click(function () {
		$('#input_2_18 ').attr('value', '');
		$('#file-name-2').html('');
		$('#input_2_18 ').parents('.ginput_container_fileupload').removeClass('ginput_container_fileuploaded');
		$('#input_2_18 ').parents('.ginput_container_fileupload').css({ 'background-color': 'rgb(68, 132, 26, .1)' });
		$(this).fadeOut();
	});

	// DRAG AND DROP STYLING
	$('.ginput_container_fileupload').on('dragenter', function () {
		$(this)
			.css({ 'background-color': 'rgb(68, 132, 26, .2)' });
	});
	$('.ginput_container_fileupload').on('dragleave', function () {
		$(this)
			.css({ 'background-color': '' });
	});

	// MAKE SUBMIT BUTTON SHOW PROCESSING SUBMISSION
	var gformSubmitted = false;
	$(".gform_wrapper form").submit(function (event) {
		if (gformSubmitted) {
			event.preventDefault();
		}
		else {
			gformSubmitted = true;
			$("input[type='submit']", this).val("Processing, please wait...");
		}
	});


	// SCORECARD INCON COLORS
	//#a30d22 - red
	//#f49310 - orange
	//#0b8848 - Green
	setTimeout(function () {
		$(".sc_ico.red *").each(function () {
			if ($(this).attr("fill") == "#f49310" || $(this).attr("fill") == "#0b8848") $(this).attr("fill", "#a30d22")
			if ($(this).attr("stroke") == "#f49310" || $(this).attr("stroke") == "#0b8848") $(this).attr("stroke", "#a30d22")
		})

		$(".sc_ico.orange *").each(function () {
			if ($(this).attr("fill") == "#0b8848" || $(this).attr("fill") == "#a30d22") $(this).attr("fill", "#f49310")
			if ($(this).attr("stroke") == "#0b8848" || $(this).attr("stroke") == "#a30d22") $(this).attr("stroke", "#f49310")
		})

		$(".sc_ico.green *").each(function () {
			if ($(this).attr("fill") == "#f49310" || $(this).attr("fill") == "#a30d22") $(this).attr("fill", "#0b8848")
			if ($(this).attr("stroke") == "#f49310" || $(this).attr("stroke") == "#a30d22") $(this).attr("stroke", "#0b8848")
		})
	}, 200)

	//if ($(this).css("fill")=="rgb(244, 147, 16)") #de1e39





	/// Policy & Pactice New 2021 //
	$("body:not(.fl-builder-edit) .policypractice_home_hub").click(function () {
		window.location = $(this).find(".launch_hub a.fl-button").attr("href")
	})

	$(".meal_item").click(function () {
		window.location = $(this).find(".meal_item_button a").attr("href")
	})



	// Accessibility: Open External link
	/*
	$("a:not(.no_external)").each(function(){
		if ($(this).attr("target")=="_blank")
		{
			$(this).append("<span class='acc_external'>(Link opens in a new window)</span>")
		}
	})
	*/




	//$('.tooltip_wrapper').mousemove(function (e) {$(this).find(".tooltip_description").css({left: e.clientX -160, top: e.clientY -160});});

	let $tooltipWrappers = $('.tooltip_wrapper');
	if ($tooltipWrappers.length) { //1. Only do tooltip work if there are any on the page
		let toggleTooltip = function (e, tooltipButton) {
			e.preventDefault();
			e.stopPropagation();
			if (tooltipButton.attr('aria-expanded') === 'true') {
				tooltipButton.attr('aria-expanded', 'false');
				tooltipButton.parent().find(".tooltip_description").removeClass("tooltip_visible");
			} else {
				tooltipButton.attr('aria-expanded', 'true');
				tooltipButton.parent().find(".tooltip_description").addClass("tooltip_visible");
				setTimeout(function () {
					//set focus to close button after showing (and after css transition is mostly done)
					tooltipButton.parent().find('.tooltip_close').focus();
				}, 200);
			}
		}
		let $tooltipButtons = $('.tooltip_term');
		$tooltipButtons.click(function (e) {
			toggleTooltip(e, $(this)); //toggle the tooltip on click or enter key
		});
		$tooltipButtons.on('keydown', function (e) {
			if (e.key === ' ' || e.keyCode === 32) {
				toggleTooltip(e, $(this)); //toggle the tooltip on space bar to fully mimic a button
			}
		});
		$('body').click(function (e) {
			//close all tooltips when the user clicks outside of them
			if ($(e.target).closest('.tooltip_wrapper').length === 0) {
				$tooltipButtons.attr('aria-expanded', 'false');
				$(".tooltip_description").removeClass("tooltip_visible");
			}
		});
		$('.tooltip_close').click(function () {
			//close a tooltip when the close button is clicked
			let wrapper = $(this).closest('.tooltip_wrapper');
			setTimeout(function () {
				wrapper.find(".tooltip_description").removeClass("tooltip_visible");
				wrapper.find('.tooltip_term').attr('aria-expanded', 'false').focus();
			}, 10)
		})
	}






	///////////////////////////////////
	// New menu mobile accessibility //
	///////////////////////////////////
	function toggleMobileMenu() {
		$("body").toggleClass("mobilemenu_show");
		$(".menu-desktop").toggleClass("active");
		let hamburgerMenu = $(".mobile_menu_toggle");
		if (hamburgerMenu.attr("aria-expanded") === "true") {
			hamburgerMenu.attr("aria-expanded", "false");
			let mainMenuItems = $("#main-menu button.mainmenu_main");
			mainMenuItems.attr("aria-expanded", "false");
			mainMenuItems.parent().removeClass("section_expanded");
		} else {
			hamburgerMenu.attr("aria-expanded", "true")
			if (!hamburgerMenu.data('focus-check-set')) {
				let userTabbedOutOfMenu = function (e, checkShift) {
					return $(".menu-desktop").hasClass('active') && ((e.key === 'Tab' || e.keyCode === 9) && (checkShift === e.shiftKey));
				}
				hamburgerMenu.keydown(function (e) {
					if (userTabbedOutOfMenu(e, true)) {
						toggleMobileMenu();
					}
				});
				let mainMenu = document.getElementById('main-menu');
				let focusableMenuElements = mainMenu.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
				let lastFocusableMenuElement = focusableMenuElements[focusableMenuElements.length - 1];
				$(lastFocusableMenuElement).keydown(function (e) {
					if (userTabbedOutOfMenu(e, false)) {
						toggleMobileMenu();
					}
				});
				hamburgerMenu.data('focus-check-set', true);
			}
		}
	}

	$(".mobile_menu_toggle").click(function () {
		toggleMobileMenu();
	});

	$('body').click(function (e) {
		if ($(window).width() <= 992) {
			let menuIsCurrentlyExpanded = $(".menu-desktop").hasClass('active');
			let clickTargetIsOutsideMenu = !$(e.target).closest('#main-menu').length;
			if (menuIsCurrentlyExpanded && clickTargetIsOutsideMenu) {
				toggleMobileMenu();
			}
		}
	});



	//$(".joinus_form_submit.header").unbind("click")
	$(".joinus_form_submit.header").on("click", function () {

		var err1 = err2 = err3 = 0;
		if (!$("#en__field_supporter_firstName_inheader").val()) err1 = 1
		if (!$("#en__field_supporter_lastName_inheader").val()) err2 = 1
		if (!$("#en__field_supporter_emailAddress_inheader").val()) err3 = 1

		//if (err1!=0) $("#en__field_supporter_firstName_inheader").addClass("missing") 
		if (err1 != 0) $("#joinusform_header >.en__field--firstName").addClass("missing")
		else $("#joinusform_header >.en__field--firstName").removeClass("missing")
		if (err2 != 0) $("#joinusform_header >.en__field--lastName").addClass("missing")
		else $("#joinusform_header >.en__field--lastName").removeClass("missing")
		if (err3 != 0) $("#joinusform_header >.en__field--emailAddress").addClass("missing")
		else $("#joinusform_header >.en__field--emailAddress").removeClass("missing")

		if (err1 == 0 && err2 == 0 && err3 == 0)
			document.getElementById("joinusform_header").submit();
		else return;
	})













	//////////////////////////
	// BB Smooth Scroll Fix //
	//////////////////////////
	function bbScroll() {
		if ('undefined' != typeof FLBuilderLayoutConfig) {
			let offset = 100;

			if ('undefined' === typeof FLBuilderLayout) {
				return;
			}
			let windowWidth = $(window).width();
			if (windowWidth < 768) offset = 50; //this was -20 for some reason, but that makes no sense at all so I changed it jason@artisanapps
			// window width > 992, the offset should be increased because the main menu is 14.8rem fixed at the top of the screen
			if (windowWidth > 992 && $('#main-menu').length > 0 && !$('body').hasClass('noheader')) offset = 150;
			//if ($(".menu_jumpto").length && !$("body").hasClass("menu_main_out")) offset += 150

			/*
			if ( FLBuilderLayout._isMobile() && $(window).width() < 992 ) { offset = 0; } 
			if ( $( 'body.admin-bar' ).length > 0 ) { offset += 32; }
			*/

			FLBuilderLayoutConfig.anchorLinkAnimations.duration = 1000;
			FLBuilderLayoutConfig.anchorLinkAnimations.easing = 'swing';
			FLBuilderLayoutConfig.anchorLinkAnimations.offset = offset;



		}
	}

	bbScroll();




	// ************* //
	// WINDOW RESIZE //
	// ************* //

	$(window).resize(function () {


		bbScroll();
		$("#mega-menu-header > li > .mega-sub-menu").width("0px")

		// Scorecard resize
		scorecard_fullscreen()

		mobile_search_swap()



	});


	// ************* //
	// WINDOW SCROLL //
	// ************* //
	$(window).scroll(function () {

		if ($(window).scrollTop() > 15) menu_fixed("fixed");
		else menu_fixed("static");

		// FIX SAVE BUTTON GRAVITY FORMS
		if ($('#field_2_2').length || $('#field_2_24').length) {
			var $el = $('#field_2_2');
			var $el1 = $('#field_2_24');

			var topBreakPoint = $el.offset().top + $el.outerHeight() - $(window).height();
			var bottomBreakPoint = $el1.offset().top + $el1.outerHeight() - $(window).height();

			if ($(window).scrollTop() >= topBreakPoint && $(window).scrollTop() <= bottomBreakPoint) {
				// $('.fixed_save_link').css('bottom', '13px');
				$('.fixed_save_link').addClass('fixed_save_link_desktop_active fixed_save_link_mobile_active');
				$('.fixed_save_link').removeClass('fixed_save_link_desktop_inactive fixed_save_link_mobile_inactive');
			} else {
				// $('.fixed_save_link').css('bottom', '-60px');
				$('.fixed_save_link').removeClass('fixed_save_link_desktop_active fixed_save_link_mobile_active');
				$('.fixed_save_link').addClass('fixed_save_link_desktop_inactive fixed_save_link_mobile_inactive');
			}
		}

	});

	if ($('.wpd-bb-popup__outer').length) {
		//there is a popup on this page, watch to see when wpd-bb-popup__inner is moved out of wpd-bb-popup__content and into the visible popup
		let childListObserver = new MutationObserver(function (mutationRecords, thisObserver) {
			//check if wpd-bb-popup__inner is inside of jBox-Modal yet
			let popupContents = $('.wpd-bb-popup__inner').closest('.jBox-Modal');
			if (popupContents.length) {
				//the popup is now visible to the user

				//stop observing
				thisObserver.disconnect();

				let isModal = !!$(".jBox-overlay-Modal").length;

				//remove button role from links with href
				popupContents.find('a[role=button]').each(function () {
					var link = $(this),
						href = link.attr('href');
					if ('undefined' != typeof href && href !== '#' && !!href && href.indexOf('javascript:') !== 0) {
						link.removeAttr('role');
					}
				});

				let popupElement = popupContents[0];

				//make more aria friendly
				popupContents.attr('aria-modal', isModal);
				let dialogHeading = popupContents.find('h1,h2,h3,h4,h5,h6').first();
				if (dialogHeading.length === 1) {
					let headingId = dialogHeading[0].id;
					if (!headingId) {
						dialogHeading[0].id = headingId = oxfam.uniqueId('dialog-heading-');
					}
					popupContents.attr('aria-labelledby', headingId);
				}
				popupElement.setAttribute('role', 'dialog');


				//change the close "button" from a div to a real button
				let closeButton = popupContents.find('.jBox-closeButton');
				if (closeButton.length) {
					closeButton.html($('<button>').html(closeButton.html()));
					closeButton.find('button').attr('aria-label', 'Close');
				}

				//set focus to the first element and trap focus in the popup
				if (isModal) {
					let focusableEls = popupElement.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
					let firstFocusableEl = focusableEls[0];
					let currentFocusedElement = document.activeElement;
					oxfam.trapFocus(popupElement);
					setTimeout(function () { firstFocusableEl.focus() }, 10);

					//watch for when the popup is closed
					(new MutationObserver(function (mr, thisObs) {
						if ($('.wpd-bb-popup__inner').closest('.jBox-Modal').length === 0) {
							//the popup was just closed, set focus back to the last element
							try {
								if (currentFocusedElement && currentFocusedElement.tagName.toLowerCase() !== 'body') {
									currentFocusedElement.focus();
								} else {
									$('a[href]:not([disabled])').first().focus();
								}
							} catch (e) {

							}
							thisObs.disconnect();
						}
					})).observe($('.wpd-bb-popup__content')[0], { childList: true });
				}
			}
		});
		childListObserver.observe($('.wpd-bb-popup__content')[0], { childList: true });
	}


	$('.fl-builder-pagination-load-more .fl-button').on('click', function () {
		let $this = $(this);

		//update the page status to be 'Loading'
		let ariaStatus = $('#site-wide-aria-status');
		let currentStatus = ariaStatus.text();
		let newStatus = 'Loading';
		if (currentStatus === 'Loading') {
			newStatus += ' ';
		}
		ariaStatus.text(newStatus);

		//the div containing the feed of items where loading more will happen
		let feedWrapper = $this.closest('.fl-module-post-grid').find('.fl-post-feed');
		//count the current number of feed items, before more are loaded
		let feedCount = feedWrapper.find('.fl-post-feed-post').length;
		try {
			let styleObserver = new MutationObserver(function (mutationRecords, thisObserver) {
				let lv = $('#infscr-loading'); //the "loading" view shown while more items are loaded
				if (!lv.length) {
					//if we get here, the BB load more implementation probably changed
					thisObserver.disconnect();
					return;
				}
				if (lv.css('display') === 'none') {
					//we also update the page status
					$('#site-wide-aria-status').text('Loading complete');

					//display is set to none after more items are loaded, so we assume it is time to set focus to the proper feed item
					let feedItems = feedWrapper.find('.fl-post-feed-post');
					if (feedItems.length > feedCount) { //make sure there is a "next" feed item
						setFocusToFeedItem($(feedItems[feedCount]));
					}

					thisObserver.disconnect(); //disconnect observer, we are all done, until the Load More is clicked again
				}
			});
			let styleObserverOptions = { attributes: true, attributeFilter: ['style'] }; //observe only the style attribute of the loading view, to detect when style.display is set to none
			let loadingView = $('#infscr-loading');
			if (loadingView.length) {
				//the loading view is already on the page (meaning the Load More button was already previously clicked), so watch for it to become display none
				styleObserver.observe(loadingView[0], styleObserverOptions);
			} else {
				//the loading view is not on the page yet, so wait for it to be added. it will be added to the feed wrapper along with feed items
				let childListObserver = new MutationObserver(function (mutationRecords, thisObserver) {
					//once the loading view is on the page, start watching its style attribute and disconnect this observer
					let lv = $('#infscr-loading');
					if (lv.length) {
						styleObserver.observe(lv[0], styleObserverOptions);
						thisObserver.disconnect();
					}
				});
				childListObserver.observe(feedWrapper[0], { childList: true });
			}
		} catch (e) {
			console.warn('Could not set focus after loading more', e);
		}
	});

	//for each in-page anchor link that BB adds smooth scrolling to, add a handler to set focus to the target element
	//this makes it work nicely for keyboard and screen reader users
	$('a').each(function () {
		var link = $(this),
			href = link.attr('href'),
			loc = window.location,
			id = null,
			element = null,
			flNode = false;

		//this mirrors how BB adds smooth scrolling to links
		if ('undefined' != typeof href && href.indexOf('#') > -1 && link.closest('svg').length < 1) {

			//this mirrors how BB adds smooth scrolling to links
			if (loc.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && loc.hostname == this.hostname) {

				//this mirrors how BB adds smooth scrolling to links
				try {

					//this mirrors how BB adds smooth scrolling to links
					id = href.split('#').pop();
					// If there is no ID then we have nowhere to look
					// Fixes a quirk in jQuery and FireFox
					if (!id) {
						return;
					}
					element = $('#' + id);

					//this mirrors how BB adds smooth scrolling to links
					if (element.length > 0) {
						//this mirrors how BB adds smooth scrolling to links
						flNode = element.hasClass('fl-row') || element.hasClass('fl-col') || element.hasClass('fl-module');
						if (!element.hasClass('fl-no-scroll') && (link.hasClass('fl-scroll-link') || flNode)) {
							//this is where BB adds a smooth scroll handler to links
							//first we set the target element up with a tabIndex
							//FIX!! don't add this tabindex to already focusable elements
							let focusableTags = ['a', 'button', 'textarea', 'input', 'select'];
							let targetElementTagName = element[0].tagName.toLowerCase();
							if (focusableTags.indexOf(targetElementTagName) < 0 || (targetElementTagName === 'a' && !element.attr('href'))) {
								element[0].tabIndex = -1;
							}
							$(link).on('click', function () {
								//focus the target on click, the smooth scroll will then scroll the user
								element.focus();
							});

						}
					}
				}
				catch (e) { }
			}
		}
	});

	//remove button role from links with href
	$('a[role=button]').each(function () {
		var link = $(this),
			href = link.attr('href');
		if ('undefined' != typeof href && href !== '#' && !!href && href.indexOf('javascript:') !== 0) {
			link.removeAttr('role');
		}
	});

	//this allows links and buttons to open flyouts without duplicating the ID
	$('[data-flyout-target]').each(function () {
		oxfam.semanticButtonize($(this)).click(function (e) {
			e.preventDefault();
			$('#flyout_button_' + $(this).data('flyout-target')).trigger('click');
			return false;
		});
	})

	//add aria-labels to share links that are created by plugins
	$('.uabb-social-share-wrap').attr('role', 'list').attr('aria-label', 'Share');
	$('.uabb-social-share-link-wrap').attr('role', 'listitem');
	$('a.uabb-social-share-link').each(function () {
		let link = $(this);
		let href = link.attr('href');
		let ariaLabel = '';
		if (href.indexOf('facebook.com/sharer') > 0) {
			ariaLabel = 'Share to Facebook';
		} else if (href.indexOf('twitter.com/share') > 0) {
			ariaLabel = 'Share to Twitter';
		}
		if (ariaLabel) {
			link.find('i').append($('<span>').addClass('sr-only').text(ariaLabel));
		}
	});

	//add an aria label to lists of links to article tags
	$('.blog_taxo ul').each(function () {
		let self = $(this);
		if (!self.attr('aria-label')) {
			self.attr('aria-label', 'Article tags');
		}
	});

	$('.fl-post-feed').each(function () {
		let self = $(this);
		if (!self.attr('role')) {
			self.attr('role', 'list');
		}
	});
	$('.fl-post-feed-post').each(function () {
		let self = $(this);
		if (!self.attr('role')) {
			self.attr('role', 'listitem');
		}
	});
	let bambooHRContainer = document.getElementById('BambooHR');
	if (bambooHRContainer) {
		let bambooHRObserver = new MutationObserver(function () {
			//bamboo HR elements are written dynamically to the page at some unknown point after and XHR request
			//so we simply watch the BambooHR div for new child elements and retrofit them for ability
			$('.BambooHR-ATS-Department-Header').each(function () {
				let self = $(this);
				self.attr('role', 'heading').attr('aria-level', '3');
				self.parent().find('ul.BambooHR-ATS-Jobs-List').attr('aria-labelledby', self.attr('id'));
			});
			$('ul.BambooHR-ATS-Department-List').attr('aria-label', 'Job departments');
		});
		bambooHRObserver.observe(bambooHRContainer, { childList: true, subtree: true });
	}

	/* START: make UABB modals accessible!! */
	//make the close "button" (which is actually a span) work properly for KB/SR users
	oxfam.semanticButtonize($(':not(a,button).uabb-modal-close'))
		.attr({ 'aria-label': 'close dialog' })
		.find('i,img')
		.attr('aria-hidden', 'true')
		.filter('img').attr('alt', '');

	//make the div that opens the popup into a real button
	oxfam.semanticButtonize($(':not(a,button).uabb-trigger')).each(function () {
		let self = $(this);
		if (self.find('img[alt=""]').length) {
			//image buttons that are missing ALT text need an aria label
			self.attr('aria-label', 'Open dialog');
		} else if (self.find('i')) {
			//icon buttons need SR friendly text
			self.find('i').append($('<span class="sr-only">Open dialog</span>'));
		}
	});

	//make the dialog container work properly for SR users
	$('.uabb-modal').attr({
		role: 'dialog',
		'aria-modal': 'true'
	}).each(function () {
		let self = $(this);
		let firstHeading = self.closest('.uabb-modal-parent-wrapper').find('h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6').first();
		if (firstHeading.length) {
			let id = firstHeading.attr('id');
			if (!id) {
				id = oxfam.uniqueId('uabb-modal-heading-');
				firstHeading.attr('id', id);
			}
			self.attr('aria-labelledby', id);
		} else {
			self.attr('aria-label', 'Model popup for YouTube video');
		}
	});

	//trap focus in the dialog when it is shown, return focus properly when it is hidden
	$bodyNoBuilderMode.find('.uabb-modal-parent-wrapper').each(function () {
		let self = $(this);
		let focusSetToDialog = false;
		let displayObserver = new MutationObserver(function (records, thisObserver) {
			if (self.find('.uabb-show').length && !focusSetToDialog) {
				self.data('returnFocusTo', document.activeElement);
				self.find('.uabb-modal-close').focus();
				focusSetToDialog = true;
				oxfam.trapFocus(self[0], ['.uabb-modal-close']); //trap focus in the parent wrapper
			} else if (focusSetToDialog) {
				let returnFocusTo = self.data('returnFocusTo');
				if (returnFocusTo && typeof returnFocusTo['focus'] === 'function') {
					returnFocusTo.focus();
				}
				focusSetToDialog = false;
			}
		});
		displayObserver.observe(self.find('.uabb-modal')[0], { attributes: true, attributeFilter: ['className', 'class'] });
	});
	/* END: make UABB modals accessible!! */

	//we want to move background videos to be after the content in the DOM, for better reading order
	//display is unaffected
	$bodyNoBuilderMode.find('.fl-bg-video').each(function () {
		let self = $(this);
		let rowContent = self.parent().find('.fl-row-content').first();
		if (rowContent.length) {
			self.insertAfter(rowContent);
		}
	})

	//make accordions fully accessible
	$('.uabb-adv-accordion').removeAttr('role'); //remove incorrect tablist role
	$('.uabb-adv-accordion-icon-wrap, .uabb-adv-accordion-button-label').removeAttr('tabindex'); //remove extra/redundant tab stops
	$('.uabb-adv-accordion-icon-wrap').attr('aria-hidden', 'true'); //hide the decorative plus/minus icons from SR
	$('.uabb-adv-accordion-button')
		.attr({ 'role': 'button', 'aria-expanded': 'false' }) //fix initial expanded state and use proper button role
		.removeAttr('aria-selected') //remove this, this is not a tab!
		.each(function () { //fix the aria-controls attribute to point to the correct element
			let button = $(this);
			let content = button.parent().find('.uabb-adv-accordion-content');
			if (content.length) {
				let contentId = content.attr('id');
				if (!contentId) {
					contentId = oxfam.uniqueId('uabb-adv-accordion-content-');
					content.attr('id', contentId);
				}
				button.attr('aria-controls', contentId);
			}
		});
	$('.uabb-adv-accordion-content').removeAttr('aria-expanded'); //remove incorrect usage of this attr

	//look for columns of three number counters and make them a semantic list
	$('.fl-module.fl-module-numbers').each(function () {
		let list = $(this).closest('.fl-col-group').first();
		if (list.find('.fl-module.fl-module-numbers').length > 1 && list.attr('role') !== 'list') {
			list.attr('role', 'list')
				.find('.fl-col').attr('role', 'listitem');
		}
	});

	//enable full screenreader access to BB maps widget (since they can get there via keyboard anyway)
	$('.fl-map iframe').attr('aria-hidden', false).each(function () {
		//add a default iframe title based on the query
		if (!this.title && this.src.indexOf('q=') > 0) {
			let place = this.src.substring(this.src.indexOf('q=') + 2);
			if (place.indexOf('&') >= 0) {
				place = place.substring(0, place.indexOf('&'));
			}
			this.title = 'Map of ' + decodeURIComponent(place.replace(/\+/g, ' '));
		}
	});

	$(".ginput_container input").each(function () {
		let describedBy = $(this).attr("aria-describedby");
		if (describedBy) {
			let ids = describedBy.split(" ");
			let validIds = [];
			ids.forEach(function (id) {
				if (document.getElementById(id)) {
					validIds.push(id);
				}
			})
			$(this).attr("aria-describedby", validIds.join(' '))
		}
	})

	//when a page is being editing, show a warning when blank alt text is added
	let imageAltTextFieldValue = null;
	$('body.fl-builder-edit').on('mousedown keydown', '.media-modal-content .media-toolbar-primary button.media-button', function () {
		//just as the user starts to click the save button, we capture the current ALT field value
		//major limitation, this will fail if the user is selecting multiple images
		let altTextField = $('#attachment-details-alt-text, #image-details-alt-text').first();
		if (altTextField.length) {
			imageAltTextFieldValue = altTextField.val();
		} else {
			imageAltTextFieldValue = null;
		}
	}).on('click', function (e) {
		if (e.target.tagName === 'BUTTON' && e.target.className.indexOf('media-button') > -1 && ['add to gallery', 'update gallery', 'select photo', 'insert into post', 'update'].indexOf(e.target.textContent.toLowerCase()) > -1) {
			if (imageAltTextFieldValue === '') {
				let id = oxfam.uniqueId('warning-');
				$('body').prepend($('<div id="' + id + '" style="background-color:rgba(0,0,0,0.7);z-index:1000000;position:fixed;top:0;left:0;right:0;bottom:0;"><div style="text-align:center;background-color:#fff;width:300px;margin:100px auto;padding:50px;">WARNING: It appears that you selected an image with blank ALT text. Unless the image is purely <a href="#" target="_blank">decorative <i class="fas fa-external-link-alt"></i></a> then you should edit and add proper <a href="#" target="_blank">ALT text<i class="fas fa-external-link-alt"></i></a>.<br/><br/><button onclick="$(\'#' + id + '\').remove();">Close this warning</button></div></div>'));
			}
			imageAltTextFieldValue = null;
		}
	})
	// remove duplicate IDs when multiple "Join Us" forms are placed on the same page
	// See: https://www.oxfam.ca/what-we-do/issues-we-work-on/gender-in-emergencies/
	// for an example
	// Also, please note the use of plain Javascript here; JQuery's $('selector') syntax will *assume there is only one element with a given ID*, which is the issue we're actually trying to fix.
	document.querySelectorAll('#joinusform').forEach(function (form_element, idx) {
		// as long as the element has an ID, append _{idx} to it.
		function add_element_idx_to_id(element) {
			if (element.id) {
				element.id = element.id + "_" + idx;
			}
		}
		// append the index to the id of the form element itself.
		add_element_idx_to_id(form_element);
		// do so for all descendants.
		form_element.querySelectorAll("*").forEach(add_element_idx_to_id);
	})
});


jQuery(document).ready(function ($) {

	function detectOS() {
		var OSName = "";
		if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
		else if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
		else if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
		else if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

		$("body").addClass("os_" + OSName)
	}
	detectOS()






	$(".top_bar_title").html("The future is equal").fadeIn();
	/*
	$("h2 .fl-heading-text span").each(function(){
		var span_txt = "<span class='spanbg_txt'>"+$(this).html()+"</span>";
		var span_bg = "<span class='spanbg green'></span>";
		$(this).html("<span class='spanbg_wrap'>"+span_txt+span_bg+"</span>");
	}) 
	*/



	// WINDOW RESIZE //
	$(window).on("resize", function () {



	});

	// WINDOW SCROLL //
	$(window).on("scroll", function () {



	});

});

jQuery(document).ready(function ($) {
	// let newsCarrousel = $('.carrousel-news');
	// newsCarrousel.each(function () {
	// 	var arrow = $(this).parent().find(".slider-header .slider-ctl");
	// 	var dot = $(this).parent().find(".slider-header .slider-dot");
	// 	$(this).slick({
	// 		dots: true,
	// 		infinite: true,
	// 		speed: 300,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		variableWidth: true,
	// 		adaptiveHeight: false,
	// 		appendArrows: arrow,
	// 		appendDots: dot,
	// 		prevArrow: '<button type="button" class="slick-prev-news"><img src="./assets/images/g_9360.svg" alt="arrow left"></button>',
	// 		nextArrow: '<button type="button" class="slick-next-news"><img src="./assets/images/g_9361.svg" alt="arrow right"></button>',
	// 		responsive: [
	// 			{
	// 				breakpoint: 769,
	// 				settings: {
	// 					slidesToShow: 1,
	// 					slidesToScroll: 1,
	// 					variableWidth: true,
	// 				}
	// 			}
	// 		]
	// 	});
	// });

	// setTimeout(function () {
	// 	$(".slick-dots").find("button").each(
	// 		function () {
	// 			$(this).text($(this).attr("aria-label"));
	// 		}
	// 	)
	// }, 100);

	// $('.home-page-sider').each(function () {

	// 	var arrow = $(this).parent().find(".slider-header").find(".slider-ctl");
	// 	var dot = $(this).parent().find(".slider-header").find(".slider-dot");
	// 	$(this).slick({
	// 		autoplay: true,
	// 		autoplaySpeed: 4000,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		fade: true,
	// 		asNavFor: '.home-page-tabs',
	// 		focusOnSelect: false,
	// 		arrows: true,
	// 		dots: true,
	// 		appendArrows: arrow,
	// 		appendDots: dot,
	// 		prevArrow: '<button type="button" class="slick-prev-two-column"><img src="./assets/images/g_9360.svg" alt="arrow left"></button>',
	// 		nextArrow: '<button type="button" class="slick-next-two-column"><img src="./assets/images/g_9361.svg" alt="arrow right"></button>'
	// 	});
	// });
	// $('.home-page-tabs').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.home-page-sider',
	// 	dots: false,
	// 	centerMode: true,
	// 	focusOnSelect: true
	// });



	// Close desired elements when ESC is pressed
	$(document).on(
		'keydown', function (event) {
			var KEYCODE_TAB = 9;
			var isTABPressed = (event.key === 'Tab' || event.keyCode === KEYCODE_TAB);
			if (isTABPressed) {
				$("*").removeClass("nofocus")
			}
		});

	$(".home-page-tab").on('click', function (event) {
		$(this).addClass("nofocus");
		$('.home-page-sider').slick('slickPause');
	});
	$(".slick-arrow").on('click', function (event) {
		$(this).addClass("nofocus");
		$('.home-page-sider').slick('slickPause');
	});

	$(".home-page-tabs-container").fadeIn()










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


});


(function ($) {

	/**
	 * Helper class for frontend theme logic.
	 *
	 * @since 1.0
	 * @class FLTheme
	 */
	FLTheme = {

		/**
		 * Initializes all frontend theme logic.
		 *
		 * @since 1.0
		 * @method init
		 */
		init: function () {
			this._bind();
		},

		/**
		 * Initializes and binds all frontend events.
		 *
		 * @since 1.0
		 * @access private
		 * @method _bind
		 */
		_bind: function () {
			var self = this;

			// Nav Toggles
			$('.navbar-toggle').on('click', this.navbarToggleClick);

			// Top Nav Drop Downs
			if ($('.fl-page-bar-nav ul.sub-menu').length != 0) {
				this._setupDropDowns();
				this._enableTopNavDropDowns();
			}

			// Page Nav Drop downs
			if ($('.fl-page-nav ul.sub-menu').length != 0) {
				$(window).on('resize.fl-page-nav-sub-menu', $.throttle(500, this._enablePageNavDropDowns));
				this._setupDropDowns();
				this._enablePageNavDropDowns();
			}

			// Current menu item initializes or click
			if ($('.fl-page-nav ul.menu').length != 0) {
				$('.fl-page-nav ul.menu').find('.menu-item').on('click', '> a[href*="#"]:not([href="#"])', this._setupCurrentNavItem);
				this._setupCurrentNavItem();
			}

			// Nav Search
			if ($('.fl-page-nav-search').length != 0) {
				$('.fl-page-nav-search a.fa-search').on('click', this._toggleNavSearch);
			}

			// Nav vertical
			if ($('.fl-nav-vertical').length != 0) {
				$(window).on('resize', $.throttle(500, this._navVertical));
				this._navVertical();
			}

			// Nav vertical right & boxed layout
			if ($('.fl-fixed-width.fl-nav-vertical-right').length != 0) {
				$(window).on('resize', $.throttle(500, this._updateVerticalRightPos));
				this._updateVerticalRightPos();
			}

			// Centered inline logo
			if ($('.fl-page-nav-centered-inline-logo').length != 0) {
				$(window).on('resize', $.throttle(500, this._centeredInlineLogo));
				this._centeredInlineLogo();
			}

			// Nav Left
			if ($('body.fl-nav-left').length != 0) {
				$(window).on('resize', $.throttle(500, this._navLeft));
				this._navLeft();
			}

			// Shrink Header
			if (($('body.fl-shrink').length != 0) && !($('html.fl-builder-edit').length != 0)) {
				$(window).on('resize', $.throttle(500, this._shrinkHeaderEnable));
				this._shrinkHeaderInit();
				this._shrinkHeaderEnable();
			}

			// Fixed Header (Fade In)
			if ($('.fl-page-header-fixed').length != 0) {
				$(window).on('resize.fl-page-header-fixed', $.throttle(500, this._enableFixedHeader));
				this._enableFixedHeader();
			}

			// Fixed Header (Fixed)
			if (($('body.fl-fixed-header').length != 0) && !($('html.fl-builder-edit').length != 0)) {
				$(window).on('resize', $.throttle(500, this._fixedHeader));
				this._fixedHeader();
			}

			// Hide Header Until Scroll
			if (($('body.fl-scroll-header').length != 0) && !($('html.fl-builder-edit').length != 0)) {
				$(window).on('resize', $.throttle(500, this._scrollHeader));
				this._scrollHeader();
			}

			// Mega Menu (Primary Nav)
			if ($('.fl-page-header-primary').find('li.mega-menu').length != 0) {
				$(window).on('resize', $.throttle(500, this._megaMenu));
				this._megaMenu();
			}

			// Mega Menu (Fixed)
			if ($('.fl-page-header-fixed').length != 0) {
				$(window).on('scroll.fl-mega-menu-on-scroll', $.throttle(500, this._megaMenuOnScroll));
				$(window).on('resize.fl-mega-menu-on-scroll', $.throttle(500, this._megaMenuOnScroll));
			}

			// Headers not be fixed when the builder is active
			if ($('html.fl-builder-edit').length != 0) {
				this._fixedHeadersWhenBuilderActive();
			}

			// Responsive Nav Layout
			if ($('body.fl-nav-mobile-offcanvas').length != 0 && !$('html.fl-builder-edit').length != 0) {
				$(window).on('resize', $.throttle(500, this._setupMobileNavLayout));
				this._setupMobileNavLayout();
				this._toggleMobileNavLayout();
			}

			// Close Dropdown or Flyout Menu
			$('body').on('click', this.closeMenu);

			// Close Dropdown or Flyout Menu when tabbing out from the last menu item.
			$('.fl-theme-menu > li:last-child').on('focusout', function (e) {
				if (undefined === $(e.relatedTarget)[0] || 'nav-link' !== $(e.relatedTarget)[0].className) {
					self.closeMenu(e);
				}
			});

			// Footer parallax effect
			if ($('.fl-full-width.fl-footer-effect').length != 0) {
				$(window).on('resize', $.throttle(500, this._footerEffect));
				this._footerEffect();
			}

			// Go to Top
			if ($('body.fl-scroll-to-top').length != 0) {
				this._toTop();
			}

			// Lightbox
			if (typeof $('body').magnificPopup != 'undefined') {
				this._enableLightbox();
			}

			// FitVids
			if (typeof $.fn.fitVids != 'undefined' && !$('body').hasClass('fl-builder')) {
				this._enableFitVids();
			}
			FLTheme._navBackiosFix();

			// Smooth scrolling.
			this._initSmoothScroll()
		},

		/**
		 * Checks to see if the current device is mobile.
		 *
		 * @since 1.5.1
		 * @access private
		 * @method _isMobile
		 * @return {Boolean}
		 */
		_isMobile: function () {
			if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
				return true;
			}

			return /Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(navigator.userAgent);
		},

		/**
		 * Initializes retina images.
		 *
		 * @since 1.0
		 * @access private
		 * @method _initRetinaImages
		 */
		_initRetinaImages: function () {
			var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;

			if (pixelRatio > 1) {
				$('img[data-retina]').each(FLTheme._convertImageToRetina);
			}
		},

		/**
		 * Converts an image to retina.
		 *
		 * @since 1.0
		 * @access private
		 * @method _convertImageToRetina
		 */
		_convertImageToRetina: function () {
			var image = $(this),
				tmpImage = new Image(),
				src = image.attr('src'),
				retinaSrc = image.data('retina')

			// check for cloudflare
			if (typeof src == 'undefined') {
				src = image.data('cfsrc')
			}

			// still no src, bail.
			if (typeof src == 'undefined') {
				return false;
			}

			var type = src.split('.').pop();

			if ('' != retinaSrc) {

				tmpImage.onload = function () {
					var width = tmpImage.width,
						height = tmpImage.height;

					if ('svg' == type) {
						width = image.width();
						height = image.height();
					}

					//image.css( 'max-height', height );
					image.width(width);
					image.attr('src', retinaSrc);
				};

				tmpImage.src = src;
			}
		},

		/**
		 * Mobile Header Logo.
		 *
		 * @since 1.7
		 * @access private
		 * @method _initMobileHeaderLogo
		 */
		_initMobileHeaderLogo: function () {
			this._enableMobileLogo();
			$(window).on('resize', $.proxy(this._enableMobileLogo, this));
		},

		/**
		 * Enable Mobile Logo.
		 *
		 * @since 1.7
		 * @access private
		 * @method _enableMobileLogo
		 */
		_enableMobileLogo: function () {
			var win = $(window),
				logoWrap = $('.fl-page-header-logo'),
				logos = logoWrap.find('img[data-mobile]'),
				image = null,
				mobileSrc = null,
				tmpImage = null;

			if (0 === logos.length) {
				return;
			}

			$(logos).each(function () {
				tmpImage = new Image();
				image = $(this);
				src = image.attr('src');
				mobileSrc = image.data('mobile');

				image.attr('src', '');
				image.attr('data-src', src);

				if (win.width() < window.themeopts.mobile_breakpoint) {

					if ('' != mobileSrc) {
						tmpImage.onload = function () {
							image.attr('src', mobileSrc);
						};
						tmpImage.src = src;
						image.show();
					}
				}
				else {
					if ('undefined' !== typeof image.data('src')) {
						image.attr('src', image.data('src'));
						image.css('width', '');
					}
				}
			});
		},

		/**
		 * Toggles a collapsed navbar when the toggle button is
		 * clicked and the current framework is the bootstrap base.
		 *
		 * @since 1.7
		 * @param {Object} e
		 */
		navbarToggleClick: function (e) {
			var menuType = $('body').hasClass('fl-nav-mobile-offcanvas') ? 'flyout' : 'dropdown';

			if ('dropdown' === menuType) {
				var navBar = $(e.target).closest('.fl-page-nav'),
					targetPanel = navBar.find('.fl-page-nav-collapse');

				targetPanel.toggleClass('collapse');
				targetPanel.toggleClass('in');

			} else if ('flyout' === menuType) {

				$('.fl-page').toggleClass('fl-nav-offcanvas-active');

			}

			e.stopPropagation();
		},

		/**
		 * Closes Dropdown or Flyout Menu when clicked anywhere on the page.
		 *
		 * @since 1.7.9
		 * @param {Object} e
		 */
		closeMenu: function (e) {
			var menuType = $('body').hasClass('fl-nav-mobile-offcanvas') ? 'flyout' : 'dropdown',
				isDropdownMenuActive = $('.fl-page-nav-collapse').hasClass('in'),
				isFlyoutMenuActive = $('.fl-page').hasClass('fl-nav-offcanvas-active'),
				pageNav;

			if (undefined === e || undefined === e.target) {
				return;
			}

			if ('dropdown' === menuType && isDropdownMenuActive) {
				pageNav = $('.navbar-collapse.in').closest('.fl-page-nav');
				pageNav.find('.navbar-toggle').trigger('click');
			} else if ('flyout' === menuType && isFlyoutMenuActive) {
				$('.fl-offcanvas-close').trigger('click');
			}
		},

		/**
		 * Initializes drop down nav logic.
		 *
		 * @since 1.0
		 * @access private
		 * @method _setupDropDowns
		 */
		_setupDropDowns: function () {
			$('ul.sub-menu').each(function () {
				$(this).closest('li').attr('aria-haspopup', 'true');
			});
		},

		/**
		 * Initializes drop down menu logic for top bar navs.
		 *
		 * @since 1.0
		 * @access private
		 * @method _enableTopNavDropDowns
		 */
		_enableTopNavDropDowns: function () {
			var nav = $('.fl-page-bar-nav'),
				navItems = nav.find(' > li'),
				subToggles = nav.find('> li').has('> ul.sub-menu').find('.fl-submenu-toggle-icon');

			if (FLTheme._isMobile()) {
				if (false !== /iPhone|iPad/i.test(navigator.userAgent)) {
					navItems.hover(FLTheme._navItemMouseover, FLTheme._navItemMouseout);
				}
				else {
					navItems.hover(function () { }, FLTheme._navItemMouseout);
					subToggles.on('click', FLTheme._navSubMenuToggleClick);
				}
			}
			else {
				navItems.hover(FLTheme._navItemMouseover, FLTheme._navItemMouseout);
			}
		},

		/**
		 * Fixes an ios quirk, if we have a dropdown menu and a user clicks 'back'
		 * the menu will stay open, ios does not reparse js when you click back.
		 * This method detects that back has been clicked by looking for event.persisted
		 *
		 * @since 1.6.2
		 * @method _navBackiosFix
		 */
		_navBackiosFix: function () {
			ipad = (navigator.userAgent.match('iPhone|iPad') !== null && $('.menu-item-has-children').length > 0) ? true : false;
			if (false !== ipad) {
				window.onpageshow = function (event) {
					if (event.persisted) {
						window.location.reload()
					}
				}
			}
		},

		/**
		 * Initializes builder smooth scrolling.
		 *
		 * @since 1.7.6
		 * @return void
		 */
		_initSmoothScroll: function () {
			// Bail if builder doesn't exist.
			if ('undefined' === typeof FLBuilderLayout) {
				return;
			}

			// if scroll is disabled globally via filter do not scroll.
			if ('undefined' !== typeof window.themeopts.smooth && 'disabled' === window.themeopts.smooth) {
				return;
			}
			var targetId = location.hash;
			targetId = targetId.replace(/(:|\!|\.|\[|\]|,|=|@|\/)/g, "\\$1");
			if (targetId && $(targetId).length) {
				setTimeout(function () {
					window.scrollTo(0, 0);
					FLBuilderLayout._scrollToElement($(targetId));
				}, 1);
			}
		},

		/**
		 * Initializes drop down menu logic for the main nav for primary and fixed header.
		 *
		 * @since 1.0
		 * @access private
		 * @method _enablePageNavDropDowns
		 */
		_enablePageNavDropDowns: function () {
			var pageNav = $('.fl-page-header');

			pageNav.each(FLTheme._enablePageNavDropDown);
		},

		/**
		 * Callback logic for each main header nav dropdown
		 *
		 * @since 1.6
		 * @access private
		 * @method _enablePageNavDropDown
		 */
		_enablePageNavDropDown: function () {
			var pageNav = $(this),
				nav = pageNav.find('.fl-page-nav .fl-page-nav-collapse'),
				navItems = nav.find('ul li'),
				subToggles = nav.find('li').has('> ul.sub-menu').find('> a'),
				toggleIcon = nav.find('li').has('> ul.sub-menu').find('.fl-submenu-toggle-icon'),
				subMenus = nav.find('> ul > li').has('ul.sub-menu');

			if ($('.fl-page-nav .navbar-toggle').is(':visible')) {
				navItems.off('mouseenter mouseleave');

				// Toggle submenu
				if ($('body').hasClass('fl-submenu-toggle')) {
					subMenus = nav.find('> ul li').has('ul.sub-menu');
				}
				subMenus.find('> a').off().on('click', FLTheme._navItemClickMobile);
				subMenus.find('.fl-submenu-toggle-icon').off().on('click', FLTheme._navItemClickMobile);

				nav.find('.menu').on('click', '.menu-item > a[href*="#"]', FLTheme._toggleForMobile);
				subToggles.off('click', FLTheme._navSubMenuToggleClick);
			}
			else {
				nav.find('a').off('click', FLTheme._navItemClickMobile);
				nav.find('a').off('click', FLTheme._toggleForMobile);
				nav.find('.fl-submenu-toggle-icon').off('click', FLTheme._navItemClickMobile);
				nav.removeClass('in').addClass('collapse');
				navItems.removeClass('fl-mobile-sub-menu-open');
				navItems.find('a').width(0).width('auto');

				if (FLTheme._isMobile()) {
					navItems.hover(function () { }, FLTheme._navItemMouseout);
					subToggles.on('click', FLTheme._navSubMenuToggleClick);
				}
				else {
					navItems.keydown(function (e) {
						if (9 === e.keyCode) {
							el = $(this)
							focused = el.find(':focus')
							if (focused.parent().is(':last-child')) {
								sub = focused.parent().find('ul.sub-menu').first()
								mega = focused.parent().parent().parent().parent().parent().hasClass('mega-menu')
								mega_last = focused.parent().parent().parent().is(':last-child')

								if (sub.length > 0) {
									sub.trigger('mouseenter')
								} else {
									if (!mega || mega_last) {
										el.trigger('mouseleave')
									}
								}
							}
							parent = focused.closest('ul.sub-menu').parent()
							if (!parent.hasClass('fl-sub-menu-open')) {
								focused.trigger('mouseenter')
							}
						}
					});
					navItems.hover(FLTheme._navItemMouseover, FLTheme._navItemMouseout);
				}
			}
		},

		/**
		 * Callback for when an item in a nav is clicked on mobile.
		 *
		 * @since 1.0
		 * @access private
		 * @method _navItemClickMobile
		 * @param {Object} e The event object.
		 */
		_navItemClickMobile: function (e) {
			var nav = $(this).closest('.fl-page-nav-collapse'),
				parent = $(this).closest('li'),
				href = $(this).attr('href'),
				subMenu = parent.find('ul.sub-menu'),
				toggle = $(e.target).hasClass('fl-submenu-toggle-icon'),
				subChildren = null;

			if (href && '#' !== href) {
				var targetId = href.split('#')[1];
				if ($('body').find('#' + targetId).length > 0 && parent.hasClass('fl-mobile-sub-menu-open')) {
					el = $(this).parent().closest('nav').find('.navbar-toggle')
					el.trigger('click');
					if ('undefined' !== typeof FLBuilderLayout && ('undefined' === typeof window.themeopts.smooth && 'disabled' !== window.themeopts.smooth)) {
						setTimeout(function () {
							window.scrollTo(0, 0);
							FLBuilderLayout._scrollToElement($('#' + targetId));
						}, 1);
					}
				}
			}

			if (('#' == href || toggle) && parent.hasClass('fl-mobile-sub-menu-open')) {
				e.preventDefault();
				parent.removeClass('fl-mobile-sub-menu-open');
				subMenu.hide();
			}
			else if (!parent.hasClass('fl-mobile-sub-menu-open')) {

				e.preventDefault();
				parent.addClass('fl-mobile-sub-menu-open');

				if (toggle && 0 === $('.fl-submenu-toggle').length) {
					subChildren = subMenu.find('li.menu-item-has-children');
					subChildren.addClass('fl-mobile-sub-menu-open');
				}

				subMenu.fadeIn(200);
			}

			if ($('.fl-nav-collapse-menu').length != 0) {
				nav.find('li.fl-mobile-sub-menu-open')
					.not($(this).parents('.fl-mobile-sub-menu-open'))
					.not(subChildren)
					.removeClass('fl-mobile-sub-menu-open')
					.find('ul.sub-menu').hide();
			}

			e.stopPropagation();
		},

		/**
		 * Setup and callback for nav item link that exists on a page.
		 *
		 * @since 1.5.3
		 * @access private
		 * @method _setupCurrentNavItem
		 * @param {Object|Null} e The event object.
		 */
		_setupCurrentNavItem: function (e) {
			var nav = $('.fl-page-nav .navbar-nav'),
				targetId = typeof e !== 'undefined' ? $(e.target).prop('hash') : window.location.hash,
				targetId = targetId.replace(/(:|\!|\.|\[|\]|,|=|@|\/)/g, "\\$1"),
				currentLink = targetId.length ? nav.find('a[href*=\\' + targetId + ']:not([href=\\#])') : null,
				closeButton = nav.closest('.fl-page-nav').find('.fl-offcanvas-close');

			if (currentLink != null && $('body').find(targetId).length > 0) {
				$('.current-menu-item').removeClass('current-menu-item');
				currentLink.parent().addClass('current-menu-item');

				if (closeButton) {
					closeButton.trigger('click');
				}
			}
		},


		/**
		 * Callback for when the mouse leaves an item
		 * in a nav at desktop sizes.
		 *
		 * @since 1.0
		 * @access private
		 * @method _navItemMouseover
		 */
		_navItemMouseover: function () {
			if ($(this).find('ul.sub-menu').length === 0) {
				return;
			}

			var li = $(this),
				parent = li.parent(),
				subMenu = li.find('ul.sub-menu'),
				subMenuWidth = subMenu.width(),
				subMenuPos = 0,
				winWidth = $(window).width(),
				spacerPos = 0,
				subMenuTopPos = 0;

			if (li.closest('.fl-sub-menu-right').length !== 0) {
				li.addClass('fl-sub-menu-right');
			}
			else if ($('body').hasClass('rtl')) {

				subMenuPos = parent.is('ul.sub-menu') ?
					parent.offset().left - subMenuWidth :
					li.offset().left - subMenuWidth;

				if (subMenuPos <= 0) {
					li.addClass('fl-sub-menu-right');
				}
			}
			else {

				subMenuPos = parent.is('ul.sub-menu') ?
					parent.offset().left + (subMenuWidth * 2) :
					li.offset().left + subMenuWidth;

				if (subMenuPos > winWidth) {
					li.addClass('fl-sub-menu-right');
				}
			}

			li.addClass('fl-sub-menu-open');

			if (!li.hasClass('hide-heading')) {
				subMenu.hide();
				subMenu.stop().fadeIn(200);
			}

			FLTheme._hideNavSearch();

			// Mega menu hover fix
			if (li.closest('.fl-page-nav-collapse').length !== 0 && li.hasClass('mega-menu')) {

				if (li.find('.mega-menu-spacer').length > 0) {
					return;
				}

				subMenu.first().before('<div class="mega-menu-spacer"></div>');
				spacerPos = li.find('.mega-menu-spacer').offset().top;
				subMenuTopPos = subMenu.first().offset().top;
				li.find('.mega-menu-spacer').css('padding-top', Math.floor(parseInt(subMenuTopPos - spacerPos)) + 'px');
			}
		},

		/**
		 * Callback for when the mouse leaves an item
		 * in a nav at desktop sizes.
		 *
		 * @since 1.0
		 * @access private
		 * @method _navItemMouseout
		 */
		_navItemMouseout: function () {
			var li = $(this),
				subMenu = li.find('ul.sub-menu');


			if (!li.hasClass('hide-heading')) {
				subMenu.stop().fadeOut({
					duration: 200,
					done: FLTheme._navItemMouseoutComplete
				});
			}
			else {
				FLTheme._navItemMouseoutComplete();
			}
		},

		/**
		 * Callback for when the mouse finishes leaving an item
		 * in a nav at desktop sizes.
		 *
		 * @since 1.0
		 * @access private
		 * @method _navItemMouseoutComplete
		 */
		_navItemMouseoutComplete: function () {
			var li = $(this).parent();

			li.removeClass('fl-sub-menu-open');
			li.removeClass('fl-sub-menu-right');

			if (li.find('.mega-menu-spacer').length > 0) {
				li.find('.mega-menu-spacer').remove();
			}

			$(this).show();
		},

		/**
		 * Callback for when a submenu toggle is clicked on mobile.
		 *
		 * @since 1.5.1
		 * @access private
		 * @method _navSubToggleClick
		 * @param {Object} e The event object.
		 */
		_navSubMenuToggleClick: function (e) {
			var li = $(this).closest('li').eq(0);

			if (!li.hasClass('fl-sub-menu-open')) {
				FLTheme._navItemMouseover.apply(li[0]);

				e.preventDefault();
			}
		},

		/**
		 * Logic for the menu item  when clicked on mobile.
		 *
		 * @since  1.5.3
		 * @return void
		 */
		_toggleForMobile: function (e) {
			var nav = $('.fl-page-nav .fl-page-nav-collapse'),
				href = $(this).attr('href'),
				hasSubmenu = $(this).closest('li').hasClass('menu-item-has-children');

			if (href !== '#') {
				var targetId = href.split('#')[1];

				if ($('body').find('#' + targetId).length > 0 && !hasSubmenu) {
					/**
					 * Make sure bootstrap collapse is available before using it.
					 */
					if (!$.isFunction(nav.collapse)) {
						el = $(this).parent().closest('nav').find('.navbar-toggle')
						el.trigger('click')
					} else {
						nav.collapse('hide');
					}
				}
			}
		},

		/**
		 * Shows or hides the nav search form.
		 *
		 * @since 1.0
		 * @access private
		 * @method _toggleNavSearch
		 */
		_toggleNavSearch: function (e) {
			var form = $('.fl-page-nav-search form');

			e.preventDefault();

			if (form.is(':visible')) {
				form.stop().fadeOut(200);
			}
			else {
				form.stop().fadeIn(200);
				$('body').on('click.fl-page-nav-search', FLTheme._hideNavSearch);
				$('.fl-page-nav-search .fl-search-input').focus();
			}
		},

		/**
		 * Hides the nav search form.
		 *
		 * @since 1.0
		 * @access private
		 * @method _hideNavSearch
		 * @param {Object} e (Optional) An event object.
		 */
		_hideNavSearch: function (e) {
			var form = $('.fl-page-nav-search form');

			if (e !== undefined) {
				if ($(e.target).closest('.fl-page-nav-search').length > 0) {
					return;
				}
			}

			form.stop().fadeOut(200);

			$('body').off('click.fl-page-nav-search');
		},

		/**
		 * Nav Vertical
		 *
		 * @since 1.5
		 * @access private
		 * @method _navVertical
		 */
		_navVertical: function () {
			var win = $(window);


			if (win.width() >= window.themeopts.medium_breakpoint && $('.fl-page-header-primary').hasClass('fl-page-nav-toggle-visible-always')) {
				$('body').toggleClass('fl-nav-vertical');

				if ($('body').hasClass('fl-nav-vertical-left')) {
					$('body').toggleClass('fl-nav-vertical-left');
				}

				if ($('body').hasClass('fl-nav-vertical-right')) {
					$('body').toggleClass('fl-nav-vertical-right');
				}
			}
		},

		/**
		 * Right position fix for right navigation on boxed layout
		 *
		 * @since 1.5
		 * @access private
		 * @method _updateVerticalRightPos
		 */
		_updateVerticalRightPos: function () {
			var win = $(window).width(),
				flpage = $('.fl-page').width(),
				vericalRightPos = ((win - flpage) / 2);

			$('.fl-page-header-vertical').css('right', vericalRightPos);
		},

		/**
		 * Nav Left
		 *
		 * @since 1.5
		 * @access private
		 * @method _navLeft
		 */
		_navLeft: function () {
			var win = $(window);

			if (win.width() < window.themeopts.medium_breakpoint || $('.fl-page-header-primary').hasClass('fl-page-nav-toggle-visible-always')) {
				$('.fl-page-header-primary .fl-page-logo-wrap').insertBefore('.fl-page-header-primary .fl-page-nav-col');
			}
			if (win.width() >= window.themeopts.medium_breakpoint && !$('.fl-page-header-primary').hasClass('fl-page-nav-toggle-visible-always')) {
				$('.fl-page-header-primary .fl-page-nav-col').insertBefore('.fl-page-header-primary .fl-page-logo-wrap');
			}

			if ($('.fl-page-header-fixed').length != 0 && !$('.fl-page-header-fixed').hasClass('fl-page-nav-toggle-visible-always')) {
				$('.fl-page-header-fixed .fl-page-fixed-nav-wrap').insertBefore('.fl-page-header-fixed .fl-page-logo-wrap');
			}
		},

		/**
		 * Initialize header shrinking.
		 *
		 * @since 1.5.2
		 * @access private
		 * @method _shrinkHeaderInit
		 */
		_shrinkHeaderInit: function () {
			var distanceY = $(window).scrollTop(),
				shrinkOn = 250,
				header = $('.fl-page-header');

			$('body').addClass('fl-shrink-header-enabled');

			if ('scrollRestoration' in history) {
				history.scrollRestoration = 'manual';
			}

			$('.fl-page-header-logo').imagesLoaded(function () {
				var logo = $('.fl-logo-img'),
					logoHeight = logo.height();

				// Check to see if original height is set on scroll while the page is reloading.
				if ('undefined' !== typeof logo.data('origHeight')) {
					logoHeight = parseInt(logo.data('origHeight'));
				}

				logo.css('max-height', logoHeight);

				setTimeout(function () {
					$('.fl-page-header').addClass('fl-shrink-header-transition');

					// Shrink on page load
					if (distanceY > shrinkOn) {
						header.addClass('fl-shrink-header');
					}
					else {
						header.removeClass('fl-shrink-header');
					}
				}, 100);
			});
		},

		/**
		 * Enable or disable header shrinking.
		 *
		 * @since 1.5
		 * @access private
		 * @method _shrinkHeaderEnable
		 */
		_shrinkHeaderEnable: function () {
			var win = $(window);

			if (win.width() >= window.themeopts.medium_breakpoint) {

				var header = $('.fl-page-header'),
					headerHeight = header.outerHeight(),
					topbar = $('.fl-page-bar'),
					topbarHeight = 0,
					totalHeaderHeight = 0;

				if (topbar.length != 0) {
					topbarHeight += topbar.outerHeight();
					totalHeaderHeight = topbarHeight + headerHeight;

					if ($('body.admin-bar').length != 0) {
						topbarHeight += 32;
					}
					header.css('top', topbarHeight);
				}
				else {
					totalHeaderHeight = headerHeight;
				}

				// Fix: Themer parts layout inserted before header.
				if (header.prevAll('.fl-builder-content').length > 0) {
					FLTheme._initThemerLayoutFix();

					totalHeaderHeight = topbar.outerHeight();
				}

				if ($('.fl-header-padding-top-custom').length === 0) {
					$('.fl-page').css('padding-top', totalHeaderHeight);
				}

				$(win).on('scroll.fl-shrink-header', FLTheme._shrinkHeader);
			}
			else {
				$('.fl-page-header').css('top', 0);
				$('.fl-page').css('padding-top', 0);
				$(win).off('scroll.fl-shrink-header');
			}
		},

		/**
		 * Shrink the header.
		 *
		 * @since 1.5.1
		 * @access private
		 * @method _shrinkHeader
		 */
		_shrinkHeader: function () {
			var distanceY = $(this).scrollTop(),
				shrinkOn = 250,
				header = $('.fl-page-header'),
				logo = null;

			$('.fl-page-header-logo').imagesLoaded(function () {
				logo = $('.fl-logo-img');

				if ('undefined' === typeof logo.data('origHeight')) {
					logo.data('origHeight', logo.height());
				}

				if (distanceY > shrinkOn) {
					header.addClass('fl-shrink-header');
				}
				else {
					header.removeClass('fl-shrink-header');
				}

				if ('undefined' !== typeof header.data('original-top')) {
					FLTheme._fixThemerLayoutOnScroll();
				}
			});
		},

		/**
		 * Fixed Header (Fixed)
		 *
		 * @since 1.5
		 * @access private
		 * @method _fixedHeader
		 */
		_fixedHeader: function () {
			var win = $(window),
				header = $('.fl-page-header'),
				headerHeight = 0,
				totalHeaderHeight = 0,
				bar = $('.fl-page-bar'),
				barHeight = 0;

			if (win.width() >= window.themeopts.medium_breakpoint) {

				headerHeight = header.outerHeight();

				if (bar.length != 0) {

					barHeight = bar.outerHeight();
					totalHeaderHeight = barHeight + headerHeight;

					if ($('body.admin-bar').length != 0) {
						barHeight += 32;
					}

					if ($('html.fl-builder-edit').length != 0) {
						var topbarHeight = topbarHeight + 11;
					}

					header.css('top', barHeight);
				}
				else {
					totalHeaderHeight = headerHeight;
				}

				// Fix: Themer parts layout.
				if (header.prevAll('.fl-builder-content').length > 0) {
					FLTheme._initThemerLayoutFix();
					totalHeaderHeight = bar.outerHeight();

					$(win).on('scroll.fl-fixed-header', FLTheme._fixThemerLayoutOnScroll);
				}

				if ($('body.fl-scroll-header').length === 0 && $('.fl-header-padding-top-custom').length === 0) {
					$('.fl-page').css('padding-top', totalHeaderHeight);
				}

				$(win).trigger('scroll');
			}
			else {
				$('.fl-page-header').css('top', 0);
				$('.fl-page').css('padding-top', 0);
				$(win).off('scroll.fl-fixed-header');
			}
		},

		/**
		 * Fixed Header (Fade In)
		 *
		 * Enables the fixed header if the window is wide enough.
		 *
		 * @since 1.0
		 * @access private
		 * @method _enableFixedHeader
		 */
		_enableFixedHeader: function () {
			var win = $(window);

			if (win.width() < window.themeopts.medium_breakpoint) {
				win.off('scroll.fl-page-header-fixed');
				$('.fl-page-header-fixed').hide();
			}
			else {
				win.on('scroll.fl-page-header-fixed', FLTheme._toggleFixedHeader);
			}
		},

		/**
		 * Fix the Themer parts layout that are hooks into `fl_page_open`.
		 *
		 * @since 1.7
		 * @access private
		 * @method _fixThemerLayout
		 */
		_initThemerLayoutFix: function () {
			var header = $('.fl-page-header'),
				themerLayouts = header.prevAll('.fl-builder-content'),
				themerlayoutHeight = 0;

			if (!themerLayouts.length) {
				return;
			}

			header.css('position', 'initial');

			$.each(themerLayouts, function () {
				themerlayoutHeight += $(this).outerHeight();
			});

			header.data('original-top', themerlayoutHeight);
		},

		/**
		 * Fix the Themer parts layout on scroll.
		 *
		 * @since 1.7
		 * @access private
		 * @method _fixThemerLayout
		 */
		_fixThemerLayoutOnScroll: function () {
			var distanceY = $(window).scrollTop(),
				header = $('.fl-page-header'),
				headerTop = header.data('original-top');

			if ('undefined' === typeof headerTop) {
				return;
			}

			if (distanceY >= headerTop) {
				header.css('position', 'fixed');
			}
			else {
				header.css('position', 'initial');
			}

			// Fix animations.
			if ('undefined' != typeof Waypoint) {
				Waypoint.refreshAll();
			}
		},

		/**
		 * Shows or hides the fixed header based on the
		 * window's scroll position.
		 *
		 * @since 1.0
		 * @access private
		 * @method _toggleFixedHeader
		 */
		_toggleFixedHeader: function () {
			var win = $(window),
				fixed = $('.fl-page-header-fixed'),
				fixedVisible = fixed.is(':visible'),
				header = $('.fl-page-header-primary'),
				headerHidden = false;

			if (0 === header.length) {
				headerHidden = win.scrollTop() > 200;
			}
			else {
				headerHidden = win.scrollTop() > header.height() + header.offset().top;
			}

			if (headerHidden && !fixedVisible) {
				fixed.stop().fadeIn(200);
			}
			else if (!headerHidden && fixedVisible) {
				fixed.stop().hide();
			}
		},

		/**
		 * Adds logo as nav item for "centered inline logo" header layout.
		 *
		 * @since 1.5
		 * @access private
		 * @method _centeredInlineLogo
		 */
		_centeredInlineLogo: function () {
			var win = $(window),
				$logo = $('.fl-page-nav-centered-inline-logo .fl-page-header-logo'),
				$inline_logo = $('.fl-logo-centered-inline > .fl-page-header-logo'),
				$nav = $('.fl-page-nav-centered-inline-logo .fl-page-nav .navbar-nav'),
				nav_li_length = $nav.children('li').length,
				logo_li_location = Math.round(nav_li_length / 2) - 1;

			if (win.width() >= window.themeopts.medium_breakpoint && $inline_logo.length < 1 && !$('.fl-page-header-primary').hasClass('fl-page-nav-toggle-visible-always')) {

				if ($logo.hasClass('fl-inline-logo-left') && nav_li_length % 2 != 0) {
					$nav.children('li:nth( ' + logo_li_location + ' )').before('<li class="fl-logo-centered-inline"></li>');
				} else {
					$nav.children('li:nth( ' + logo_li_location + ' )').after('<li class="fl-logo-centered-inline"></li>');
				}

				$nav.children('.fl-logo-centered-inline').append($logo);
			}

			if (win.width() < window.themeopts.medium_breakpoint) {
				$('.fl-page-nav-centered-inline-logo .fl-page-header-row').prepend($inline_logo);
				$('.fl-logo-centered-inline').remove();
			}
		},

		/**
		 * Hide Header Until Scroll
		 *
		 * @since 1.5
		 * @access private
		 * @method _scrollHeader
		 */
		_scrollHeader: function () {
			var win = $(window),
				header = null,
				distance = $('.fl-page-header-primary').data('fl-distance'),
				headerHeight = 0;

			if ($('.fl-page-bar').length != 0) {
				header = $('.fl-page-header-primary, .fl-page-bar');
			}
			else {
				header = $('.fl-page-header-primary');
			}

			if (win.width() >= window.themeopts.medium_breakpoint) {
				win.on('scroll.fl-show-header-on-scroll', function () {
					if ($(this).scrollTop() > distance) {
						header.addClass('fl-show');
					}
					else {
						header.removeClass('fl-show');

						// Offcanvas nav layout fix.
						if ($('.fl-responsive-nav-enabled').length) {
							headerHeight = $('.fl-page-header-primary').height() * 2;

							if ($('.fl-page-bar').length != 0) {
								headerHeight += $('.fl-page-bar').height();
							}

							if ('undefined' !== typeof $('.fl-nav-offcanvas-collapse').css('top')) {
								headerHeight += parseInt($('.fl-nav-offcanvas-collapse').css('top'));
							}
						}

						if ($('.fl-nav-offcanvas-active').length && headerHeight > 0) {
							$('.fl-nav-offcanvas-collapse').css({
								'transform': 'translateY(' + headerHeight + 'px)',
								'-ms-transform': 'translateY(' + headerHeight + 'px)',
								'-webkit-transform': 'translateY(' + headerHeight + 'px)'
							});
						}
					}
				});
			}
			else {
				win.off('scroll.fl-show-header-on-scroll');
				$('.fl-nav-offcanvas-collapse').css('transform', '');
			}
		},

		/**
		 * Mega Menu
		 *
		 * @see _isResponsiveNavEnabled
		 * @since 1.5
		 * @access private
		 * @method _megaMenu
		 */
		_megaMenu: function () {
			var win = $(window),
				pageHeaderMenu = $('.fl-page-header'),
				menuContainer = pageHeaderMenu.find('.fl-page-header-container'),
				menuWidthLimit = menuContainer.outerWidth(),
				megaItem = null,
				megaItems = null,
				megaContentWidth = 0;

			pageHeaderMenu.find('li.mega-menu, li.mega-menu-disabled').each(function () {
				megaItem = $(this);
				megaContentWidth = megaItem.find('> ul.sub-menu').outerWidth();

				if (typeof megaItem.data('megamenu-width') !== 'undefined') {
					megaContentWidth = megaItem.data('megamenu-width');
				}

				if ((megaItem.hasClass('mega-menu') && menuWidthLimit < megaContentWidth) || FLTheme._isResponsiveNavEnabled()) {
					megaItem.data('megamenu-width', megaContentWidth);

					// Fixed width issue on window resize
					if (FLTheme._isResponsiveNavEnabled()) {
						megaItem.find('> ul.sub-menu').css('display', 'block');
					}

					megaItem.removeClass('mega-menu');
					if (!megaItem.hasClass('mega-menu-disabled')) {
						megaItem.addClass('mega-menu-disabled');
					}
				}
				else if (megaItem.hasClass('mega-menu-disabled') && menuWidthLimit >= megaContentWidth) {
					// Reset sub-menu display style
					megaItem.find('> ul.sub-menu').css('display', '');

					megaItem.removeClass('mega-menu-disabled');
					if (!megaItem.hasClass('mega-menu')) {
						megaItem.addClass('mega-menu');
					}
					megaItem.addClass('mega-menu-items-' + megaItem.children('ul').children('li').length);
				}
			});


		},

		/**
		 * Mega Menu - Fixed Header
		 *
		 * @since 1.5
		 * @access private
		 * @method _megaMenuOnScroll
		 */
		_megaMenuOnScroll: function () {
			var win = $(window),
				pageHeaderFixed = $('.fl-page-header-fixed'),
				menuContainer = pageHeaderFixed.find('.fl-page-header-container'),
				fixedVisible = pageHeaderFixed.is(':visible'),
				megaItem = null,
				megaMenuContent = null;

			if (fixedVisible) {
				pageHeaderFixed.find('li.mega-menu').each(function () {
					megaItem = $(this);
					megaMenuContent = megaItem.find('> ul.sub-menu');

					// Disable mega menu if it's off screen
					if (menuContainer.outerWidth() < megaMenuContent.outerWidth()) {
						megaItem.removeClass('mega-menu');
						if (!megaItem.hasClass('mega-menu-disabled')) {
							megaItem.addClass('mega-menu-disabled');
						}
					}
					else {
						megaItem.removeClass('mega-menu-disabled');
						if (!megaItem.hasClass('mega-menu')) {
							megaItem.addClass('mega-menu');
						}

						megaItem.addClass('mega-menu-items-' + megaItem.children('ul').children('li').length);
					}
				});

				win.off('scroll.fl-mega-menu-on-scroll');
				win.off('resize.fl-mega-menu-on-scroll');
			}
		},

		/**
		 * Fixed headers not be fixed when the builder is active
		 *
		 * @since 1.5.2
		 * @access private
		 * @method _fixedHeadersWhenBuilderActive
		 */
		_fixedHeadersWhenBuilderActive: function () {
			if ($('body.fl-shrink').length != 0) {
				$('body').removeClass('fl-shrink');
			}

			if ($('body.fl-fixed-header').length != 0) {
				$('body').removeClass('fl-fixed-header');
			}

			if ($('body.fl-scroll-header').length != 0) {
				$('body').removeClass('fl-scroll-header');
			}
		},

		/**
		 * Responsive Nav Layout
		 *
		 * @since 1.7
		 * @access private
		 * @method _setupMobileNavLayout
		 */
		_setupMobileNavLayout: function () {
			var win = $(window),
				button = $('button.navbar-toggle'),
				header = $('.fl-page-header:not(.fl-page-header-fixed)'),
				navBar = header.find('.fl-page-nav-collapse'),
				pageWrap = $('.fl-page'),
				navBarTop = 0,
				navHeight = win.height(),
				pushOpacity = $('body').hasClass('fl-offcanvas-push-opacity-left') || $('body').hasClass('fl-offcanvas-push-opacity-right'),
				logoPos = header.find('.fl-page-header-logo').offset();

			if (FLTheme._isResponsiveNavEnabled() && button.is(':visible')) {
				$('body').addClass('fl-responsive-nav-enabled');

				button.attr('data-toggle', 'offcanvas');
				navBar.addClass('fl-nav-offcanvas-collapse');

				if (0 === navBar.find('.fl-button-close').length) {
					navBar.prepend('<div class="fl-button-close"><button class="fl-offcanvas-close" aria-label="Close Menu"><i class="fas fa-times"></i></button></div>');
				}

				if (pushOpacity && 0 === $('.fl-offcanvas-opacity').length) {
					pageWrap.append('<div class="fl-offcanvas-opacity"></div>');
				}

				if (pageWrap.height() > win.height()) {
					navHeight = $(document).height();

					if ($('body.fl-shrink').length != 0) {
						navHeight = navHeight - header.height();
					}
				}

				if ($('body.admin-bar').length != 0) {
					navBarTop = $('#wpadminbar').height();
					navHeight = navHeight - navBarTop;
				}

				if ($('.fl-page-bar').length != 0 && !$('.fl-page-header').hasClass('fl-page-nav-toggle-button')) {
					navBarTop = navBarTop + ($('.fl-page-bar').height() + 1);
				}

				if ($('.fl-scroll-header').length && win.width() >= window.themeopts.medium_breakpoint) {
					navBar.css('top', pageWrap.offset().top - navBarTop + 'px');
				}
				else {
					navBar.css('top', '');
				}

			}
			else {
				button.attr('data-toggle', 'collapse');
				navBar.removeClass('fl-nav-offcanvas-collapse');
				navBar.find('.fl-button-close').remove();
				navBar.css('height', '');
				navBar.css('top', '');
				pageWrap.removeClass('fl-nav-offcanvas-active');
				$('body').find('.fl-offcanvas-opacity').remove();
				$('body').removeClass('fl-responsive-nav-enabled');
			}
		},

		/**
		 * Toggle the Responsive Nav Layout
		 *
		 * @since 1.7
		 * @access private
		 * @method _toggleMobileNavLayout
		 */
		_toggleMobileNavLayout: function () {

			$('.fl-page-nav').on('click', '.fl-offcanvas-close', function (e) {
				$('.fl-page').toggleClass('fl-nav-offcanvas-active');
				e.stopPropagation();
			});

		},

		/**
		 * Apply footer height as margin-bottom value for fl-page class
		 *
		 * @since 1.5
		 * @access private
		 * @method _footerEffect
		 */
		_footerEffect: function () {
			if ($(window).width() >= window.themeopts.mobile_breakpoint) {
				$('.fl-page').css('margin-bottom', $('.fl-page-footer-wrap').height());
			}
			else {
				$('.fl-page').css('margin-bottom', 0);
			}
		},

		/**
		 * Go to Top
		 *
		 * @since 1.5
		 * @access private
		 * @method _toTop
		 */
		_toTop: function () {
			var buttons = $('#fl-to-top');

			buttons.each(function () {
				$(this).click(function () {
					$('html,body').animate({ scrollTop: 0 }, 'linear');
					return false;
				});
			});

			$(window).scroll(function () {
				if ($(this).scrollTop() > window.themeopts.scrollTopPosition) {
					buttons.fadeIn();
				} else {
					buttons.fadeOut();
				}
			});
		},

		/**
		 * Initializes the lightbox.
		 *
		 * @since 1.0
		 * @access private
		 * @method _enableLightbox
		 */
		_enableLightbox: function () {
			var body = $('body');

			// Only works on NON bb pages/posts
			if (!body.hasClass('fl-builder') && !body.hasClass('woocommerce')) {

				$('.fl-content a').filter(function () {
					return /\.(png|jpg|jpeg|gif|webp)(\?.*)?$/i.test(this.href);
				}).magnificPopup({
					closeBtnInside: false,
					type: 'image',
					gallery: {
						enabled: true
					}
				});
			}

			if ((body.hasClass('fl-builder') || body.hasClass('fl-theme-builder-singular')) && !body.hasClass('woocommerce')) {
				$('.fl-rich-text a, .fl-module-fl-post-content a').filter(function () {
					return /\.(png|jpg|jpeg|gif|webp)(\?.*)?$/i.test(this.href);
				}).magnificPopup({
					closeBtnInside: false,
					type: 'image',
					gallery: {
						enabled: true
					}
				});
			}
		},

		/**
		 * Initializes the fitVids
		 *
		 * @since 1.5.2
		 * @access private
		 * @method _enableFitVids
		 */
		_enableFitVids: function () {
			$('.fl-post-content').fitVids();
		},

		/**
		 * Check to see if responsive nav is enabled for the current window width
		 *
		 * @since 1.6.2
		 * @access private
		 * @method _isResponsiveNavEnabled
		 */
		_isResponsiveNavEnabled: function () {
			var win = $(window);
			enabled = false;

			if (($('.fl-page-nav-toggle-visible-always').length > 0)
				|| ($('.fl-page-nav-toggle-visible-medium-mobile').length > 0 && win.width() < window.themeopts.medium_breakpoint)
				|| ($('.fl-page-nav-toggle-visible-mobile').length > 0 && win.width() < window.themeopts.mobile_breakpoint)
			) {
				enabled = true;
			}

			return enabled;
		}
	};

	$(function () {
		FLTheme.init();
	});

	// Mobile Logo
	if (!($('html.fl-builder-edit').length !== 0)) {
		FLTheme._initMobileHeaderLogo();
	}
	FLTheme._initRetinaImages();

})(jQuery);


jQuery(document).ready(function ($) {
	function detectOS() {
		var OSName = "";
		if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
		else if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
		else if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
		else if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

		$("body").addClass("os_" + OSName)
	}
	detectOS()
	$(".top_bar_title").html("The future is equal").fadeIn();
	/*
	$("h2 .fl-heading-text span").each(function(){
		var span_txt = "<span class='spanbg_txt'>"+$(this).html()+"</span>";
		var span_bg = "<span class='spanbg green'></span>";
		$(this).html("<span class='spanbg_wrap'>"+span_txt+span_bg+"</span>");
	}) 
	*/



	// WINDOW RESIZE //
	$(window).on("resize", function () {



	});

	// WINDOW SCROLL //
	$(window).on("scroll", function () {



	});

});

jQuery(document).ready(function ($) {
	$('.carrousel-news').each(function () {
		var arrow = $(this).parent().find(".slider-header").find(".slider-ctl");
		var dot = $(this).parent().find(".slider-header").find(".slider-dot");
		$(this).slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			adaptiveHeight: false,
			appendArrows: arrow,
			appendDots: dot,
			prevArrow: '<button type="button" class="slick-prev-news"><img src="../assets/images/g_9360.svg" alt="arrow left"></button>',
			nextArrow: '<button type="button" class="slick-next-news"><img src="../assets/images/g_9361.svg" alt="arrow right"></button>',
			responsive: [
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,
					}
				}
			]
		});
	});

	setTimeout(function () {
		$(".slick-dots").find("button").each(
			function () {
				$(this).text($(this).attr("aria-label"));
			}
		)
	}, 100);

	$('.home-page-sider').each(function () {

		var arrow = $(this).parent().find(".slider-header").find(".slider-ctl");
		var dot = $(this).parent().find(".slider-header").find(".slider-dot");
		$(this).slick({
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			asNavFor: '.home-page-tabs',
			focusOnSelect: false,
			arrows: true,
			dots: true,
			appendArrows: arrow,
			appendDots: dot,
			prevArrow: '<button type="button" class="slick-prev-two-column"><img src="../assets/images/g_9360.svg" alt="arrow left"></button>',
			nextArrow: '<button type="button" class="slick-next-two-column"><img src="../assets/images/g_9361.svg" alt="arrow right"></button>'
		});
	});
	$('.home-page-tabs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.home-page-sider',
		dots: false,
		centerMode: true,
		focusOnSelect: true
	});



	// Close desired elements when ESC is pressed
	$(document).on(
		'keydown', function (event) {
			var KEYCODE_TAB = 9;
			var isTABPressed = (event.key === 'Tab' || event.keyCode === KEYCODE_TAB);
			if (isTABPressed) {
				$("*").removeClass("nofocus")
			}
		});

	$(".home-page-tab").on('click', function (event) {
		$(this).addClass("nofocus");
		$('.home-page-sider').slick('slickPause');
	});
	$(".slick-arrow").on('click', function (event) {
		$(this).addClass("nofocus");
		$('.home-page-sider').slick('slickPause');
	});

	$(".home-page-tabs-container").fadeIn()










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


});
