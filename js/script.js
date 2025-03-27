// DEFINIZIONE VARIABILI E/O RECUPERO ELEMENTI DOM
// recupero elementi
const countdown = document.getElementById("countdown")
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

// FUNZIONI
// funzione genSimon: 
// genera un numero da 1 a 50
genSimon = () => {
  return parseInt(Math.floor(Math.random() * 50) + 1);
}

// funzione countToZero: 
// avvia un timer di N secondi e lo mostra in pagina
countToZero = (seconds) => {
  countdown.innerText = seconds--;
  const interval = setInterval(() => {
    if (seconds != 0) {
      countdown.innerText = seconds;
    }
    else {
      clearInterval(interval);
      countdown.innerText = 0;
    }
    seconds--;
  }, 1000);
}

// funzione clearFormField:
// azzera i valori nei campi della form
clearFormField = () => {
  for (let i = 0; i < inputGroup.children.length; i++) {
    inputGroup.children[i].value = "";
  }
}

// funzione checkNumbers:
// controlla se i numeri di user[] sono uguali ai numeri di simon[], se lo sono aggiunge quali e quanti numeri in un array
checkNumbers = () => {
  let numbers = [];
  for (let i = 0; i < simon.length; i++) {
    for (let j = 0; j < user.length; j++) {
      if (user[j] === simon[i]) {
        numbers.push(user[j]);
      }
    }
  }
  return numbers
}


// CORPO DEL PROGRAMMA

// chiamo genSimon 5 volte
for (i = 0; i < 5; i++) {
  // inserisco ogni risultato dentro un array
  simon.push(genSimon());
  // per ogni risultato
  for (let j = 0; j < i; j++) {
    // se è uguale ad un numero già generato
    if (simon[i] == simon[j]) {
      // rimuovo il numero dall'array e interrompo if
      simon.splice(i, 1);
      i--;
      break;
    }
  }
  // inserisco i numeri generati dentro la lista html
  simonNumbers.innerHTML += `<li>${simon[i]}</li>`
}
// stampa di controllo simon
console.log(simon);

// avvio un timer di 30 secondi.
countToZero(30);
// allo scadere
setTimeout(function () {
  // nascondo i numeri di simon
  simonNumbers.classList.add("d-none");
  // cambio il testo delle istruzioni
  instructions.innerText = "Inserisci i numeri mostrati (l'ordine non importa)."
  // mostro i campi della form
  answers.classList.remove("d-none");
}, 30000);

// al click del bottone 
button.addEventListener("click", function (event) {
  event.preventDefault();
  // ciclo per inserire il valore di ogni figlio di inputGroup dentro l'array user[]
  for (let i = 0; i < 5; i++) {
    let num = parseInt(inputGroup.children[i].value);
    user.push(num);
    // controllo che i valori siano numeri, altrimenti stampo un errore
    if (user[i] == "" || isNaN(user[i])) {
      message.innerText = "Inserisci solo numeri!"
      // azzero i campi dei valori inseriti
      clearFormField();
      //nascondo tutto tranne il messaggio di errore
      countdown.classList.add("d-none");
      instructions.classList.add("d-none");
      inputGroup.classList.add("d-none");
      button.classList.add("d-none");
      return;
    }
    // controllo che i numeri siano diversi tra loro
    for(let j=0; j<i; j++){
      if(user[i] === user[j]){
      message.innerText = "Inserisci numeri diversi tra loro!"
      // azzero i campi dei valori inseriti
      clearFormField();
      //nascondo tutto tranne il messaggio di errore
      countdown.classList.add("d-none");
      instructions.classList.add("d-none");
      inputGroup.classList.add("d-none");
      button.classList.add("d-none");
      return;
      }
    }
  }
  // stampa di controllo user
  console.log(user);
  // nascondo istruzioni, campi input e button
  countdown.classList.add("d-none");
  instructions.classList.add("d-none");
  inputGroup.classList.add("d-none");
  button.classList.add("d-none");
  // chiamo la funzione checkNumbers e assegno il suo risultato una variabile
  let result = checkNumbers();
  let numbers = result.join(" - ");
  // stampo il risultato dentro message
  if (result.length === 5) {
    message.classList.add("bg-success", "form-control");
    message.classList.replace("text-danger", "text-dark");
    message.innerText = `Hai indovinato tutti i numeri!\n${numbers}`;
  }
  else if (0 < result.length && result.length < 5) {
    message.classList.add("bg-warning", "form-control");
    message.classList.replace("text-danger", "text-dark");
    message.innerText = `Hai indovinato ${result.length} numeri!\n${numbers}`;
  }
  else if (result.length === 0) {
    message.classList.add("bg-danger", "form-control");
    message.classList.replace("text-danger", "text-dark");
    message.innerText = `Non hai indovinato nessun numero.`
  }
  clearFormField();
});