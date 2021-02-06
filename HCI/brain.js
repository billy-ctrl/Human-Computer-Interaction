// ----------------- Homepage -----------------

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
    $(document).ready(function() 
    {
        if($("#img1").is(":visible"))
        {
            if($("#banner1").is(":visible"))
            {
                $("#banner2").show();
                $("#banner1").hide();
            }

            $("#img2").fadeIn(1000);
            $("#img1").delay(700).hide();
        }
        else if($("#img2").is(":visible"))
        {
            if($("#banner2").is(":visible"))
            {
                $("#banner3").show();
                $("#banner2").hide();
            }

            $("#img3").fadeIn(1000);
            $("#img2").delay(700).hide();
        }
        else if($("#img3").is(":visible"))
        {
            if($("#banner3").is(":visible"))
            {
                $("#banner1").show();
                $("#banner3").hide();
            }

            $("#img1").fadeIn(1000);
            $("#img3").delay(700).hide();
        }
    });
}

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

            $("#img3").fadeIn(600);
            $("#img1").delay(700).hide();
        }
        else if($("#img2").is(":visible"))
        {
            if($("#banner2").is(":visible"))
            {
                $("#banner1").show();
                $("#banner2").hide();
            }

            $("#img1").fadeIn(600);
            $("#img2").delay(700).hide();
        }
        else if($("#img3").is(":visible"))
        {
            if($("#banner3").is(":visible"))
            {
                $("#banner2").show();
                $("#banner3").hide();
            }

            $("#img2").fadeIn(600);
            $("#img3").delay(700).hide();
        }
    });
}



// --------------------------------------------
// ----------------- Register -----------------
// --------------------------------------------

function showpassword()
{
    var x = document.getElementById("userpassword");

    if (x.type === "password") 
    {
        x.type = "text";
    } else 
    {
        x.type = "password";
    }
}

function start()
{
    document.getElementById('bottomtext').innerHTML = "";

    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("userpassword").value;
    var confirmpass = document.getElementById("confirm_userpassword").value;
    var gender1 = document.getElementById("male").checked;
    var gender2 = document.getElementById("female").checked;
    var gender3 = document.getElementById("other").checked;
    var country = document.getElementById("countries").value;
    var addr = document.getElementById("address").value;
    var yes = document.getElementById("agree").checked;

    var word = addr.split(" ").length;

    var flag = 0;
    flag = passwordChecker(pass); 

    var email_flag = "";
    email_flag = validEmail(email);

    if(name.length < 3)
    {
        document.getElementById('bottomtext').innerHTML = "Name cannot be less than 3 characters";
    }
    else if(!isNaN(name))
    {
        document.getElementById('bottomtext').innerHTML = "Name cannot be numeric";
    }
    else if(email == "")
    {
        document.getElementById('bottomtext').innerHTML = "Please enter your email address";
    }
    else if(email_flag == false)
    {
        document.getElementById('bottomtext').innerHTML = "Email address is invalid";
    }
    else if(pass == "")
    {
        document.getElementById('bottomtext').innerHTML = "Please enter your password";
    }
    else if(flag == 0)
    {
        document.getElementById('bottomtext').innerHTML = "Password must contain at least 1 uppercase and a number";
    }
    else if(confirmpass != pass)
    {
        document.getElementById('bottomtext').innerHTML = "The re-entered password is not that same";
    }
    else if(confirmpass == pass && flag == 0)
    {
        document.getElementById('bottomtext').innerHTML = "Password must contain at least 1 uppercase and a number";
    }
    else if(!gender1 && !gender2 && !gender3)
    {
        document.getElementById('bottomtext').innerHTML = "Please select a gender";
    }
    else if(country == "")
    {
        document.getElementById('bottomtext').innerHTML = "Please pick a country";
    }
    else if(word < 5)
    {
        document.getElementById('bottomtext').innerHTML = "Address must contain more than 5 words";
    }
    else if(!yes)
    {
        document.getElementById('bottomtext').innerHTML = "Please agree with our terms and conditions";
    }
    else
    {
        var final_gender = "";

        if(gender1 == true)
        {
            final_gender = "Male";
        }
        else if(gender2 == true)
        {
            final_gender = "Female";
        }
        else if(gender3 == true)
        {
            final_gender = "Other";
        }

        alert("Name : " + name + "\n" + "Email : " + email + "\n" +  "Gender : " + final_gender + "\n" + "Country : " + country + "\n" +  "Address : " + addr + "\n");

        reset_field(2);
    }
}

function reset_field(checker)
{
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("userpassword").value = "";
    document.getElementById("confirm_userpassword").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("other").checked = false;
    document.getElementById("countries").selectedIndex = "0";
    document.getElementById("address").value = "";
    document.getElementById("agree").checked = false;
    document.getElementById('bottomtext').innerHTML = "";

    if(checker == 1)
    {
        alert("Form Resetted");
    }
}

function passwordChecker(pass)
{
    var word = pass;
    var length = word.length;
    var flag_num = 0;
    var flag_upper = 0;
    var character = "";

    for(var i=0; i<length; i++)
    {
        character = word.charAt(i);

        if(!isNaN(character))
        {
            flag_num = 1;
        }
        else
        {
            if(character == character.toUpperCase())
            {
                flag_upper = 1;
            }
        }
    }

    if(flag_num == 1 && flag_upper == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

function validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};