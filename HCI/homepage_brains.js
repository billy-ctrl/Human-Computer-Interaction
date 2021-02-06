// ----------------------------------------------
// ------------------ Homepage ------------------
// ----------------------------------------------

// Hiding the rest of the image and banner at the beginning
$(document).ready(function() 
{
    $("#img2").hide();
    $("#img3").hide();
    $("#banner1").hide();
    $("#banner2").hide();
    $("#banner3").hide();
});


$(document).ready(function() 
{
    var interval;

    // Starts slider 
    function playSlider()
    {
        interval = setInterval(function() {
            next();
        }, 3000);
    }

    // pause slider
    function pauseSlider()
    {
        clearInterval(interval);
        showBanner();
    }

    // Shows image information on mouse hover
    function showBanner()
    {
        if($("#img1").is(":visible"))
        {
            $("#banner1").fadeIn(500);
        }
        else if($("#img2").is(":visible"))
        {
            $("#banner2").fadeIn(500);
        }
        else if($("#img3").is(":visible"))
        {
            $("#banner3").fadeIn(500);
        }
    }

    // Hides image information on mouse leave
    function removeBanner()
    {
        if($("#banner1").is(":visible"))
        {
            $("#banner1").fadeOut(500);
            playSlider();
        }
        else if($("#banner2").is(":visible"))
        {
            $("#banner2").fadeOut(500);
            playSlider();
        }
        else if($("#banner3").is(":visible"))
        {
            $("#banner3").fadeOut(500);
            playSlider();
        }
    }

    // adjusting functions to be runned when mouse activity detected
    $(".slider").on("mouseenter", pauseSlider).on("mouseleave", removeBanner)

    // start automatic slide
    playSlider();
});

function next()
{
    // Go to next slide
    $(document).ready(function() 
    {
        if($("#img1").is(":visible"))
        {
            if($("#banner1").is(":visible"))
            {
                $("#banner2").show();
                $("#banner1").hide();
            }

            $("#img1").fadeOut(1000);
            $("#img2").delay(700).fadeIn(1000);
        }
        else if($("#img2").is(":visible"))
        {
            if($("#banner2").is(":visible"))
            {
                $("#banner3").show();
                $("#banner2").hide();
            }

            $("#img2").fadeOut(1000);
            $("#img3").delay(700).fadeIn(1000);
        }
        else if($("#img3").is(":visible"))
        {
            if($("#banner3").is(":visible"))
            {
                $("#banner1").show();
                $("#banner3").hide();
            }

            $("#img3").fadeOut(1000);
            $("#img1").delay(700).fadeIn(1000);
        }
    });
}

// Go to previous slide
function prev()
{
    $(document).ready(function() 
    {
        if($("#img1").is(":visible"))
        {
            if($("#banner1").is(":visible"))
            {
                $("#banner3").show();
                $("#banner1").hide();
            }

            $("#img1").fadeOut(1000);
            $("#img3").delay(700).fadeIn(1000);
        }
        else if($("#img2").is(":visible"))
        {
            if($("#banner2").is(":visible"))
            {
                $("#banner1").show();
                $("#banner2").hide();
            }

            $("#img2").fadeOut(1000);
            $("#img1").delay(700).fadeIn(1000);
        }
        else if($("#img3").is(":visible"))
        {
            if($("#banner3").is(":visible"))
            {
                $("#banner2").show();
                $("#banner3").hide();
            }

            $("#img3").fadeOut(1000);
            $("#img2").delay(700).fadeIn(1000);
        }
    });
}