
    var person = {
        firstName: "Jack",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
           return this.firstName + " " + this.lastName;
        }
    };
 
 function schoolPageLoad()
 {
    var home_school = "Otay Ranch";
    var away_school  = "Sweetwater";
    var updateMatchStatus = "Current Match: " ;
    var home_score = 100;
    var away_score = 100;
    var home_abbrv = "";
    var away_abbrv = "";
    var match_started = false;
    
    document.body.style.backgroundColor = color;
    document.body.style.fontFamily = "Arial" ;
      
    if(match_started)
    {
        updateMatchStatus = "Match in Progress: ";
        home_abbrv = "SUH";
        away_abbrv = "OHS";
        document.getElementById("school_score1").innerHTML= home_abbrv + " "+home_score;
        document.getElementById("school_score2").innerHTML= away_abbrv + " "+away_score;
    }
   
    document.getElementById("matchTitle").innerHTML = away_school + " at " + home_school;
    document.getElementById("matchStatus").innerHTML = updateMatchStatus;

 }



 






