// Infos Utente
var nomeUtente = prompt('Come ti chiami?');
console.log(nomeUtente);

var cognomeUtente = prompt('Qual è il tuo cognome?');
console.log(cognomeUtente);

var coloreUtente = prompt('Qual è il tuo colore preferito?');
console.log(coloreUtente);

// Generatore Password
var passwordUtente = nomeUtente + cognomeUtente + coloreUtente + 19;
console.log(passwordUtente);

// Visualizzazione Password sulla pagina
document.getElementById('password').innerHTML = 'La tua password è ' + passwordUtente;
