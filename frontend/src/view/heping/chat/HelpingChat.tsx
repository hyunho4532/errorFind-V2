import { useEffect, useRef, useState } from "react";
import io, {Socket} from "socket.io-client";
import { TextField, Button } from "@mui/material"; // Material UI에서 TextField 가져오기

function App() {
    const [state, setState] = useState({ message: "", authuid: "" });
    const [chat, setChat] = useState<any>([]);

    const [userAuth, setUserAuth] = useState<any>('');

    const auth: any = localStorage.getItem('authuid');

    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {

        setUserAuth(JSON.parse(auth).authuid);
        console.log(userAuth);

        socketRef.current = io("http://localhost:50001");
        socketRef.current.on("message", ({ authuid, message } : any) => {
            setChat([...chat, { authuid, message }]);
            console.log(chat);
        });
        return () => {
            socketRef.current!.disconnect();
        };
    }, [chat, userAuth]);

    const onTextChange = (e: any) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const onMessageSubmit = (e: any) => {

        const authuid : any = userAuth;

        const { message } = state;
        socketRef.current!.emit("message", { authuid, message });
        e.preventDefault();
        setState({ message: "", authuid });
    };

    const renderChat = () => {
        return chat.map(({ authuid, message } : any, index : any) => (
            authuid == userAuth ?
                <div key={index} style={{ "textAlign": "right" }}>
                    <h3>
                        <span>{message}</span>
                    </h3>
                </div> :

                <div key={index} style={{ "textAlign": "left" }}>
                    <h3>
                        <span>{message}</span>
                    </h3>
                </div>
        ));
    };

    return (
        <div className="card">
            <div className="render-chat" style={{ "textAlign": "left"}}>
                {renderChat()}
            </div>
            <form onSubmit={onMessageSubmit}>
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
                    <Button variant="contained" type="submit">Send Message</Button> {/* Send 버튼을 Material UI의 Button으로 대체 */}
                </div>
            </form>

        </div>
    );
}

export default App;
