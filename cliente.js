const dgram = require('dgram');
const readline = require('readline');

const client = dgram.createSocket('udp4');

const HOST = 'localhost';
const PORT = 9000;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sendMessage(message) {
    client.send(message, PORT, HOST, (err) => {
        if (err) {
            console.error('Erro ao enviar mensagem:', err);
        }
    });
}

function askMessage() {
    rl.question('Digite a mensagem para enviar ao servidor: ', (answer) => {
        sendMessage(answer);
        askMessage(); 
    });
}

askMessage();