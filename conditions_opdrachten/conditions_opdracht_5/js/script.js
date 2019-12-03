//javascript code

var myOperator = "+";
var myNumber1 = prompt("Geef een getal op");
var myNumber2 = prompt("Geef een ander getal op");
var resultaat; 

if (myOperator == "+" ) {

        console.log("De operator is +");
        resultaat = Number(myNumber1) + Number(myNumber2);
        document.getElementById("resultaat").innerHTML = resultaat;
        
    }else if(myOperator == "-" ){
        
        console.log("De operator is -");
        resultaat = Number(myNumber1) - Number(myNumber2);
        document.getElementById("resultaat").innerHTML = resultaat;
}
