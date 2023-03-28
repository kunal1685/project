$("button").click( function(){

    $("ul").slideToggle();
});


function validation(){
    var user = document.getElementById("user").value;

    var pass = document.getElementById("pass").value;

    var sub = document.getElementById("sub").value;

    if(user == ""){
        document.getElementById("username").innerHTML = " UserName is Required";

        return false;
    }

    if(pass == ""){
        document.getElementById("password").innerHTML = "Password is Required";

        return false;
    }

    if(sub == ""){
        document.getElementById("subject").innerHTML = "Subject is Required";

        return false;
    }

    else{
        document.write("Congratulation Form Submitted");
    }
}