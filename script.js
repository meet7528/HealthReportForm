function checker(){
    let fsn = document.getElementById("fn");
    let lsn = document.getElementById("ln");
    let age = document.getElementById("age");
    let wgt = document.getElementById("wgt");
    let email = document.getElementById("email");
    let file = document.getElementById("file");
    if(fsn.value==""){
        alert("Please enter a valid First Name");
        return false;
    }
    if(lsn.value ==""){
        alert("Please enter a valid Last Name");
        return false;
    }
    if(age.value == ""){
        alert("Please enter Age correctly (digits only)");
        return false;
    }
    if(wgt.value== ""){
        alert("Please enter Weight correctly (digits only)");
        return false;
    }
    if(email.value== ""){
        alert("Please enter your Email Id");
        return false;
    }
    if(file.value== ""){
        alert("Please Upload Health Report");
        return false;
    }
    return true;
}