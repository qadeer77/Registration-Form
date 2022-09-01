submit = () => {
    // full name 
    let fullName = document.getElementById("fullName");
    let span = document.getElementById("span");
    let fullNameRegix = /^\s*$/.test(fullName.value);
    if (fullNameRegix === true) {
        fullName.style.border = "2px solid red";
        span.innerHTML = "Name must be filled out";
    }
    let submit = fullName.value;
    console.log(submit)
    fullName.value = " ";

    // father Name
    let fatherName = document.getElementById("fatherName");
    let span1 = document.getElementById("span1");
    let fatherNameRegix = /^\s*$/.test(fatherName.value);
    if (fatherNameRegix === true) {
        fatherName.style.border = "2px solid red";
        span1.innerHTML = "Father name must be filled out";
    }
    let submit1 = fatherName.value;
    console.log(submit1)
    fatherName.value = " ";

    // email
    let email = document.getElementById("email");
    let span2 = document.getElementById("span2");
    let emailRegix = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(email.value);
    if (emailRegix === false) {
        email.style.border = "2px solid red";
        span2.innerHTML = "Please valid Email address"
    }
    let submit2 = email.value;
    console.log(submit2);
    email.value = " ";

    // phone
    let phone = document.getElementById("phone");
    let span3 = document.getElementById("span3");
    let phoneRegex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(phone.value);
    if (phoneRegex === false) {
        phone.style.border = "2px solid red";
        span3.innerHTML = "Please Correct Phone Number"
    }
    let submit3 = phone.value;
    console.log(submit3);
    phone.value = " ";

    // CNIC
    let cnic = document.getElementById("cnic");
    let span4 = document.getElementById("span4");
    let cnciRegex = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(cnic.value);
    if (cnciRegex === false) {
        cnic.style.border = "2px solid red";
        span4.innerHTML = "Please valid CNIC number"
    }
    let submit4 = cnic.value;
    console.log(submit4);
    cnic.value = " ";

    // date 
    let date = document.getElementById("date");
    let span5 = document.getElementById("span5");
    if (date.value.length === 0) {
        date.style.border = "2px solid red";
        span5.innerHTML = "Date must be Filled Out"
    }
    let submit5 = date.value;
    console.log(submit5);
    date.value = "";

    // Address
    let address = document.getElementById("address");
    let span6 = document.getElementById("span6");
    let addressRegex = /^\s*$/.test(address.value);
    if (addressRegex === true) {
        address.style.border = "2px solid red";
        span6.innerHTML = "Address must be filled out"
    }
    let submit6 = address.value;
    console.log(submit6);
    submit6.value = " ";
}
