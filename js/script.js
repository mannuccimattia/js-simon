// DEFINIZIONE VARIABILI E/O RECUPERO ELEMENTI DOM
// recupero elementi
const simonNumbers = document.getElementById("numbers-list");
const instructions = document.getElementById("instructions");
const answers = document.getElementById("answers-form");
const inputGroup = document.getElementById("input-group");
const button = document.querySelector("button");
const message = document.getElementById("message")

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

  // nascondo istruzioni, campi input e button
  instructions.classList.add("d-none");
  inputGroup.classList.add("d-none");
  button.classList.add("d-none");
  // chiamo la funzione checkNumbers e assegno il suo risultato una variabile
  let result = checkNumbers();
  let numbers = result.join(" - ");
  console.log(result)
  // stampo il risultato dentro message
  if(result.length === 5){
    message.classList.add("bg-success", "form-control");
    message.classList.replace("text-danger", "text-dark");
    message.innerText = `Hai indovinato tutti i numeri!\n${numbers}`;
  }
  else if(0 < result.length && result.length < 5){
    message.classList.add("bg-warning", "form-control");
    message.classList.replace("text-danger", "text-dark");
    message.innerText = `Hai indovinato ${result.length} numeri!\n${numbers}`;
  }
  else if(result.length === 0){
    message.classList.add("bg-danger", "form-control");
    message.classList.replace("text-danger", "text-dark");
    message.innerText = `Non hai indovinato nessun numero.`
  }
})

