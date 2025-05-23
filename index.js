const venom = require('venom-bot');

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
    console.log('Mensaje recibido:', message.body); // Agregado para ver si recibe mensajes

    if (message.body === 'hola' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Hola! Soy tu bot.')
        .then((result) => {
          console.log('Mensaje enviado:', result);
        })
        .catch((error) => {
          console.error('Error al enviar mensaje:', error);
        });
    }
  });
}
