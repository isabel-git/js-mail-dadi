// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var bstart = document.getElementById("start");
var nome = document.getElementById("username");
var dadUt;
var dadPc;
var risultato;

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
      risultato = "hai perso";

    } else if (dadUt > dadPc) {
      risultato = "hai vinto";

    } else {
      risultato = "pareggio";
    }
    console.log("risultato utente ",risultato);

    // OUTPUT


} );
