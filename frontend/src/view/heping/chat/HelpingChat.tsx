import { useEffect, useState } from 'react'
import './HelpingChat.scss'
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:50001');

function HelpingChat() {

    const [messages, setMessages] = useState<any>([]);
    const [message, setMessage] = useState('');
    const [chatUser, setChatUser] = useState<any>([]);
    const [otherUserAuthUid, setOtherUserAuthUid] = useState<any>('');
    const [chatUserAuthuid, setChatUserAuthuid] = useState<any>('');

    const userAuth = localStorage.getItem('user');
    const userAuthFromJson = JSON.parse(userAuth!);

    useEffect(() => {

        socket.on('chat message', (msg, authuid) => {
            setMessages([...messages, msg]);
            setOtherUserAuthUid(messages);
        });
    
        socket.on('chat exit', (user) => {
            setChatUser(user);
        });
    

        const data = {
            id: userAuthFromJson.userData.authuid
        }

        axios.post('http://localhost:50000/userData/detail', data)
            .then(response => {
                setChatUserAuthuid(response.data.id);
            })
            .catch(error => {
                console.error(error);
            })

        
        console.log(userAuthFromJson.userData.authuid)
        console.log(chatUserAuthuid);
        console.log(message);
        console.log(chatUser);


    }, [messages, chatUser, chatUserAuthuid]);

    const handleMessageChange = (e: any) => {
        setMessage(e.target.value);
    }

    const handleMessageSend = () => {
        if (message.trim() !== '') {
            socket.emit('chat message', userAuthFromJson.userData.authuid);
            setMessage('');
        }
    };

    const exitHelpingChat = () => {
        socket.emit('chat exit', userAuthFromJson.userData.nickname);
        setChatUser('');
    }

    return (
        <div className="helping-chat">
            <ul>
                { messages.map((msg: any, index: any) => (
                    chatUserAuthuid == msg  ? 
                        <li style={{ textAlign: 'right' }} key={index}>{msg}</li> :
                        <li style={{ textAlign: 'left' }} key={index}>{msg}</li>
                ))}
            </ul>

            { chatUser == '' ?
            <div>
                
            </div> :
            
            <ul>
                <li>{chatUser} 님이 나갔습니다!</li>
            </ul>
            }
        
            
            <input type="text" value={message} onChange={handleMessageChange} />
            <button onClick={handleMessageSend}>Send</button>
            <button onClick={exitHelpingChat}>헬핑! 나가기</button>
        </div>
    )
}

export default HelpingChat