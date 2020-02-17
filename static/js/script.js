
function getAkanName(){
    //VARIABLES 
    //FULLNAME = VALUE FROM NAME INPUT
    //DATE = VALUE FROM DATE INPUT -- WEEKDAY(NUMERIC) 0-6 SUN-SAT
    //DAYSCREEN = SPAN WHERE PROCESSED AKAN NAME WILL BE PLACED
    //SCREENDAY = SPAN WHERE PROCESSED WEEK DAY WILL BE PLACED 

const date = new Date(document.getElementById("date").value).getDay();
var fullName = document.getElementById("name").value;
const gender = document.getElementById("gender").checked;
var screenName = document.getElementById("screenName");
var screenDay = document.getElementById("screenDay");
    //alert(name);
//alert(date);

//Fetch WeekDay Name
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"][date];
//alert(day);

    if(fullName && date && gender !== null){
    //alert(gender);
    if(gender == true){
        //alert(date);
            //male
            var akanNames = ["Kwasi","Kwadwo", "kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
            var name = akanNames[date];
        }  
        else if (gender == false){
        //female
            var akanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
            var name = akanNames[date];
        }
        //
        //alert(name);
        screenName.innerHTML += name ;
        screenDay.innerHTML += day;
    }
    else { //IF REQUIRED INPUTS WERE LEFT BLANK
        var fullName = (" " + fullName + ", ");
        alert("Hello" + fullName + "We encountered an error processing your request. Try filling all the required fields!");
    }
}



//=============== TIME/DIGITAL CLOCK ================
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }