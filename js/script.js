// DEFINIZIONE VARIABILI E/O RECUPERO ELEMENTI DOM
// recupero elementi
const simonNumbers = document.getElementById("numbers-list");
const instructions = document.getElementById("instructions");
const answers = document.getElementById("answers-form");
const inputGroup = document.getElementById("input-group");
const button = document.querySelector("button");

// variabili
const simon = [];
const user = [];
let guessedNumbers = 0;

// CORPO DEL PROGRAMMA
// chiamo la funzione genSimon per generare  5 numeri da 1 a 50
genSimon();
console.log(simon)

// avvio un timer di 30 secondi.
setTimeout(function(){
  // allo scadere nascondo i numeri generati e cambio le istruzioni
  simonNumbers.classList.add("d-none");
  instructions.innerText = "Inserisci i numeri mostrati (l'ordine non importa)."
  // e mostro la form
  answers.classList.remove("d-none");

}, 3000);

// al click del bottone 
button.addEventListener("click", function(event){
  event.preventDefault();
  // eseguo la funzione genUser
  genUser();
  console.log(user)

  // chiamo la funzione clearFormField
  clearFormField();

  // nascondo istruzioni e campi input
  instructions.classList.add("d-none");
  inputGroup.classList.add("d-none");
  // chiamo la funzione checkNumbers e assegno il suo risultato una variabile temporanea
  let temp = checkNumbers();
  button.innerText = `Hai indovinato ${temp[0]} numero/i. ${temp[1]}`;
  // cambio button in un <p>
  button.outerHTML = `<p class="text-center py-2 fs-1">${button.innerText}</p>`;
})

