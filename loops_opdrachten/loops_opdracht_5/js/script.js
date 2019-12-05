 for (var teller = 0; teller <= 20; teller = teller + 1){


    if(teller % 2 == 0){

        
        document.getElementById("resultaat").innerHTML = document.getElementById("resultaat").innerHTML + "<h6>" + teller ;
    }
    
    else{
        
        console.log(teller);   
        
    }
    
    
 }