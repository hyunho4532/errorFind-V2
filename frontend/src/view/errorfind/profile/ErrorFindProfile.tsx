import { Card, Switch } from "@mui/material"
import React, { useEffect, useState } from "react";
import '../../../index.css'
import axios from "axios";
import './ErrorFindProfile.scss'
import { NewUser } from "../../../model/NewUser";

function ErrorFindProfile() {

    const [themeIsNight, setThemeIsNight] = useState(false);
    const [userAuthBoardCount, setUserAuthBoardCount] = useState(0);
    const [newUser, setNewUser] = useState<NewUser>({
        authuid: '',
        email: '',
        nickname: '',
        position: '',
        errorhandler: ''
    });

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

    const userAuthNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({
            ...newUser,
            nickname: e.target.value
        });
    }

    const userAuthEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({
            ...newUser,
            email: e.target.value
        })
    }

    const userAuthPositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({
            ...newUser,
            position: e.target.value
        })
    }

    const userAuthErrorHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({
            ...newUser,
            errorhandler: e.target.value
        })
    }

    const authProfileInsert = () => {

        const data = {
            authuid: userAuthFromJson.userData.authuid,
            nickname: userAuthFromJson.userData.nickname
        }

        localStorage.setItem('user', JSON.stringify ({
            ...userAuthFromJson,
            userData: {
                ...userAuthFromJson.userData,
                email: newUser.email,
                nickname: newUser.nickname,
                errorhandler: newUser.errorhandler,
                position: newUser.position,
            }
        }));

        axios.post('http://localhost:50000/userData/update', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='errorfind-profile'>
            <div className='errorfind-profile-component'>
                <div style={{ width: '120px', height: '120px', borderRadius: '70%', overflow: 'hidden', border: '1.5px solid black', alignItems: 'center', justifyContent: "center", margin: '0 auto' }}>
                    <img src="../../../public/guest_logo.png" alt="rounded_image" style={{ width: '100%', height: '100%', display: 'block' }} />
                </div>
                
                <div>
                    <p style={{ fontSize: "24px", fontWeight: "bold" }}>{userAuthFromJson.userData.nickname}님 안녕하세요!</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <p style={{ fontSize: "16px" }}>게시글</p>
                    <p>포인트</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <p>{userAuthBoardCount}개</p>
                    <p>0점</p>
                </div>
            </div>

            <div style={{ marginTop: "40px" }}>
                <p style={{ textAlign: "start" }}>닉네임</p>
                <input type="text" className="auth-profile-nickname-input" onChange={userAuthNicknameChange} placeholder={userAuthFromJson.userData.nickname}></input>
            </div>

            <div style={{ marginTop: "90px" }}>
                <p style={{ textAlign: "start" }}>이메일</p>
                <input type="text" className="auth-profile-email-input" onChange={userAuthEmailChange} placeholder={userAuthFromJson.userData.email}></input>
            </div>

            <div style={{ marginTop: "90px" }}>
                <p style={{ textAlign: "start" }}>포지션</p>
                <input type="text" className="auth-profile-position-input" onChange={userAuthPositionChange} placeholder={userAuthFromJson.userData.position}></input>
            </div>

            <div style={{ marginTop: "90px" }}>
                <p style={{ textAlign: "start" }}>에러 대처 상황</p>
                <input type="text" className="auth-profile-errorhandler-input" onChange={userAuthErrorHandlerChange} placeholder={userAuthFromJson.userData.errorhandler}></input>
            </div>

            <button className="auth-profile-insert-button" onClick={authProfileInsert}>프로필 저장하기</button>

            <Card className="auth-profile-dark-theme">
                <p style={{ textAlign: "start", paddingLeft: "16px", fontWeight: "bold" }}>다크 모드 활성화</p>
                
                <div style={{ marginTop: "12px" }}>
                    <Switch {...label} onChange={() => themeChange(!themeIsNight)} />
                </div>
                
            </Card>

            <Card className="auth-profile-account-exit">
                <p style={{ textAlign: "start", paddingLeft: "16px", fontWeight: "bold" }}>계정 탈퇴</p>

                <div style={{ alignContent: "center", marginRight: "8px" }}>
                    <button style={{ backgroundColor: "#F05650", fontSize: "16px", color: "white", fontWeight: "bold" }}>계정 탈퇴 진행하기</button>
                </div>
            </Card>
        </div>
    )
}

export default ErrorFindProfile