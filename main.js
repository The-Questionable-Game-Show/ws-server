const { WebSocketServer } = require('ws');
const { v4: uuidv4 } = require('uuid');

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  // Assign a unique ID to this specific socket
  ws.id = uuidv4(); 
  
  console.log(`reg client: ${ws.id}`);

  ws.on('message', (message) => {
    if (message == "whoami") {
      ws.send("whoami:suc:" + ws.id)
    }
  });
});
