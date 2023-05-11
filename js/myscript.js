

const userName = (prompt('Inserisci il tuo nome'));

document.getElementById('yourName').innerHTML = userName;

const userSurname = (prompt('Inserisci il tuo cognome'));

document.getElementById('yourSurname').innerHTML = userSurname;

const userFavoriteColor = (prompt('Inserisci il tuo colore preferito'));

document.getElementById('yourFavoriteColor').innerHTML = userFavoriteColor;

const userPassword = userName + userSurname + userFavoriteColor + '21'

document.getElementById('yourPassword').innerHTML = userPassword;