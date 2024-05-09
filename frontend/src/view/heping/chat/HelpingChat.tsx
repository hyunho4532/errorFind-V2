import { useEffect, useRef, useState } from "react";
import io, {Socket} from "socket.io-client";
import { TextField, Button } from "@mui/material"; // Material UI에서 TextField 가져오기

function App() {
    const [state, setState] = useState({ message: "", name: "" });
    const [chat, setChat] = useState<any>([]);

    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        socketRef.current = io("http://localhost:50001");
        socketRef.current.on("message", ({ name, message } : any) => {
            setChat([...chat, { name, message }]);
        });
        return () => {
            socketRef.current!.disconnect();
        };
    }, [chat]);

    const onTextChange = (e: any) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const onMessageSubmit = (e: any) => {
        const { name, message } = state;
        socketRef.current!.emit("message", { name, message });
        e.preventDefault();
        setState({ message: "", name });
    };

    const renderChat = () => {
        return chat.map(({ name, message } : any, index : any) => (
            <div key={index}>
                <h3>
                    {name}: <span>{message}</span>
                </h3>
            </div>
        ));
    };

    return (
        <div className="card">
            <div className="render-chat">
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
