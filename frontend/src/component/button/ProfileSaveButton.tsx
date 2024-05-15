import React from "react";
import ErrorSaveButtonProps from "./props/ErrorSaveButtonProps";

class ProfileSaveButton extends React.Component<ErrorSaveButtonProps> {

    userAuthFromJson = this.props.userAuthFromJson
    userAuthData = this.props.userAuthData;

    authProfileInsert = () => {

        console.log(this.userAuthData);

        localStorage.setItem('user', JSON.stringify ({
            ...this.userAuthFromJson,
            userData: {
                ...this.userAuthFromJson.userData,
                email: this.userAuthData.email,
                nickname: this.userAuthData.nickname,
                errorhandler: this.userAuthData.errorhandler,
                position: this.userAuthData.position,
            }
        }));
    };

    render(): React.ReactNode {
        return (
            <button className="auth-profile-insert-button" onClick={this.authProfileInsert}>프로필 저장하기</button>
        )
    }
}

export default ProfileSaveButton