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
            <Card style={{ width: "600px", height: "60px", display: "flex", justifyContent: "space-between" }}>
                <p style={{ textAlign: "start", paddingLeft: "16px", fontWeight: "bold" }}>다크 모드 활성화</p>
                
                <div style={{ marginTop: "12px" }}>
                    <Switch {...label} onChange={() => themeChange(!themeIsNight)} />
                </div>
                
            </Card>

            
        </div>
    )
}

export default ErrorFindProfile