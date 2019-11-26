//javascript code

function checkSaldo() {


    var geldOpname = document.getElementById("textveld").value;
    
    var bankSaldo = 1000;
    var restSaldo = 1000 - geldOpname;
    
    
    if (restSaldo == 500) {
        alert("Er is een bedrag op de bank gestort.")
    
    }
    
    if (restSaldo > 500) {
        alert("Er is een bedrag en een bonus op de bank gestort.");
    }

    if (restSaldo < 500) {
        alert("Er is geen bedrag gestort.")
    }
    
    }