

function genderExec(gend){
    //alert(gender);
    var dateInput = document.getElementById("date").value;
    var disp = document.getElementById("disp");
    var gender = document.getElementById("gender").checked;
    alert(gender);
    var username = document.getElementById("name").value;
var date = new Date(dateInput).getDay();
    if(gender == "true"){
        akanNames = ["Kwasi","Kwadwo", "kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        name = akanNames[date];
        
    }else if(gender == "false"){
        akanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        name = akanNames[date];
    }
    else {
        name="";
    }
        disp.innerHTML="Hello " + username + ", Your Akai Name is " + name;
}
function getAkanName(){
    //alert("clicked");
    document.getElementById("akaiInfo").style.display="block";
}
