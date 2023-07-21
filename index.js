const express = require('express');
const bodyParser = require('body-parser');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const app = express();
const client = new Discord.Client();

// Middleware do obsługi danych z formularzy
app.use(bodyParser.urlencoded({ extended: false }));

// Strona główna aplikacji
app.get('/', (req, res) => {
  res.send('Witaj na stronie zarządzania botem Discord!');
});

// Dodaj nową komendę
app.post('/add-command', (req, res) => {
  const commandName = req.body.command;
  // Tutaj możesz dodać kod do zapisu nowej komendy do bazy danych lub innego miejsca, w którym przechowujesz komendy dla bota.
  res.send(`Dodano komendę ${commandName}`);
});

// Zmiana ustawień bota
app.post('/settings', (req, res) => {
  const newPrefix = req.body.prefix;
  // Tutaj możesz dodać kod do zapisu nowego prefixu dla bota w bazie danych lub innym miejscu, w którym przechowujesz ustawienia.
  res.send(`Zmieniono prefix na ${newPrefix}`);
});

// Logowanie bota do Discorda
client.login(token).catch(error => console.error(error));

// Inicjalizacja aplikacji na porcie 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Aplikacja działa na http://localhost:${port}`);
});
