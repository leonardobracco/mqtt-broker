var mosca = require('mosca');
var settings = {
    interfaces: [
        { type: "mqtt", port: 3001 }, 
        { type: "http", port: 9001, bundle: true }, //WS
    ]

};



var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload.toString());
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}


