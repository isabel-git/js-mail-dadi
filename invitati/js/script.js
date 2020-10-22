// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var inputEmail = document.getElementById("email");
var bvai = document.getElementById("vai");
var outputEmail = "";
var confronto = "false";
var risultato;

// creazione lista email degli invitati
var invitati = ["max@gmail.com", "pippo@gmail.com", "john@gmail.com", "doe@gmail.com", "anonymous@gmail.com"];

// bottone controllo email
bvai.addEventListener("click",
  function() {
    // ciclo per traversare le email
    for (var i = 0; i < invitati.length; i++) {
      outputEmail = outputEmail + invitati[i];

      // condizioni confronto
      if (inputEmail.value === invitati[i]) {
        confronto = "true";
      }
      console.log(inputEmail.value);
    }

    // condizione risultato
    if ( confronto === "true" ){
      risultato = "benvenuto, sei stato invitato alla festa"

    } else {
      risultato = "mi dispiace, non ci sei stato invitato"
    }
    console.log(risultato);

  // OUTPUT
  document.getElementById("outputMex").innerHTML = risultato;
} );
