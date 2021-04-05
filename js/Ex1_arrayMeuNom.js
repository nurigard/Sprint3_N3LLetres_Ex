function lletresNom (){

    let meuNom = document.getElementById("teuNom").value;
    
    let MeuNomArray = meuNom.split("");

    console.log(MeuNomArray);


    let text="";

    for (let lletra of meuNom){
        
        text += lletra +"<br>";

        console.log(lletra);
    }

    document.getElementById("Nom").innerHTML = text;

}