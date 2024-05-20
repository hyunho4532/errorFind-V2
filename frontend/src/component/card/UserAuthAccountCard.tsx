import { Card } from "@mui/material";
import React from "react";
import UserAuthAccountProps from "./props/UserAuthAccountProps";

class UserAuthAccountCard extends React.Component<UserAuthAccountProps> {
    render() {
        return (
            <Card className="auth-profile-account-exit">
                <p style={{ textAlign: "start", paddingLeft: "16px", fontWeight: "bold" }}>계정 탈퇴</p>

                <div style={{ alignContent: "center", marginRight: "8px" }}>
                    <button style={{ backgroundColor: "#F05650", fontSize: "16px", color: "white", fontWeight: "bold" }}>계정 탈퇴 진행하기</button>
                </div>
            </Card>
        );
    }
}

export default UserAuthAccountCard