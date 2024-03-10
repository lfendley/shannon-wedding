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

// Form

function rsvpCheck() {
    document.getElementById("yes").checked ? ($("#ifYes").slideDown(), $("#ifNo").slideUp()) : ($("#ifYes").slideUp(), $("#ifNo").slideDown())
}

function checkFields() {
    var e = document.getElementById("attending").value,
        o = $("#one-food"),
        i = $("#two"),
        s = $("#two-food"),
        n = $("#three"),
        d = $("#three-food"),
        l = $("#four"),
        t = $("#four-food");
    // $("#song");
    switch (e) {
        case "1":
            o.slideDown(), i.slideUp(), s.slideUp(), n.slideUp(), d.slideUp(), l.slideUp(), t.slideUp();
            break;
        case "2":
            i.slideDown(), s.slideDown(), n.slideUp(), d.slideUp(), l.slideUp(), t.slideUp();
            break;
        case "3":
            i.slideDown(), s.slideDown(), n.slideDown(), d.slideDown(), l.slideUp(), t.slideUp();
            break;
        case "4":
            i.slideDown(), s.slideDown(), n.slideDown(), d.slideDown(), l.slideDown(), t.slideDown()
    }
}

$('#submit').click(function() {
     $('#modalname').text($('#name').val());
     $('#modalemail').text($('#email').val());

     $('#modalparty').text($('#attending').val());
     $('#modalguest1-food').text($('#guest1-food').val());
     $('#modalguest2').text($('#other2').val());
     $('#modalguest2meal').text($('#guest2-food').val());
     $('#modalguest3').text($('#other3').val());
     $('#modalguest3meal').text($('#guest3-food').val());
     $('#modalguest4').text($('#other4').val());
     $('#modalguest4meal').text($('#guest4-food').val());
     
    if ($('input[id="yes"]').is(':checked')) {
        $('#modalattending').text($('#yes').val());
        $('#answer').text("Yes");
    } else if ($('input[id="no"]').is(':checked')) {
        $('#modalattending').text($('#no').val());
        $('#answer').text("No");
    };
});

$('#modalsubmit').click(function(){
    var answer = $("#modalattending").text();
    
    if (answer == 'Yes') {
        localStorage.setItem('rsvp', 'Yes');
    } else {
        localStorage.setItem('rsvp', 'No');
    }
    $('#rsvp-form').submit();
});

$("#footer button").click(function() {
    document.cookie = "rsvp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
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
                $("#modalsubmit").remove();
                // $("#rsvp-form").remove();
                document.cookie = "rsvp=yes";
                // window.location.reload();
            },
            error: function(jqXHR, status, error) {
                console.log(status + ": " + error);
            }
        });
        e.preventDefault();
    });
    var cookies = document.cookie.split(';');
    var cookiesName = []; 
    
    for(var i=0; i<cookies.length; i++) {
        cookiesName[i] = cookies[i].split('=')[0].trim();
    }
}), 
$(".toggle-radio").on("click", rsvpCheck);