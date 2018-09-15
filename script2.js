var scores = document.getElementById(school_score1);
scores.addEventListener("click", addScores);

function addScores()
{
    var home_score = 100;
    var away_score = 100;
    var home_abbrv = "SUH";
    var away_abbrv = "OHS";

    document.getElementById(school_score1).innerHTML= home_abbrv + ": "+home_score;
    document.getElementById(school_score1).innerHTML= away_abbrv + ": "+away_score;

}