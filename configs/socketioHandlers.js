function setupSocketHandlers(io){
    io.on("connection",(socket)=>{
        console.log("Socket user connected");
        const token = socket.handshake.auth.token;
        console.log("token",token);
        socket.emit("connection","Connected Backend Socket")
        
    })
}

module.exports = setupSocketHandlers