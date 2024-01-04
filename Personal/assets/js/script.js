function checksubmit() {
    let checkcondition = true;
    

    //name Validation
    let name = document.querySelector("#name").value;
    if (name == "") {
        document.querySelector(".error-name").innerHTML = "Name field is empty !";
        checkcondition = false;
    }

    let enteredName = /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
    if (!enteredName.test(name)) {
        document.querySelector(".error-name").innerHTML = "Name should be letters !";
        checkcondition = false;
    }

    // email validation
    let email = document.querySelector("#email").value;
    if (email == "") {
        document.querySelector(".error-email").innerHTML = "Email field is empty !";
        checkcondition = false;
    }

    let enteredEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!enteredEmail.test(email)) {
        document.querySelector(".error-email").innerHTML = "Invalid Email !";
        checkcondition = false;
    }

    //subject validation
    let subject = document.querySelector("#subject").value;
    if (subject == "") {
        document.querySelector(".error-sub").innerHTML = "Subject field is important !";
        checkcondition = false;

    }

    // message validation
    let message = document.querySelector("#message").value;
    if (message == "") {
        document.querySelector(".error-msg").innerHTML = "Message field is important !";
        checkcondition = false;
    }

    // validate all
    if (name == "" || email == "" || subject == "" || message == "") {
        document.querySelector(".error").innerHTML = "Please fill all the fields !";
        checkcondition = false;
        return false
    }

    if (checkcondition == true) {
        document.querySelector("#error").innerHTML = "Success !";
        return true

    }
}

 