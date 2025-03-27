// FUNZIONE genSimon
genSimon = () => {
  // ciclo per generare 5 numeri random, assegnarli a simon[] e mostrarli in pagina
  for (let i = 0; i < 5; i++) {
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
  for(let i=0; i<5; i++){
    let num = inputGroup.children[i].value;
    user.push(num)
  }
}

