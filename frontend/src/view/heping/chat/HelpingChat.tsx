import { useEffect, useRef, useState } from "react";
import io, {Socket} from "socket.io-client";
import { TextField, Button } from "@mui/material"; // Material UI에서 TextField 가져오기

function App() {

    const [state, setState] = useState({ message: "", authuid: "", authname: "" });
    const [chat, setChat] = useState<any>([]);

    const [userAuth, setUserAuth] = useState<any>('');
    const [userNickname, setUserNickname] = useState<any>('');

    const auth: any = localStorage.getItem('user');

    const socketRef = useRef<Socket | null>(null);
    
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const uid = urlParams.get('uid');

    useEffect(() => {

        setUserAuth(JSON.parse(auth).userData.authuid);
        setUserNickname(JSON.parse(auth).userData.nickname);

        console.log(userAuth, userNickname);

        socketRef.current = io("http://localhost:50001");
        socketRef.current.emit('joinRoom', uid);

        socketRef.current.on("message", ({ authuid, authname, message } : any) => {
            setChat([...chat, { authuid, authname, message }]);
            console.log(chat);
        });
        return () => {
            socketRef.current!.disconnect();
        };
    }, [chat, userAuth, userNickname]);

    const onTextChange = (e: any) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const onMessageSubmit = (e: any) => {

        const authuid : any = userAuth;
        const authname: any = userNickname;
        const roomId = uid;

        const { message } = state;
        socketRef.current!.emit("message", { roomId, authuid, authname, message });
        e.preventDefault();
        setState({ message: "", authuid, authname });
    };

    const renderChat = () => {
        return chat.map(({ authuid, authname, message } : any, index : any) => (
            authuid == userAuth ?
                <div key={index} style={{ "textAlign": "right", "fontSize": "12px" }}>
                    <h3>
                        <span>{message}</span>
                    </h3>
                    
                    <p>- {authname}- </p>
                    
                    <hr />
                </div> :

                <div key={index} style={{ "textAlign": "left", "fontSize": "12px" }}>
                    <h3>
                        <span>{message}</span>
                    </h3>
                    
                    <p>- {authname}- </p>

                    <hr />
                </div>
        ));
    };

    const chatExit = () => {

        const roomId = uid;
        const authname = userNickname;

        socketRef.current!.emit("chatExit", { roomId, authname });
    }

    return (
        <div className="card">
            <div className="render-chat" style={{ "textAlign": "left"}}>
                {renderChat()}
            </div>
            <form onSubmit={onMessageSubmit} style={{ "marginTop": "60px" }}>
                <div style={{ "display": "flex" }}>
                    <div>
                        <TextField
                            name="message"
                            onChange={onTextChange}
                            value={state.message}
                            id="outlined-multiline-static"
                            variant="outlined"
                            label="Message"
                            style={{ "width": "450px" }}
                        />
                    </div>
                    <Button variant="contained" type="submit">전송</Button>
                    <Button type="submit" onClick={chatExit}>헬핑! 나가기</Button>
                </div>
            </form>

        </div>
    );
}

export default App;
