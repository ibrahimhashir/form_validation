test.addEventListener('click', function(event){
    event.preventDefault()

    let fistname = test['name'].value;
    let lastname = test['lastname'].value;
    let vemail = test['email'].value;
    let vadd = test['address'].value;
    let vphone = test['phone'].value;
    let vdob = test['dob'].value;
    let voccu = test['occu'].value;
    let vpass = test['pass'].value;
    let vcpass = test['cpass'].value;


    let nameErr = "";
    let lastErr = "";
    let emailErr= "";
    let addErr = "";
    let phoneErr = "";
    let dobErr ="";
    let occuErr ="";
    let passErr="";
    let cpassErr="";


    if (fistname == ""){
       nameErr = "first Name space can't be empty"
    }

       if(lastname == ""){
        lastErr = "last Name can't be empty"

    }

    if (vemail ==""){
        emailErr = "email must not be empty"
    }

    if (vadd == ""){
        addErr = "Address space must not Empty"
    }

    if (vphone == ""){
        phoneErr = "Phone is compulsory"
    }

    else if(vphone.length < 11){
        phoneErr = "Phone Number Must not More Than 11 Digits"
    }

    if (vdob ==""){
        dobErr = "please check your Date of birth."
    }

    if (voccu == ""){
        occuErr = "Invalid Details"
    }

    if (vpass == ""){
        passErr = "please use stronge password."
    }

    if(vcpass== ""){
        cpassErr= "please fill this form"
    }

    else if(vpass != vcpass){
        cpassErr="password doesnot match, please use same password."
    }

    if (nameErr == false && lastErr == false && emailErr == false && addErr == false && phoneErr ==false && dobErr==false && occuErr==false && passErr==false && cpassErr==false){
        document.getElementById('realname').value=fistname;
        document.getElementById('lastname').value=lastname;
        document.getElementById('emailid').value=vemail;
        document.getElementById('addid').value=vadd;
        document.getElementById('phoneid').value=vphone;
        document.getElementById('dobid').value=vdob;
        document.getElementById('occuid').value=voccu;
        document.getElementById('passid').value=vpass;
        document.getElementById('cpassid').value=vcpass;
    }


    else{
        document.getElementById('nameErr').innerHTML=nameErr;
        document.getElementById('lastErr').innerHTML=lastErr;
        document.getElementById('emailErr').innerHTML=emailErr
        document.getElementById('addErr').innerHTML =addErr;
        document.getElementById('phoneErr').innerHTML=phoneErr;
        document.getElementById('dobErr').innerHTML=dobErr;
        document.getElementById('occuErr').innerHTML=occuErr;
        document.getElementById('passErr').innerHTML=passErr;
        document.getElementById('cpassErr').innerHTML=cpassErr;

    }

})