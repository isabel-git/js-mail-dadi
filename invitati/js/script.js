// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var inputEmail = document.getElementById("email");
var bvai = document.getElementById("vai");

// creazione lista email degli invitati
var invitati = ["max@gmail.com","pippo@gmail.com","john@gmail.com","doe@gmail.com","anonymous@gmail.com"];

// bottone controllo email
bvai.addEventListener("click",
  function() {
    // ciclo per traversare le email
    for (var i = 0; i < invitati.length; i++) {
      invitati[i]
      console.log(invitati[i]);
    }
//
//
//     // condizioni contronto tra email
//     if (dadUt < dadPc) {
//       risultato = " mi dispiace hai perso :(";
//
//     } else if (dadUt > dadPc) {
//       risultato = " congratulazioni hai vinto :D";
//
//     } else {
//       risultato = " hai pareggiato, ritenta";
//     }
//     console.log("risultato utente: ",risultato);
//
//     // OUTPUT
//     document.getElementById("outputDado").innerHTML = nome.value + ": " + dadUt + "<br>" + "pc: " + dadPc;
//     document.getElementById("output").innerHTML = nome.value + "," + risultato;
//
} );
