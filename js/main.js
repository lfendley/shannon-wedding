(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });    
    
})(jQuery);

$(document).ready(function() {

    /** ---------------------------- //
     *  @group viewport trigger script 
     * for adding or removing classes from elements in view within viewport
    */
  
    const $animationElements = $('.animation-element');
    const $window = $(window);

    // ps: Let's FIRST disable triggering on small devices!
    let isMobile = window.matchMedia("only screen and (max-width: 768px)");
    if (isMobile.matches) {
        $animationElements.removeClass('animation-element');
    }

    function checkIfInView() {

        let windowHeight = $window.height();
        let windowTopPosition = $window.scrollTop();
        let windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animationElements, function () {
            let $element = $(this);
            let elementHeight = $element.outerHeight();
            let elementTopPosition = $element.offset().top;
            let elementBottomPosition = (elementTopPosition + elementHeight);

//check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});

$(document).ready(function() {   
    $("#rsvp-form").on("submit", function(e) {
        var postData = $(this).serializeArray();
        var formURL = $(this).attr("action");
        var answer = $();
        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function(data, textStatus, jqXHR) {

                document.cookie = "rsvp=yes";
                window.location.reload();
            },
            error: function(jqXHR, status, error) {
                console.log(status + ": " + error);
            }
        });
        e.preventDefault();
    });
})
