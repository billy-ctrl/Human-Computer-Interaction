// ----------------------------------------------
// -----------------  Register  -----------------
// ----------------------------------------------

$("#bottomtext").hide();

// show password when checking the passward checkbox
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

// Start evaluating the submission 
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
    var skin = document.getElementById("skin_type").value;
    var country = document.getElementById("countries").value;
    var addr = document.getElementById("address").value;
    var yes = document.getElementById("agree").checked;

    var word = addr.split(" ").length;

    var flag = 0;
    flag = passwordChecker(pass); 

    var email_flag = "";
    email_flag = email_checker(email);

    if(name.length < 3)
    {
        $("#bottomtext").show();
        document.getElementById('bottomtext').innerHTML = "Name cannot be less than 3 characters";
    }
    else if(!isNaN(name))
    {
        $("#bottomtext").show();
        document.getElementById('bottomtext').innerHTML = "Name cannot be numeric";
    }
    else if(email == "")
    {
        $("#bottomtext").show();
        document.getElementById('bottomtext').innerHTML = "Please enter your email address";
    }
    else if(email_flag == false)
    {
        $("#bottomtext").show();
        document.getElementById('bottomtext').innerHTML = "Email address is invalid";
    }
    else if(pass == "")
    {
        $("#bottomtext").show();
        document.getElementById('bottomtext').innerHTML = "Please enter your password";
    }
    else if(flag == 0)
    {
        $("#bottomtext").show();
        document.getElementById('bottomtext').innerHTML = "Password must contain at least 1 uppercase and a number";
    }
    else if(confirmpass != pass)
    {
        $("#bottomtext").show();
        document.getElementById('bottomtext').innerHTML = "The re-entered password is not that same";
    }
    else if(confirmpass == pass && flag == 0)
    {
        $("#bottomtext").show();
        document.getElementById('bottomtext').innerHTML = "Password must contain at least 1 uppercase and a number";
    }
    else if(!gender1 && !gender2 && !gender3)
    {
        $("#bottomtext").show();
        document.getElementById('bottomtext').innerHTML = "Please select a gender";
    }
    else if(skin == "")
    {
        $("#bottomtext").show();
        document.getElementById('bottomtext').innerHTML = "Please pick a skin type";
    }
    else if(country == "")
    {
        $("#bottomtext").show();
        document.getElementById('bottomtext').innerHTML = "Please pick a country";
    }
    else if(word < 5)
    {
        $("#bottomtext").show();
        document.getElementById('bottomtext').innerHTML = "Address must contain more than 5 words";
    }
    else if(!yes)
    {
        $("#bottomtext").show();
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

        alert("Name : " + name + "\n" + "Email : " + email + "\n" +  "Gender : " + final_gender + "\n" + "Skin Type : " + skin + "\n" + "Country : " + country + "\n" +  "Address : " + addr + "\n");

        reset_field(2);
    }
}

// Resets all the field
function reset_field(checker)
{
    $("#bottomtext").hide();
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("userpassword").value = "";
    document.getElementById("confirm_userpassword").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("other").checked = false;
    document.getElementById("skin_type").selectedIndex = "0";
    document.getElementById("countries").selectedIndex = "0";
    document.getElementById("address").value = "";
    document.getElementById("agree").checked = false;
    document.getElementById('bottomtext').innerHTML = "";

    var y = document.getElementById("userpassword");
    y.type = "password";

    // Shows alert when reset button is clicked
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

// Source: https://www.aspsnippets.com/Articles/Email-validation-without-using-Regular-Expression-in-JavaScript.aspx
function email_checker(email) 
{
    //If whether email has @ character.
    if (email.indexOf("@") == -1) 
    {
        return false;
    }

    var parts = email.split("@");
    var dot = parts[1].indexOf(".");
    var len = parts[1].length;
    var dotSplits = parts[1].split(".");
    var dotCount = dotSplits.length - 1;

    //Check whether Dot is present, and that too minimum 1 character after @.
    if (dot == -1 || dot < 2 || dotCount > 2) 
    {
        return false;
    }

    //Check whether Dot is not the last character and dots are not repeated.
    for (var i = 0; i < dotSplits.length; i++) 
    {
        if (dotSplits[i].length == 0) 
        {
            return false;
        }
    }

    return true;
};