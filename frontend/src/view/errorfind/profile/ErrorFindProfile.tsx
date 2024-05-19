import { Card, Switch } from "@mui/material"
import { useEffect, useState } from "react";
import '../../../index.css'
import axios from "axios";
import './ErrorFindProfile.scss'
import ProfileInputForm from "../../../component/form/ProfileInputForm";
import { NewUser } from "../../../model/NewUser";

function ErrorFindProfile() {
    const [themeIsNight, setThemeIsNight] = useState(false);
    const [userAuthBoardCount, setUserAuthBoardCount] = useState(0);
    const [boardData, setBoardData] = useState([]);

    const newUser = new NewUser('', '', '', '', '');

    const userAuthUid = localStorage.getItem('user');
    const userAuthFromJson = JSON.parse(userAuthUid!);

    const data = {
        id: userAuthFromJson.userData.authuid
    };

    useEffect(() => {
        axios.post('https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app/profile/boardData/count', data)
            .then(response => {
                setUserAuthBoardCount(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        axios.post('http://localhost:50000/errorBoardData/detail/auth', {
            authuid: userAuthFromJson.userData.authuid
        })
            .then(respose => {
                setBoardData(respose.data);
            })
            .catch(error => {
                console.error(error);
            })
    });

    return (
        <div className='errorfind-profile'>
            <div className='errorfind-profile-component'>
                <div style={{ width: '120px', height: '120px', borderRadius: '70%', overflow: 'hidden', border: '1.5px solid black', alignItems: 'center', justifyContent: "center", margin: '0 auto' }}>
                    <img src={userAuthFromJson.userData.profile} alt="rounded_image" style={{ width: '100%', height: '100%', display: 'block' }} />
                </div>

                <div className="errorfind-profile-nickname">
                    <p className="errorfind-profile-nickname-text">{userAuthFromJson.userData.nickname}님 환영합니다!</p>
                </div>

                <div className="errorfind-profile-info-post">
                    <p className="errorfind-profile-info-post-count">게시글</p>
                    <p>포인트</p>
                </div>

                <div className="errorfind-profile-info-point">
                    <p className="errorfind-profile-info-point-count">{userAuthBoardCount}개</p>
                    <p>0점</p> 
                </div>
            </div>

            <section className="errorfind-auth-section">
                <p>내가 작성한  에러 게시글</p>

                <div className="errorfind-auth-data">
                    { boardData.map(( board: any, index: any ) => (
                        <Card className="errorfind-auth-card">
                            <p className="errorfind-auth-errortype">{ board.errorType }</p>
                            <p className="errorfind-auth-platform">에러 발생: { board.selectedPlatform }</p>
                            <p className="errorfind-auth-formatDate">{ board.formattedDate }</p>
                        </Card>
                    ))}
                </div>
            </section>

            <ProfileInputForm newUser={newUser} />

            <Card className="auth-profile-dark-theme">
                <p style={{ textAlign: "start", paddingLeft: "16px", fontWeight: "bold" }}>다크 모드 활성화</p>
                
                <div style={{ marginTop: "12px" }}>
                    <Switch onChange={() => setThemeIsNight(!themeIsNight)} />
                </div>
                
            </Card>

            <Card className="auth-profile-account-exit">
                <p style={{ textAlign: "start", paddingLeft: "16px", fontWeight: "bold" }}>계정 탈퇴</p>

                <div style={{ alignContent: "center", marginRight: "8px" }}>
                    <button style={{ backgroundColor: "#F05650", fontSize: "16px", color: "white", fontWeight: "bold" }}>계정 탈퇴 진행하기</button>
                </div>
            </Card>
        </div>
    );
}

export default ErrorFindProfile;