import { Card, Switch } from "@mui/material";
import React from "react";

class UserDarkThemeCard extends React.Component {
    render() {
        return (
            <Card className="auth-profile-dark-theme">
                <p style={{ textAlign: "start", paddingLeft: "16px", fontWeight: "bold" }}>다크 모드 활성화</p>
                
                <div style={{ marginTop: "12px" }}>
                    <Switch />
                </div>
                
            </Card>
        );
    }
}

export default UserDarkThemeCard