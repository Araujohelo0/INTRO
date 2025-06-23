const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const HOST = 'localhost';
const PORT = 9000;

server.on('listening', () => {
    console.log(`Servidor UDP iniciado em ${HOST}:${PORT}`);
});

server.on('message', (message, remote) => {
    console.log(`[CLIENTE]: ${message}`); 
});

server.bind(PORT, HOST);