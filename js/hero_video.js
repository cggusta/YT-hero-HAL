$(function() {
    heroVideoOpen = false;
    var headerHeight;

    $('.playHeroVideoBtn').attr('tabindex', 0);
    $('.closeHeroVid').html('<a href="#" onclick="return false;" tabindex="0" style="color:white;text-decoration:none;">&times;</a>');

    // open hero video
    $('.playHeroVideoBtn').click(function() {
        youTubeHeroId = $(this).data('videoid');
        youTubeModuleName = $(this).data('trackingref');
        openHeroVideo();
    });
    // starts hero video when play is tabbed to with space/enter
    $('.playHeroVideoBtn').keypress(function(e) {
        // console.log("key pressed");
        // if (!e) { var e = window.event; }
        // e.preventDefault();
        // // // Enter is pressed
        if (e.which == 13 || e.which == 32) {
            console.log("start video");
            e.preventDefault();
            youTubeHeroId = $(this).data('videoid');
            youTubeModuleName = $(this).data('trackingref');
            openHeroVideo();
        }

    });

    $('.closeHeroVid').click(function() {
        closeHeroVideo();
    });

    window.openHeroVideo = function() {
        selectHeroVideo();
        headerHeight = $('#csVideoContainer').height();
        if (!heroVideoOpen) {
            var videoHeight = $('#heroCSVid').height();
            $('#heroCSBlocker').fadeIn("slow", function() {
                $('#csVideoContainer').animate({
                    height: videoHeight
                }, 1000, function() {
                    $(this).css('height', 'auto');
                    $('#heroCSVid').fadeIn("slow");
                    heroVideoOpen = true;
                });
            });
            $('#playHeroContainer').fadeOut('slow');
        };
    };

    window.closeHeroVideo = function() {
        if (heroVideoOpen) {
            var videoHeight = $('#heroCSVid').height();
            $('#csVideoContainer').css('height', videoHeight);
            $('#heroCSVid').fadeOut("slow", function() {
                stopHeroVideo();
                $('#heroCSVid').css('background-color', 'transparent !important');
                $('#playHeroContainer').fadeIn('slow');
                $('#csVideoContainer').animate({
                    height: headerHeight
                }, 1000, function() {
                    heroVideoOpen = false;
                    $(this).css('height', 'auto');
                    $('#heroCSBlocker').fadeOut("slow");
                });
            });
        };
    };

})();