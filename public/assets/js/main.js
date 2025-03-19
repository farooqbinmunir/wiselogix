jQuery(document).ready(function($) {


    if ($("header").length > 1) {
        $("header").not(':first').remove();
    }

    // Menu Handling
    $("#main-menu ul.sub-menu").each(function() {
        title_id = $(this).parent().attr("data-id")
        if (title_id) $(this).attr("aria-labelledby", title_id)
    })

    $("#main-menu .mainmenu_main").on('click', function(e) {
        $(".section_expanded").removeClass("section_expanded");
        var aria_expanded = $(this).attr("aria-expanded")
        if (aria_expanded == "false") {
            $(this).attr("aria-expanded", "true")
            $(this).parent().addClass("section_expanded")
        } else {
            if (e.type != "mouseover" || e.type != "touchstart") {
                $(this).attr("aria-expanded", "false")
                $(this).parent().removeClass("section_expanded")

            }
        }
        $("#main-menu .mainmenu_main").not(this).attr("aria-expanded", "false")
    })

    $("#main-menu").on({
        'mouseleave': function() {
            $("#main-menu .mainmenu_main").not(this).attr("aria-expanded", "false").blur()
            $(".section_expanded").removeClass("section_expanded");
        }
    })

    if ($(window).width() > 992) {
        $("#main-menu .mainmenu_main").on('mouseover', function(e) {
            $(".section_expanded").removeClass("section_expanded");
            var aria_expanded = $(this).attr("aria-expanded")
            if (aria_expanded == "false") {
                $(this).attr("aria-expanded", "true")
                $(this).parent().addClass("section_expanded")
            } else {
                if (e.type != "mouseover" || e.type != "touchstart") {
                    $(this).attr("aria-expanded", "false")
                    $(this).parent().removeClass("section_expanded")

                }
            }
            $("#main-menu .mainmenu_main").not(this).attr("aria-expanded", "false")
        })

    };

    function toggleMobileMenu() {
        $("body").toggleClass("mobilemenu_show");
        $(".menu-desktop").toggleClass("active");
        let hamburgerMenu = $(".mobile_menu_toggle");
        if (hamburgerMenu.attr("aria-expanded") === "true") {
            hamburgerMenu.attr("aria-expanded", "false");
            let mainMenuItems = $("#main-menu .mainmenu_main");
            mainMenuItems.attr("aria-expanded", "false");
            mainMenuItems.parent().removeClass("section_expanded");
        } else {
            hamburgerMenu.attr("aria-expanded", "true")
            if (!hamburgerMenu.data('focus-check-set')) {
                let userTabbedOutOfMenu = function(e, checkShift) {
                    return $(".menu-desktop").hasClass('active') && ((e.key === 'Tab' || e.keyCode === 9) && (checkShift === e.shiftKey));
                }
                hamburgerMenu.keydown(function(e) {
                    if (userTabbedOutOfMenu(e, true)) {
                        toggleMobileMenu();
                    }
                });
                let mainMenu = document.getElementById('main-menu');
                let focusableMenuElements = mainMenu.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
                let lastFocusableMenuElement = focusableMenuElements[focusableMenuElements.length - 1];
                $(lastFocusableMenuElement).keydown(function(e) {
                    if (userTabbedOutOfMenu(e, false)) {
                        toggleMobileMenu();
                    }
                });
                hamburgerMenu.data('focus-check-set', true);
            }
        }
    }

    $(".mobile_menu_toggle").click(function() {
        toggleMobileMenu();
    });

    $('body').click(function(e) {
        if ($(window).width() <= 992) {
            let menuIsCurrentlyExpanded = $(".menu-desktop").hasClass('active');
            let clickTargetIsOutsideMenu = !$(e.target).closest('#main-menu').length;
            if (menuIsCurrentlyExpanded && clickTargetIsOutsideMenu) {
                toggleMobileMenu();
            }
        }
    });

    // Menu Handling Close \\

    /* DONATION FORMS */
    $('.donate_radio_button_label').on("click", function() {
        $(this).parents("form").find('.donate_other_outer_wrapper').removeClass('visible');
    });
    $('.donate_radio_button_label[for="donate_form_amount_option_other"]').on("click", function() {
        $(this).parents("form").find('.donate_other_outer_wrapper').toggleClass('visible');
    });
    // Toggle the other amount field based on radio option selection
    $('input[name="donate_form_amount"]').change(function() {
        $(this).closest('form').find('.donate_other_outer_wrapper').css('visibility', this.value === 'other' ? 'visible' : 'hidden');
    });
    /* DONATION FORMS Close */
    // JOINUS FORM SUBMISSION HANDLING
    $(".joinus_form_submit.header").on("click", function() {

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
    });
    // JOINUS FORM SUBMISSION HANDLING Close

    // NEWS CAROUSEL
    $('.carrousel-news').each(function() {
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
            responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            }]
        });
    });

    setTimeout(function() {
        $(".slick-dots").find("button").each(
            function() {
                $(this).text($(this).attr("aria-label"));
            }
        )
    }, 100);

    $('.home-page-sider').each(function() {
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
    if($('.home-page-tabs').length){
        $('.home-page-tabs').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.home-page-sider',
            dots: false,
            centerMode: true,
            focusOnSelect: true
        });
    }

    $(".home-page-tab").on('click', function(event) {
        $('.home-page-sider').slick('slickPause');
    });
    $(".slick-arrow").on('click', function(event) {
        $('.home-page-sider').slick('slickPause');
    });
    // NEWS CAROUSEL Close
});