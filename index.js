const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const respuestas = require('./respuestas'); // Asegúrate de tener respuestas.js en la misma carpeta

const estadoUsuario = {}; // Memoria temporal por usuario

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

// Muestra el QR
client.on('qr', (qr) => {
  console.log('Escanea este QR con tu WhatsApp:');
  qrcode.generate(qr, { small: true });
});

// Listo para usar
client.on('ready', () => {
  console.log('✅ Bot listo y conectado');
});

client.on('message', async (message) => {
  const texto = (message.body || '').toLowerCase().trim();
  const id = message.from;

  if (message.fromMe || message.isStatus) return;
  if (message.from.includes('@g.us')) return; // Ignora grupos

  if (estadoUsuario[id] === 'pausado') return;

  if (texto === '#' || texto === 'menu') {
    estadoUsuario[id] = 'inicio';
    return client.sendMessage(id, respuestas.bienvenida);
  }

  const estado = estadoUsuario[id] || 'inicio';
  
    if (!estadoUsuario[id]) {
    estadoUsuario[id] = 'inicio';
    return client.sendMessage(id, respuestas.bienvenida);
  }


  switch (estado) {
    case 'inicio':
      switch (texto) {
        case '1': estadoUsuario[id] = 'quince'; return client.sendMessage(id, respuestas.quince);
        case '2': estadoUsuario[id] = 'matrimonio'; return client.sendMessage(id, respuestas.matrimonio);
        case '3': estadoUsuario[id] = 'interclases'; return client.sendMessage(id, respuestas.interclases);
        case '4': estadoUsuario[id] = 'revelacion'; return client.sendMessage(id, respuestas.revelacion);
        case '5': estadoUsuario[id] = 'esperando_asesor'; return client.sendMessage(id, respuestas.otro);
        default: return client.sendMessage(id, 'Por favor, selecciona una opción válida o escribe "#" para volver al menú.');
      }

    case 'quince':
    case 'matrimonio':
    case 'interclases':
    case 'revelacion': {
      const eventos = {
        quince: ['quinceOro', 'quincePlata', 'quinceBronce', respuestas.quince],
        matrimonio: ['matrimonioOro', 'matrimonioPlata', 'matrimonioBronce', respuestas.matrimonio],
        interclases: ['interOro', 'interPlata', 'interBronce', respuestas.interclases],
        revelacion: ['revelacionOro', 'revelacionPlata', 'revelacionBronce', respuestas.revelacion]
      };
      const [op1, op2, op3, fallback] = eventos[estado];

      switch (texto) {
        case '1': estadoUsuario[id] = op1; return client.sendMessage(id, respuestas[op1]);
        case '2': estadoUsuario[id] = op2; return client.sendMessage(id, respuestas[op2]);
        case '3': estadoUsuario[id] = op3; return client.sendMessage(id, respuestas[op3]);
        case '#': estadoUsuario[id] = 'inicio'; return client.sendMessage(id, respuestas.bienvenida);
        default: return client.sendMessage(id, fallback);
      }
    }

    case 'quinceOro':
    case 'quincePlata':
    case 'quinceBronce':
    case 'matrimonioOro':
    case 'matrimonioPlata':
    case 'matrimonioBronce':
    case 'interOro':
    case 'interPlata':
    case 'interBronce':
    case 'revelacionOro':
    case 'revelacionPlata':
    case 'revelacionBronce':
      if (texto === '1') {
        estadoUsuario[id] = 'esperando_asesor';
        return client.sendMessage(id, respuestas.cierre);
      } else {
        const base = estado.replace(/(Oro|Plata|Bronce)/, '');
        return client.sendMessage(id, respuestas[base]);
      }

    case 'esperando_asesor':
      return; // No hace nada hasta que el usuario reinicie con #

    default:
      return client.sendMessage(id, 'Escribe # para volver al menú principal.');
  }
});

client.initialize();
