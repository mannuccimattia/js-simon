// DEFINIZIONE VARIABILI E/O RECUPERO ELEMENTI DOM
// recupero elementi
const simonNumbers = document.getElementById("numbers-list");
const instructions = document.getElementById("instructions");
const answers = document.getElementById("answers-form");


// variabili
const simon = [];

// CORPO DEL PROGRAMMA
// chiamo la funzione genSimon per generare  5 numeri da 1 a 50
genSimon();
console.log(simon);

// avvio un timer di 30 secondi.
setTimeout(function(){
  // allo scadere nascondo i numeri generati e cambio le istruzioni
  simonNumbers.classList.add("d-none");
  instructions.innerText = "Inserisci i numeri mostrati (l'ordine non importa)."
  // e mostro la form
  answers.classList.remove("d-none");

}, 30000);