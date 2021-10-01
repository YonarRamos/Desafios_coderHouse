import socketio from 'socket.io';

class ws {
    constructor(server){
        this.io = socketio( server, {cors: {origin: "*"}} );
    }
    connection(){
        this.io.on('connection', socket => {
            try {
              let nombre;
              socket.on('connected', (nomb) => {
                nombre = nomb;
                socket.broadcast.emit("mensajes", {nombre, mensaje: `${nombre} se ha unido a la sala`});
                console.log('un usuario se ha conectado')
              });

              socket.on('mensaje', (nombre, mensaje) => {
                this.io.emit("mensajes", {nombre, mensaje});
              });

              socket.on('disconnect', () => {
                this.io.emit("mensajes", {nombre, mensaje: `${nombre} ha abandonado la sala`});
              });

            }
              catch (error) {
                console.log('POST Error:', error)
              }
          });
    }
};

module.exports = ws;