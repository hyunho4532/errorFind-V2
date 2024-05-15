import React from "react";

class ProfileInputForm extends React.Component {

    userAuth = localStorage.getItem('user');
    userAuthFromJson = JSON.parse(this.userAuth!);

    state = {
        nickname: this.userAuthFromJson.userData.nickname,
        email: this.userAuthFromJson.userData.email
    }

    userAuthChange = (e: React.ChangeEvent<HTMLInputElement>, type: any) => {
        if (type == 'nickname') {
            this.setState({
                nickname: e.target.value
            })
        }
        else if (type == 'email') {
            this.setState({
                email: e.target.value
            })
        }
    };
    
    render(): React.ReactNode {
        return (
            <div>
                <div style={{ marginTop: "40px" }}>
                    <p style={{ textAlign: "start" }}>닉네임</p>
                    <input type="text" className="auth-profile-nickname-input" onChange={(nickname) => this.userAuthChange(nickname, 'nickname')} value={this.state.nickname}></input>
                </div>

                <div style={{ marginTop: "90px" }}>
                <p style={{ textAlign: "start" }}>이메일</p>
                <input type="text" className="auth-profile-email-input" onChange={(email) => this.userAuthChange(email, 'email')} value={this.state.email}></input>
                </div>
            </div>
        )
    }
}

export default ProfileInputForm