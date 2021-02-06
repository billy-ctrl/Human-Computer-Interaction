// Hide all subcontent
$(document).ready(function() 
{
    $("#holder_A").hide();

    $("#foundation").hide();
    $("#found1").hide();
    $("#found2").hide();
    $("#found3").hide();
    $("#found_d1").hide();
    $("#found_d2").hide();
    $("#found_d3").hide();

    $("#concealer").hide();
    $("#con1").hide();
    $("#con2").hide();
    $("#con3").hide();
    $("#con_d1").hide();
    $("#con_d2").hide();
    $("#con_d3").hide();

    $("#holder_B").hide();

    $("#mascara").hide();
    $("#masc1").hide();
    $("#masc2").hide();
    $("#masc3").hide();
    $("#masc_d1").hide();
    $("#masc_d2").hide();
    $("#masc_d3").hide();

    $("#eyeliner").hide();
    $("#eye1").hide();
    $("#eye2").hide();
    $("#eye3").hide();
    $("#eye_d1").hide();
    $("#eye_d2").hide();
    $("#eye_d3").hide();

    $("#holder_C").hide();

    $("#lipgloss").hide();
    $("#lip1").hide();
    $("#lip2").hide();
    $("#lip3").hide();
    $("#lip_d1").hide();
    $("#lip_d2").hide();
    $("#lip_d3").hide();
    
    $("#lipstain").hide();
    $("#stain1").hide();
    $("#stain2").hide();
    $("#stain3").hide();
    $("#stain_d1").hide();
    $("#stain_d2").hide();
    $("#stain_d3").hide();
});

// onclick reveal the content below it
function reveal_sub_face()
{   
    // if the content below it is already revealed then hide it
    if($("#holder_A").is(":visible"))
    {
        if($("#foundation").is(":visible"))
        {
            $(document).ready(function() 
            {
                $("#foundation").slideUp();

                $("#found1").slideUp();
                $("#found2").slideUp();
                $("#found3").slideUp();

                $("#found_d1").slideUp();
                $("#found_d2").slideUp();
                $("#found_d3").slideUp();
            });
        }

        if($("#concealer").is(":visible"))
        {
            $(document).ready(function() 
            {
                $("#concealer").slideUp();

                $("#con1").slideUp();
                $("#con2").slideUp();
                $("#con3").slideUp();
                $("#con_d1").slideUp();
                $("#con_d2").slideUp();
                $("#con_d3").slideUp();
            });
        }
        
        $(document).ready(function() 
        {
            $("#holder_A").slideUp();
        });
    }
    else
    {
        $(document).ready(function() 
        {
            $("#holder_A").slideDown();
        });
    }
}

// onclick reveal the content below it
function reveal_foundation()
{
    // if the content below it is already revealed then hide it
    if($("#foundation").is(":visible"))
    {
        $(document).ready(function() 
        {
            $("#foundation").slideUp();

            $("#found1").slideUp();
            $("#found2").slideUp();
            $("#found3").slideUp();

            $("#found_d1").slideUp();
            $("#found_d2").slideUp();
            $("#found_d3").slideUp();
        });
    }
    else
    {
        $(document).ready(function() 
        {
            $("#foundation").slideDown();

            $("#found1").slideDown();
            $("#found2").slideDown();
            $("#found3").slideDown();

            $("#found_d1").slideDown();
            $("#found_d2").slideDown();
            $("#found_d3").slideDown();
        });
    }
}

// onclick reveal the content below it
function reveal_concealer()
{ 
    // if the content below it is already revealed then hide it
    if($("#concealer").is(":visible"))
    {
        $(document).ready(function() 
        {
            $("#concealer").slideUp();

            $("#con1").slideUp();
            $("#con2").slideUp();
            $("#con3").slideUp();
            $("#con_d1").slideUp();
            $("#con_d2").slideUp();
            $("#con_d3").slideUp();
        });
    }
    else
    {
        $(document).ready(function() 
        {
            $("#concealer").slideDown();

            $("#con1").slideDown();
            $("#con2").slideDown();
            $("#con3").slideDown();
            $("#con_d1").slideDown();
            $("#con_d2").slideDown();
            $("#con_d3").slideDown();
        });
    }
}

// onclick reveal the content below it
function reveal_sub_face2()
{
    // if the content below it is already revealed then hide it
    if($("#holder_B").is(":visible"))
    {
        if($("#eyeliner").is(":visible"))
        {
            $(document).ready(function() 
            {
                $("#eyeliner").slideUp();
                $("#eye1").slideUp();
                $("#eye2").slideUp();
                $("#eye3").slideUp();
                $("#eye_d1").slideUp();
                $("#eye_d2").slideUp();
                $("#eye_d3").slideUp();

            });
        }

        if($("#mascara").is(":visible"))
        {
            $(document).ready(function() 
            {
                $("#mascara").slideUp();
                $("#masc1").slideUp();
                $("#masc2").slideUp();
                $("#masc3").slideUp();
                $("#masc_d1").slideUp();
                $("#masc_d2").slideUp();
                $("#masc_d3").slideUp();
            });
        }

        $(document).ready(function() 
        {
            $("#holder_B").slideUp();
        });
    }
    else
    {
        $(document).ready(function() 
        {
            $("#holder_B").slideDown();
        });
    }
}

