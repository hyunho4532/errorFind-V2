import { Card, Switch } from "@mui/material"
import { useState } from "react";
import '../../../index.css'

function ErrorFindProfile() {

    const [themeIsNight, setThemeIsNight] = useState(false);

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const themeChange = (theme: boolean) => {
        setThemeIsNight(theme);
    }

    return (
        <div className={themeIsNight ? 'dark-mode' : ''}>
            
            <div style={{ width: '120px', height: '120px', borderRadius: '70%', overflow: 'hidden', border: '1.5px solid black' }}>
                <img src="../../../public/guest_logo.png" alt="rounded_image" style={{ width: '100%', height: '100%', display: 'block' }} />
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