import { Card, Switch } from "@mui/material"
import { useEffect, useState } from "react";
import '../../../index.css'
import axios from "axios";

function ErrorFindProfile() {

    const [themeIsNight, setThemeIsNight] = useState(false);
    const [userAuthBoardCount, setUserAuthBoardCount] = useState(0);

    const userAuth = localStorage.getItem('user');

    const userAuthFromJson = JSON.parse(userAuth!);

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const themeChange = (theme: boolean) => {
        setThemeIsNight(theme);
    }

    const data = {
        authuid: userAuthFromJson.userData.authuid
    }

    useEffect(() => {
        axios.post('https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app/profile/boardData/count', data)
            .then(response => {
                setUserAuthBoardCount(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    });

    return (
        <div className={themeIsNight ? 'dark-mode' : ''}>

            <div style={{ width: '120px', height: '120px', borderRadius: '70%', overflow: 'hidden', border: '1.5px solid black', alignItems: 'center', justifyContent: "center", margin: '0 auto' }}>
                <img src="../../../public/guest_logo.png" alt="rounded_image" style={{ width: '100%', height: '100%', display: 'block' }} />
            </div>
            
            <div>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>{userAuthFromJson.userData.nickname}</p>
            </div>

            <div>
                <p style={{ fontSize: "16px" }}>게시글</p>
            </div>

            <div>
                <p>{userAuthBoardCount}</p>
            </div>

            <Card style={{ width: "600px", height: "60px", display: "flex", justifyContent: "space-between" }}>
                <p style={{ textAlign: "start", paddingLeft: "16px", fontWeight: "bold" }}>다크 모드 활성화</p>
                
                <div style={{ marginTop: "12px" }}>
                    <Switch {...label} onChange={() => themeChange(!themeIsNight)} />
                </div>
                
            </Card>

            <Card style={{ width: "600px", height: "60px", display: "flex", justifyContent: "space-between", marginTop: "32px" }}>
                <p style={{ textAlign: "start", paddingLeft: "16px", fontWeight: "bold" }}>계정 탈퇴</p>

                <div style={{ alignContent: "center", marginRight: "8px" }}>
                    <button style={{ backgroundColor: "#F05650", fontSize: "16px", color: "white", fontWeight: "bold" }}>계정 탈퇴 진행하기</button>
                </div>
            </Card>
        </div>
    )
}

export default ErrorFindProfile