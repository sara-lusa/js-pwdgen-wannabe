// Infos Utente
var nomeUtente = prompt('Come ti chiami?');

var cognomeUtente = prompt('Qual è il tuo cognome?');

var coloreUtente = prompt('Qual è il tuo colore preferito?');

// Generatore Password
var passwordUtente = nomeUtente + cognomeUtente + coloreUtente + 19;

// Visualizzazione Password sulla pagina
document.getElementById('password').innerHTML = passwordUtente;
