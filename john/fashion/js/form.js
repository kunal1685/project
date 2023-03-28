function validation(){
    var user = document.getElementById("user").value;

    var mail = document.getElementById("mail").value;

    var sub = document.getElementById("sub").value;


    if(user == ""){
        document.getElementById("username").innerHTML = "Username is Required";

        return false;
    }
    if(mail == ""){
        document.getElementById("email").innerHTML = "Username is Required";

        return false;
    }
    if(sub == ""){
        document.getElementById("subject").innerHTML = "Username is Required";

        return false;
    }
}