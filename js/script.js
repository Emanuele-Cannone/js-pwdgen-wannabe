//creare un generatire di password 
//con 'nomecognomecolorepreferitonumero'

//dichiara le variabili che userai
var nome, cognome, colorePreferito, numero;

//inserisci il valore alle variabili
nome = prompt('Inserisci il tuo nome');
cognome = prompt('Inserisci il tuo cognome');
colorePreferito = prompt('Inserisci il tuo colore preferito');
numero = 19; 




//Esempio1


////dichiara la costruzione della password

//generata = nome + cognome + colorePreferito + numero;


////inserisci la password nell' Id selezionato

//document.getElementById('generata').innerHTML = generata;






//Esempio2


//dichiara la costruzione della password utilizzando una variabile che non serve più

nome += cognome + colorePreferito + numero;

//inserisci la password nell' Id selezionato

document.getElementById('generata').innerHTML = nome;






//Esempio3


