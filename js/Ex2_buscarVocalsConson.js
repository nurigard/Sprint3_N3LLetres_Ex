function dadesNom(){

    let meuNom = document.getElementById("teuNomVar").value;
    let meuNomArray = meuNom.split("");
    console.log(meuNomArray);


    var text="";
   
    for (i=0; i<meuNomArray.length; i++){
       text += meuNomArray[i];
    }
    console.log("Partim del nom: " + text);
    document.getElementById("nomInicial").innerHTML= "Partim del nom: " + text;
   
    let missatge ="";
   
   for (i=0; i<meuNomArray.length; i++){
   
       switch (meuNomArray[i]){
           case "A":
           case "E":
           case "I":
           case "O":
           case "U":            
               console.log("He trobat la VOCAL: " + meuNomArray[i]);
               missatge += "He trobat la VOCAL: " + meuNomArray[i] +"<br>";
               break;
           
           case "B":
           case "C":
           case "D":
           case "F":
           case "G":
           case "H":
           case "J":
           case "K":
           case "L":
           case "LL":
           case "M":
           case "N":
           case "P":
           case "Q":
           case "R":
           case "S":
           case "T":
           case "V":
           case "W":
           case "X":
           case "Y":
           case "Z":  
   
               console.log("He trobat la CONSONANT: " + meuNomArray[i]);
               missatge += "He trobat la CONSONANT: " + meuNomArray[i] + "<br>";
               break;

            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                console.log("Els noms de persones no contenen el numero: " + meuNomArray[i]);
                missatge += "Els noms de persones no contenen el numero: " + meuNomArray[i] + "<br>";
       }
       
   }

   document.getElementById("resultat").innerHTML = missatge;
   
   }
   