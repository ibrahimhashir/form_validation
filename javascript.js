validate.addEventListener('click', function(pass){
    pass.preventDefault()

    let fname = validate['fname'].value;
    let lname = validate['lname'].value;
    let email = validate['email'].value;
    let phone = validate['phone'].value;
    let address = validate['address'].value;
    let dob = validate['dob'].value;
    let occu = validate['occu'].value;
    let pass = validate['pass'].value;
    let cpass = validate['cpass'].value;

    let fn = "";
    let ln = "";
    let em = "";
    let ph = "";
    let add = "";
    let dod = "";
    let occ = "";
    let pas = "";
    let cpas = ""


    if(fname == ""){
        fn = "please input your name!!!"
    }

    if(lname == ""){
        ln = "please input correct last name"
    }

    if (email == ""){
        em = "please use valid email"
    }

    else if (email.length <5 ){
        em = "email must be greater than 5"
    }

    if (phone == ""){
        ph = "phone number must not be empty"
    }

    else if (phone.length < 11){
        ph = "opps invalid phone number, phone number must more than 11 digit"
    }

    if(address == ""){
        add = "please put your address"
    }

    if (dob == ""){
        dod = "date of birth is compulsory"
    }

    if(occu == ""){
        occ = "opps occupation is compulsory"
    }

    if(pass == ""){
        pas = "password does not macth!"
    }


    if (fn == false && ln == false && em == false && ph == false && add == false && dod== false && occ == false && pas == false){
        document.getElementById('name1').innerHTML=fname;
        document.getElementById('name2').innerHTML=lname;
        document.getElementById('name3').innerHTML=email;
        document.getElementById('name4').innerHTML=phone;
        document.getElementById('name5').innerHTML=address;
        document.getElementById('name6').innerHTML=dob;
        document.getElementById('name7').innerHTML=occu;
        document.getElementById('name8').innerHTML=pass;
        document.getElementById('name').innerHTML=cpass;


    }

    else{
        document.getElementById('fn').innerHTML=fn;
        document.getElementById('ln').innerHTML=ln;
        document.getElementById('em').innerHTML=em;
        document.getElementById('ph').innerHTML=ph;
        document.getElementById('add').innerHTML=add;
        document.getElementById('dod').innerHTML=dod;
        document.getElementById('occ').innerHTML=occ;
        document.getElementById('pas').innerHTML=pas;
        document.getElementById('cpas').innerHTML=cpas;
    
        
    }
  



    

})