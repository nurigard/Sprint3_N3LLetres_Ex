function mapLletres() {  

    let meuNom = [];
    meuNom = ["N", "U", "R", "I", "A"];


    const nombreLletra = new Map();

    nombreLletra.set("N", 1);
    nombreLletra.set("U", 1);
    nombreLletra.set("R", 1);  
    nombreLletra.set("I", 1);
    nombreLletra.set("A", 1);

   console.log(nombreLletra);


   //Converteixo el Map "nombreLLetra" en un Object
    const object = Object.fromEntries(nombreLletra);

    console.log(object);

    //El output es [object, Object]
    //document.getElementById("objecteMapa").innerHTML = object;

    //per veure el contingut de l'objecte
    document.getElementById("objecteMapa").innerHTML = JSON.stringify(object);

}