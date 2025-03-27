// FUNZIONE genSimon
genSimon = () => {
  // ciclo per generare 5 numeri random, assegnarli a simon[] e mostrarli in pagina
  for (let i = 0; i < inputGroup.children.length; i++) {
    // creo un numero da 1 a 50
    let num = parseInt(Math.floor(Math.random() * 50) + 1);
    // lo aggiungo a simon[]
    simon.push(num);
    // creo un <li>
    const li = document.createElement("li");
    // assegno il numero al <li>
    li.append(simon[i]);
    // appendo <li> dentro simonNumbers
    simonNumbers.appendChild(li);
  }
}

// FUNZIONE genUser
genUser = () => {
  // ciclo per inserire il valore di ogni figlio di inputGroup dentro l'array user[]
  for(let i=0; i<inputGroup.children.length; i++){
    let num = parseInt(inputGroup.children[i].value);
    user.push(num)
  }
}

// FUNZIONE checkNumbers
// controllo se i numeri di user[] sono uguali ai numeri di simon[]
checkNumbers = () => {
  let match = false;
  let guessed = 0;
  for(let i=0; i<user.length; i++){
    for( let j=0; j<simon.length; j++){
      if(simon[j] === user[i]){
        guessed += 1;
      }
    }
  }

  return guessed;
}

// FUNZIONE clearFormField
// azzera i valori nei campi della form
clearFormField = () => {
  for(let i=0; i<inputGroup.children.length; i++){
    inputGroup.children[i].value = "";
  }
}