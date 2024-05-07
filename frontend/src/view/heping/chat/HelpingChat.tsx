import { useEffect, useState } from 'react'
import './HelpingChat.scss'
import io from 'socket.io-client';

const socket = io('http://localhost:50001');

function HelpingChat() {

    const [messages, setMessages] = useState<any>([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.on('chat message', (msg) => {
          setMessages([...messages, msg]);
        });
      }, [messages]);

    const handleMessageChange = (e: any) => {
        setMessage(e.target.value);
    }

    const handleMessageSend = () => {
        if (message.trim() !== '') {
            socket.emit('chat message', message);
            setMessage('');
        }
    };

    return (
        <div className="helping-chat">
            <ul>
                { messages.map((msg: any, index: any) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            <input type="text" value={message} onChange={handleMessageChange} />
            <button onClick={handleMessageSend}>Send</button>
        </div>
    )
}

export default HelpingChat