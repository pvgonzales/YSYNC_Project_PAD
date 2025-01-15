import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');
    const [userCount, setUserCount] = useState(0);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Get the username from session storage
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
            // Create socket connection
            const newSocket = io('http://localhost:3000');
            newSocket.emit('register_user', storedUsername); // Send username to backend
            setSocket(newSocket);

            // Handle incoming messages
            newSocket.on('chat_message', (data) => {
                setMessages((prevMessages) => [...prevMessages, data]);
            });

            // Handle user count updates
            newSocket.on('user_count', (count) => {
                setUserCount(count);
            });

            // Cleanup on component unmount
            return () => {
                newSocket.disconnect();
            };
        }
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('chat_message', message);
            setMessage('');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h2>Chat Room</h2>
            <div style={{ border: '1px solid #ccc', height: '300px', overflowY: 'scroll', marginBottom: '10px' }}>
                {messages.map((msg, index) => (
                    <p key={index}>
                        <strong>{msg.username}:</strong> {msg.message}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
                style={{ width: '80%', marginRight: '10px' }}
            />
            <button onClick={sendMessage}>Send</button>
            <p>Users Online: {userCount}</p>
        </div>
    );
};

export default Chat;
