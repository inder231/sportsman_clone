


function myfunction(){
    if(document.querySelector(".tickguest").checked && document.querySelector(".interemail").value.endsWith("@gmail.com")){
        document.querySelector(".step1").setAttribute("id","step1hide")
        document.querySelector(".step2").setAttribute("id","step2content")
    }
    else if(document.querySelector(".tickemail").checked && document.querySelector(".enterpassword").value.replace(/\s/g,"")){
        document.querySelector(".step1").setAttribute("id","step1hide")
        document.querySelector(".step2").setAttribute("id","step2content")
    }
    else{
        alert("Please Enter Valid detail")
    }
}

function myfunction2(){
    
    if((document.querySelector(".name_1").value.replace(/\s/g,""))  && 
    (document.querySelector(".last_1").value.replace(/\s/g,"")) &&
    (document.querySelector(".arrdess_1").value.replace(/\s/g,"")) &&
    (document.querySelector(".landmark_1").value.replace(/\s/g,""))){
        if(document.querySelector(".zipcode_1").value.length==6){
            if(document.querySelector(".selectcountry").value=="India"){
                if(document.querySelector(".selectstate").value=="Maharashtra"){
                    if(document.querySelector(".selectstate").value=="Maharashtra"){
                        if((document.querySelector(".selectcity").value=="bokaro") ||
                        (document.querySelector(".selectcity").value=="Mumbai") ||
                        (document.querySelector(".selectcity").value=="Nagpur") ||
                        (document.querySelector(".selectcity").value=="Pune")){
                            if(document.querySelector(".telephone_1").value.length==2 &&
                            document.querySelector(".numwidth1").value.length>=6){
                                if(document.querySelector(".telephone_2").value.length>=6){
                                    console.log("here") 
                                    saveLocal();   
                                    document.querySelector(".step2").setAttribute("id","step2hide")
                                    document.querySelector(".step3").setAttribute("id","step3content")
                                }
                                else{
                                    alert("Please Enter Valid Number")
                                }
                            }
                            else{
                                alert("Please Enter Valid Number")
                            }
                        }
                        else{
                            alert("Please Select City Name")
                        }
                    }
                    else{
                        alert("Please Select State Name")
                    }
                }
                else{
                    alert("Please Select State Name")
                }
            }
            else{
                alert("Please Select Country Name")
            }
        }
        else{
            alert("Please Enter Valid Pincode")
        }
    }
    else{
        alert("Please Enter Valid detail")
    }
}

function saveLocal(){
    const name = document.getElementsByClassName("name_1")[0].value;
    const lastname = document.getElementsByClassName("last_1")[0].value;
    const address = document.getElementsByClassName("arrdess_1")[0].value;
    const landmark = document.getElementsByClassName("landmark_1")[0].value;
    const zipcode = document.getElementsByClassName("zipcode_1")[0].value;
    const country = document.getElementsByClassName("selectcountry")[0].value;
    const state = document.getElementsByClassName("selectstate")[0].value;
    const city = document.getElementsByClassName("selectcity")[0].value;
    const telephone = document.getElementsByClassName("telephone_1")[0].value;
    const mobile = document.getElementsByClassName("telephone_2")[0].value;
    
    const shippingAdress = {
        name:name,
        lastname:lastname,
        address:address,
        landmark:landmark,
        zipcode:zipcode,
        country:country,
        state:state,
        city:city,
        telephone:telephone,
        mobile:mobile
    }

    // console.log(shippingAdress);
    const tempLocalstorage =  JSON.stringify(shippingAdress);
    localStorage.setItem("shippingAddress",tempLocalstorage);
}


function myfunction3(){
    document.querySelector(".step3").setAttribute("id","step3hide")
    document.querySelector(".step4").setAttribute("id","step4content")
}


function myfunction4(){
    
    window.location.href="./thankyou.html"
   
}