// onclick reveal the content below it
function reveal_mascara()
{
    // if the content below it is already revealed then hide it
    if($("#mascara").is(":visible"))
    {
        $(document).ready(function() 
        {
            $("#mascara").slideUp();
            $("#masc1").slideUp();
            $("#masc2").slideUp();
            $("#masc3").slideUp();
            $("#masc_d1").slideUp();
            $("#masc_d2").slideUp();
            $("#masc_d3").slideUp();
        });
    }
    else
    {
        $(document).ready(function() 
        {
            $("#mascara").slideDown();
            $("#masc1").slideDown();
            $("#masc2").slideDown();
            $("#masc3").slideDown();
            $("#masc_d1").slideDown();
            $("#masc_d2").slideDown();
            $("#masc_d3").slideDown();
        });
    }
}

// onclick reveal the content below it
function reveal_eyeliner()
{
    // if the content below it is already revealed then hide it
    if($("#eyeliner").is(":visible"))
    {
        $(document).ready(function() 
        {
            $("#eyeliner").slideUp();
            $("#eye1").slideUp();
            $("#eye2").slideUp();
            $("#eye3").slideUp();
            $("#eye_d1").slideUp();
            $("#eye_d2").slideUp();
            $("#eye_d3").slideUp();
        });
    }
    else
    {
        $(document).ready(function() 
        {
            $("#eyeliner").slideDown();
            $("#eye1").slideDown();
            $("#eye2").slideDown();
            $("#eye3").slideDown();
            $("#eye_d1").slideDown();
            $("#eye_d2").slideDown();
            $("#eye_d3").slideDown();
        });
    }
}

// onclick reveal the content below it
function reveal_sub_face3()
{
    // if the content below it is already revealed then hide it
    if($("#holder_C").is(":visible"))
    {
        if($("#lipstain").is(":visible"))
        {
            $(document).ready(function() 
            {
                $("#lipstain").slideUp();
                $("#stain1").slideUp();
                $("#stain2").slideUp();
                $("#stain3").slideUp();
                $("#stain_d1").slideUp();
                $("#stain_d2").slideUp();
                $("#stain_d3").slideUp();
            });
        }

        if($("#lipgloss").is(":visible"))
        {
            $(document).ready(function() 
            {
                $("#lipgloss").slideUp();

                $("#lip1").slideUp();
                $("#lip2").slideUp();
                $("#lip3").slideUp();
                $("#lip_d1").slideUp();
                $("#lip_d2").slideUp();
                $("#lip_d3").slideUp();
            });
        }

        $(document).ready(function() 
        {
            $("#holder_C").slideUp();
        });
    }
    else
    {
        $(document).ready(function() 
        {
            $("#holder_C").slideDown();
        });
    }
}

// onclick reveal the content below it
function reveal_lipgloss()
{
    // if the content below it is already revealed then hide it
    if($("#lipgloss").is(":visible"))
    {
        $(document).ready(function() 
        {
            $("#lipgloss").slideUp();

            $("#lip1").slideUp();
            $("#lip2").slideUp();
            $("#lip3").slideUp();
            $("#lip_d1").slideUp();
            $("#lip_d2").slideUp();
            $("#lip_d3").slideUp();
        });
    }
    else
    {
        $(document).ready(function() 
        {
            $("#lipgloss").slideDown();

            $("#lip1").slideDown();
            $("#lip2").slideDown();
            $("#lip3").slideDown();
            $("#lip_d1").slideDown();
            $("#lip_d2").slideDown();
            $("#lip_d3").slideDown();
        });
    }
}

// onclick reveal the content below it
function reveal_lipstain()
{
    // if the content below it is already revealed then hide it
    if($("#lipstain").is(":visible"))
    {
        $(document).ready(function() 
        {
            $("#lipstain").slideUp();
            $("#stain1").slideUp();
            $("#stain2").slideUp();
            $("#stain3").slideUp();
            $("#stain_d1").slideUp();
            $("#stain_d2").slideUp();
            $("#stain_d3").slideUp();
        });
    }
    else
    {
        $(document).ready(function() 
        {
            $("#lipstain").slideDown();
            $("#stain1").slideDown();
            $("#stain2").slideDown();
            $("#stain3").slideDown();
            $("#stain_d1").slideDown();
            $("#stain_d2").slideDown();
            $("#stain_d3").slideDown();
        });
    }
}