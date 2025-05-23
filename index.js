const venom = require('venom-bot');
const express = require('express');
const app = express();

venom
  .create({
    session: 'bot-session',
    multidevice: true,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--headless=new']
  })
  .then((client) => start(client))
  .catch((error) => {
    console.error('Error al iniciar el bot:', error);
  });

function start(client) {
  client.onMessage((message) => {
    console.log('Mensaje recibido:', message.body);
    if (message.body === 'hola' && !message.isGroupMsg) {
      client.sendText(message.from, 'Hola! Soy tu bot.')
        .then((res) => console.log('Mensaje enviado:', res))
        .catch((err) => console.error('Error al enviar mensaje:', err));
    }
  });
}

// Ruta HTTP para mantener vivo el bot
app.get('/', (req, res) => {
  res.send('Bot activo');
});

// Render usa este puerto
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor escuchando en el puerto', process.env.PORT || 3000);
});

