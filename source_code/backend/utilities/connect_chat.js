import http from "http";
import { Server } from "socket.io";

export default function connectChat(app) {
    const corsOptions = {
        origin: "http://localhost:3001",
      };
      
    const server = http.createServer(app);
    const io = new Server(server, {
    cors: corsOptions
    });

    const users = new Set();
    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);
    
        socket.on('register_user', (username) => {
            socket.username = username; // Assign username to the socket
            console.log(`User registered: ${username}`);
            io.emit('user_count', io.sockets.sockets.size); // Update user count
        });
    
        socket.on('chat_message', (message) => {
            // Emit message with username
            io.emit('chat_message', { username: socket.username, message });
        });
    
        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.username || socket.id}`);
            io.emit('user_count', io.sockets.sockets.size);
        });
    });
    console.log("Successfully connected to socket.io server");
    return server;
}
