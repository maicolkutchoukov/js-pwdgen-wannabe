const nome = prompt ('Inserisci il tuo nome:');
console.log(nome);
const cognome = prompt('Inserisci il tuo Cognome:');
const colorePreferito = prompt('Inserisci il tuo colore preferito:');
let risultato = `
Nome : ${nome}
Cognome: ${cognome}
Colore preferito : ${colorePreferito}
`
console.log(risultato)
document.writeln(risultato);
const risultato1 = (nome + cognome + colorePreferito + '114');
console.log(risultato1)
document.getElementById('esercizio').innerHTML = risultato1;

