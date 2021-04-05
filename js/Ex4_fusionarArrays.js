function fusionarArrays(){

    let meuNom = document.getElementById("teuName").value;
    let meuNomArray = meuNom.split("");

    let meuCognom = document.getElementById("teuCognom").value;
    let meuCognomArray = meuCognom.split("");


    let fullName=[];
    let i=0;
    let j=0;
    let z=0;

    let fullNameLenght = meuNomArray.length + meuCognomArray.length;

    do {

        for(i=0; i<meuNomArray.length; i++){
            fullName[z] = meuNomArray[i];
            z++;
        }

        fullName[z]="";
        z++;

        for(j=0; j<meuCognomArray.length; j++){
            fullName[z]=meuCognomArray[j];
            z++;
        }
    }

    while (z<fullNameLenght+1); 
        
    console.log(fullName);

    document.getElementById("fusioNoms").innerHTML = JSON.stringify(fullName);
}
