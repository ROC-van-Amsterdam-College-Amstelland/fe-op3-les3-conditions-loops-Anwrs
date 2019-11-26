//javascript code
function checkSaldo() {


var geldOpname = document.getElementById("textveld").value;

var bankSaldo = 1000;
var restSaldo = 1000 - geldOpname;

if (restSaldo >= 25) {
    alert("Je hebt voldoende saldo om dit bedrag op te nemen.")

}

if (restSaldo < 25) {
    alert("Sorry, je hebt te weinig saldo!");
}

}