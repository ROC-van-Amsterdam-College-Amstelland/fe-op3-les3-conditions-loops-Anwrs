
for(var teller = 1; teller <= 100; teller++){

if(teller % 3 == 0){

    document.getElementById("resultaat").innerHTML += "<div>VET COOL</div><br>";
    
}

else if(teller % 3 == 0) {
    
    document.getElementById("resultaat").innerHTML += "<div>VET</div><br>";

}

else if(teller % 5 == 0) {
    
    document.getElementById("resultaat").innerHTML += "<div>COOL</div><br>";

}

else {
    
    document.getElementById("resultaat").innerHTML += teller +  "<br>";

}



}