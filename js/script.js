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
  
  // chiamo la funzione checkNumbers e assegno il risultato a guessedNumbers
  guessedNumbers += checkNumbers();
  console.log(guessedNumbers);

  // chiamo la funzione clearFormField
  clearFormField();

  // sostituisco il bottone conferma con un messaggio contentente il numero di parole ricordate
  instructions.classLista.add("d-none");
  inputGroup.classList.add("d-none");
  button.innerText = `Hai ricordato ${guessedNumbers} numeri!`;
  button.outerHTML = `<p class="text-center py-2 fs-1">${button.innerText}</p>`;
})

