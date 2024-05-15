import React from "react";
import AuthProfileInsert from "../../util/insert/AuthProfileInsert";
import ProfileInputProps from "./props/ProfileInputProps";
import { NewUser } from "../../model/NewUser";

class ProfileInputForm extends React.Component<ProfileInputProps> {

    userAuth = localStorage.getItem('user');
    userAuthFromJson = JSON.parse(this.userAuth!);

    state = {
        authuid: this.userAuthFromJson.userData.authuid,
        nickname: this.userAuthFromJson.userData.nickname,
        email: this.userAuthFromJson.userData.email,
        errorhandler: this.userAuthFromJson.userData.errorhandler,
        position: this.userAuthFromJson.userData.position
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
        else if (type == 'position') {
            this.setState({
                position: e.target.value
            })
        }
        else {
            this.setState({
                errorhandler: e.target.value
            })
        }
    };

    newUser = new NewUser(this.userAuthFromJson.userData.authuid, this.state.nickname, this.state.email, this.state.position, this.state.errorhandler);

    data = {
        authuid: this.userAuthFromJson.userData.authuid,
        nickname: this.state.nickname,
        email: this.state.email,
        errorhandler: this.state.errorhandler,
        position: this.state.position
    }

    handleProfileInsert = () => {
        const { nickname, email, position, errorhandler } = this.state;
        const newUser = new NewUser(this.userAuthFromJson.userData.authuid, nickname, email, position, errorhandler);
        
        AuthProfileInsert(this.userAuthFromJson, newUser);
    };
    
    render(): React.ReactNode {
        return (
            <div>
                <div style={{ marginTop: "70px" }}>
                    <p style={{ textAlign: "start" }}>닉네임</p>
                    <input type="text" className="auth-profile-nickname-input" onChange={(nickname) => this.userAuthChange(nickname, 'nickname')} value={this.state.nickname}></input>
                </div>

                <div style={{ marginTop: "90px" }}>
                    <p style={{ textAlign: "start" }}>이메일</p>
                    <input type="text" className="auth-profile-email-input" onChange={(email) => this.userAuthChange(email, 'email')} value={this.state.email}></input>
                </div>

                <div style={{ marginTop: "90px" }}>
                    <p style={{ textAlign: "start" }}>포지션</p>
                    <input type="text" className="auth-profile-position-input" onChange={(position) => this.userAuthChange(position, 'position')} value={this.state.position}></input>
                </div>

                <div style={{ marginTop: "90px" }}>
                    <p style={{ textAlign: "start" }}>에러 대처 상황</p>
                    <input type="text" className="auth-profile-errorhandler-input" onChange={(errorhandler) => this.userAuthChange(errorhandler, 'errorhandler')} value={this.state.errorhandler}></input>
                </div>

                <button className="auth-profile-insert-button" onClick={this.handleProfileInsert}>프로필 저장하기</button>
            </div>
        )
    }
}

export default ProfileInputForm