// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var bstart = document.getElementById("start");
var nome = document.getElementById("username");
var dadUt;
var dadPc;
var risultato = "hai visnto";
console.log("risultato utente ",risultato);;

// bottone per lanciare i dadi
bstart.addEventListener("click",
  function() {
    // creazione numeri random utente
    dadUt = Math.floor(Math.random() * 6) + 1;
    console.log("utente ",dadUt);

    // creazione numeri random PC
    dadPc = Math.floor(Math.random() * 6) + 1;
    console.log("pc ",dadPc);

    // condizioni vincita
    if (dadUt < dadPc) {
      risultato = " mi dispiace hai perso :(";

    } else if (dadUt > dadPc) {
      risultato = " congratulazioni hai vinto :D";

    } else {
      risultato = " hai pareggiato, ritenta";
    }
    console.log("risultato utente ",risultato);

    // OUTPUT
    document.getElementById("outputDado").innerHTML = nome.value + ": " + dadUt + "<br>" + "pc: " + dadPc;
    document.getElementById("output").innerHTML = nome.value + "," + risultato;

} );
