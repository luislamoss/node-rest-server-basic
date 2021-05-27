require('dotenv').config();

const Server = require('./models/server');


//Ejecutar el servidor
const server = new Server();

server.listen();