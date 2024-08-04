function check(){
    var score=0;
    if(document.getElementById('one-op2').checked==true){
        document.getElementById("result1").innerHTML="Correct Answer";
        document.getElementById("result1").style.color="green";
        score++;
    }
    else{
        document.getElementById("result1").innerHTML="Wrong answer <br> Correct Answer is Abinav Mithra";
        document.getElementById("result1").style.color="rgb(200, 45, 45)";
    } 

    if(document.getElementById('two-op4').checked==true){
        document.getElementById("result2").innerHTML="Correct Answer";
        document.getElementById("result2").style.color="green";
        score++;
    }
    else{
        document.getElementById("result2").innerHTML="Wrong answer <br> Correct Answer is Tokyo";
        document.getElementById("result2").style.color="rgb(200, 45, 45)";
    } 

    if(document.getElementById('three-op1').checked==true){
        document.getElementById("result3").innerHTML="Correct Answer";
        document.getElementById("result3").style.color="green";
        score++;
    }
    else{
        document.getElementById("result3").innerHTML="Wrong answer <br> Correct Answer is Hockey";
        document.getElementById("result3").style.color="rgb(200, 45, 45)";
    } 

    if(document.getElementById('four-op4').checked==true){
        document.getElementById("result4").innerHTML="Correct Answer";
        document.getElementById("result4").style.color="green";
        score++;
    }
    else{
        document.getElementById("result4").innerHTML="Wrong answer <br> Correct Answer is Manu Baker";
        document.getElementById("result4").style.color="rgb(200, 45, 45)";
    }

    if(document.getElementById('five-op2').checked==true){
        document.getElementById("result5").innerHTML="Correct Answer";
        document.getElementById("result5").style.color="green";
        score++;
    }
    else{
        document.getElementById("result5").innerHTML="Wrong answer <br> Correct Answer is Javelin Throw";
        document.getElementById("result5").style.color="rgb(200, 45, 45)";
    } 

    if(document.getElementById('six-op1').checked==true){
        document.getElementById("result6").innerHTML="Correct Answer";
        document.getElementById("result6").style.color="green";
        score++;
    }
    else{
        document.getElementById("result6").innerHTML="Wrong answer <br> Correct Answer is The Five Continents";
        document.getElementById("result6").style.color="rgb(200, 45, 45)";
    }

    if(document.getElementById('seven-op3').checked==true){
        document.getElementById("result7").innerHTML="Correct Answer";
        document.getElementById("result7").style.color="green";
        score++;
    }
    else{
        document.getElementById("result7").innerHTML="Wrong answer <br> Correct Answer is Greece";
        document.getElementById("result7").style.color="rgb(200, 45, 45)";
    }

    if(document.getElementById('eight-op1').checked==true){
        document.getElementById("result8").innerHTML="Correct Answer";
        document.getElementById("result8").style.color="green";
        score++;
    }
    else{
        document.getElementById("result8").innerHTML="Wrong answer <br> Correct Answer is Red, Yellow, Blue, Green, Black";
        document.getElementById("result8").style.color="rgb(200, 45, 45)";
    } 

    if(document.getElementById('nine-op3').checked==true){
        document.getElementById("result9").innerHTML="Correct Answer";
        document.getElementById("result9").style.color="green";
        score++;
    }
    else{
        document.getElementById("result9").innerHTML="Wrong answer <br> Correct Answer is Brisbane";
        document.getElementById("result9").style.color="rgb(200, 45, 45)";
    }

    if(document.getElementById('ten-op2').checked==true){
        document.getElementById("result10").innerHTML="Correct Answer";
        document.getElementById("result10").style.color="green";
        score++;
    }
    else{
        document.getElementById("result10").innerHTML="Wrong answer <br> Correct Answer is PV Sindhu";
        document.getElementById("result10").style.color="rgb(200, 45, 45)";
    }

    document.getElementById("quiz-score").innerHTML=score;
}