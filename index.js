const venom = require('venom-bot');

venom
  .create({
    session: 'bot-session',
    multidevice: true,
    headless: false, // 👈 Cambiado a falso para mostrar el navegador
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--headless=new']
  })
  .then((client) => start(client))
  .catch((error) => {
    console.error('Error al iniciar el bot:', error);
  });

function start(client) {
  client.onMessage((message) => {
    console.log('Mensaje recibido:', message.body); // Para ver en consola si recibe

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
