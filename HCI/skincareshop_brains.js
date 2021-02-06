// Hide all subcontent
$(document).ready(function() 
{
    $("#sunscreen").hide();
    $("#moisturizer").hide();
    $("#facemask").hide();

    $("#sun1").hide();
    $("#sun2").hide();
    $("#sun3").hide();

    $("#sun_d1").hide();
    $("#sun_d2").hide();
    $("#sun_d3").hide();

    $("#moist1").hide();
    $("#moist2").hide();
    $("#moist3").hide();

    $("#moist_d1").hide();
    $("#moist_d2").hide();
    $("#moist_d3").hide();

    $("#face1").hide();
    $("#face2").hide();
    $("#face3").hide();

    $("#face_d1").hide();
    $("#face_d2").hide();
    $("#face_d3").hide();
});



// onclick reveal the content below it
function reveal_sunscreen()
{
    // if the content below it is already revealed then hide it
    if($("#sunscreen").is(":visible"))
    {
        $(document).ready(function() 
        {
            $("#sunscreen").slideUp();

            $("#sun1").slideUp();
            $("#sun2").slideUp();
            $("#sun3").slideUp();

            $("#sun_d1").slideUp();
            $("#sun_d2").slideUp();
            $("#sun_d3").slideUp();
        });
    }
    else
    {
        $(document).ready(function() 
        {
            $("#sunscreen").slideDown();

            $("#sun1").slideDown();
            $("#sun2").slideDown();
            $("#sun3").slideDown();

            $("#sun_d1").slideDown();
            $("#sun_d2").slideDown();
            $("#sun_d3").slideDown();
        });
    }
}

// onclick reveal the content below it
function reveal_moisturizer()
{ 
    // if the content below it is already revealed then hide it
    if($("#moisturizer").is(":visible"))
    {
        $(document).ready(function() 
        {
            $("#moisturizer").slideUp();

            $("#moist1").slideUp();
            $("#moist2").slideUp();
            $("#moist3").slideUp();

            $("#moist_d1").slideUp();
            $("#moist_d2").slideUp();
            $("#moist_d3").slideUp();
        });
    }
    else
    {
        $(document).ready(function() 
        {
            $("#moisturizer").slideDown();

            $("#moist1").slideDown();
            $("#moist2").slideDown();
            $("#moist3").slideDown();

            $("#moist_d1").slideDown();
            $("#moist_d2").slideDown();
            $("#moist_d3").slideDown();
        });
    }
}

// onclick reveal the content below it
function reveal_facemask()
{
    // if the content below it is already revealed then hide it
    if($("#facemask").is(":visible"))
    {
        $(document).ready(function() 
        {
            $("#facemask").slideUp();

            $("#face1").slideUp();
            $("#face2").slideUp();
            $("#face3").slideUp();

            $("#face_d1").slideUp();
            $("#face_d2").slideUp();
            $("#face_d3").slideUp();
        });
    }
    else
    {
        $(document).ready(function() 
        {
            $("#facemask").slideDown();

            $("#face1").slideDown();
            $("#face2").slideDown();
            $("#face3").slideDown();

            $("#face_d1").slideDown();
            $("#face_d2").slideDown();
            $("#face_d3").slideDown();
        });
    }
}
