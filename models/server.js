const express = require('express');
var cors = require('cors');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();

    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //PARESO Y LECTURA BODY
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){ 
        //aqui traigo las rutas
        this.app.use(this.userPath, require('../routes/user'))
       
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor en puerto:', this.port);
        });
    }
}

module.exports = Server;