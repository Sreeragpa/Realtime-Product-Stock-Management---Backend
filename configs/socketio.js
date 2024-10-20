const socketio = require("socket.io");
const setupSocketioHandlers = require("./socketioHandlers")
let io;
function initializeSockeio(server){
    io = new socketio.Server(server,{
        cors:{
            origin:["http://localhost:4200"],
            credentials:true
        }
    })

    setupSocketioHandlers(io)

    return io
} 

function getSocketInstance() {
    return io;
}


module.exports = {initializeSockeio,getSocketInstance}