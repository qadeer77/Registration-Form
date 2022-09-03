let arr = [];
submit = () => {
    // full name 
    let fullName = document.getElementById("fullName");
    let span = document.getElementById("span");
    let fullNameRegix = /^\s*$/.test(fullName.value);

    // father Name
    let fatherName = document.getElementById("fatherName");
    let span1 = document.getElementById("span1");
    let fatherNameRegix = /^\s*$/.test(fatherName.value);

    // email
    let email = document.getElementById("email");
    let span2 = document.getElementById("span2");
    let emailRegix = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(email.value);

    // phone
    let phone = document.getElementById("phone");
    let span3 = document.getElementById("span3");
    let phoneRegex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(phone.value);

    // CNIC
    let cnic = document.getElementById("cnic");
    let span4 = document.getElementById("span4");
    let cnciRegex = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(cnic.value);


    // date 
    let date = document.getElementById("date");
    let span5 = document.getElementById("span5");

    // Address
    let address = document.getElementById("address");
    let span6 = document.getElementById("span6");
    let addressRegex = /^\s*$/.test(address.value);

    arr.push({
        Name: fullName.value,
        Fathername: fatherName.value,
        Email: email.value,
        Phone: phone.value,
        CNIC: cnic.value,
        Dateofbirth: date.value,
        Address: address.value
    });
    localStorage.setItem("Students", JSON.stringify(arr));

    // full name 
    if (fullNameRegix === true) {
        fullName.style.border = "2px solid red";
        span.innerHTML = "Name must be filled out";
    }

    // father Name
    else if (fatherNameRegix === true) {
        fatherName.style.border = "2px solid red";
        span1.innerHTML = "Father name must be filled out";
    }

    // email
    else if (emailRegix === false) {
        email.style.border = "2px solid red";
        span2.innerHTML = "Please valid Email address"
    }

    // phone
    else if (phoneRegex === false) {
        phone.style.border = "2px solid red";
        span3.innerHTML = "Please Correct Phone Number"
    }

    // CNIC
    else if (cnciRegex === false) {
        cnic.style.border = "2px solid red";
        span4.innerHTML = "Please valid CNIC number"
    }

    // date 
    else if (date.value.length === 0) {
        date.style.border = "2px solid red";
        span5.innerHTML = "Date must be Filled Out"
    }

    // Address
    else if (addressRegex === true) {
        address.style.border = "2px solid red";
        span6.innerHTML = "Address must be filled out"
    }

    else if (fullNameRegix === false && fatherNameRegix === false && emailRegix === true && phoneRegex === true && cnciRegex === true && date.value.length > 0 && addressRegex === false) {
        window.location.href = "./submit.html";
    }


    fullName.value = " ";
    fatherName.value = " ";
    email.value = " ";
    phone.value = " ";
    cnic.value = " ";
    date.value = "";
    address.value = " ";
}


login = () => {
    // userName
    let userName = document.getElementById("userName");
    let span10 = document.getElementById("span10");
    let userNameRegix = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(userName.value);

    // Password
    let password = document.getElementById("password");
    let span11 = document.getElementById("span11");
    let passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(password.value);
    // console.log(passwordRegex);

    // userName
    if (userNameRegix === false) {
        // userName.style.border = "2px solid red";
        span10.innerHTML = "Please valid Email address"
    }

    // password
    else if (passwordRegex === false) {
        span11.innerHTML = "Password Should have must be 8 letter"
    }

    else if (userNameRegix === true && passwordRegex === true) {
        window.location.href = "./local.html"
    }


    userName.value = "";
    password.value = "";
}


// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function () {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({ 'padding-right': scrollWidth });
}).resize();