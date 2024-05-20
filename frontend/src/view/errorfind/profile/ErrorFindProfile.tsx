import { Card } from "@mui/material"
import { useEffect, useRef, useState } from "react";
import '../../../index.css'
import axios from "axios";
import './ErrorFindProfile.scss'
import ProfileInputForm from "../../../component/form/ProfileInputForm";
import { NewUser } from "../../../model/NewUser";
import HorizontalScroll from "../../../util/scroll/HorizontalScroll";
import UserDarkThemeCard from "../../../component/card/UserDarkThemeCard";
import UserAuthAccountCard from "../../../component/card/UserAuthAccountCard";

function ErrorFindProfile() {
    const [userAuthBoardCount, setUserAuthBoardCount] = useState(0);
    const [boardData, setBoardData] = useState([]);
    const containerRef = useRef(null);

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
    }, []);

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
                <p className="errorfind-auth-errorboard">내가 작성한  에러 게시글</p>

                <HorizontalScroll container={containerRef.current} />

                <div ref={containerRef} className="errorfind-auth-data">
                    { boardData.map(( board: any, index: any ) => (
                        <Card key={index} className="errorfind-auth-card">
                            <p className="errorfind-auth-errortype">{ board.errorType }</p>
                            <p className="errorfind-auth-platform">에러 발생: { board.selectedPlatform }</p>
                            <p className="errorfind-auth-formatDate">{ board.formattedDate }</p>
                        </Card>
                    ))}
                </div>
            </section>

            <ProfileInputForm newUser={newUser} />

            <UserDarkThemeCard />

            <UserAuthAccountCard
                authuid={userAuthFromJson.userData.authuid}
                nickname={userAuthFromJson.userData.nickname}
            />
        </div>
    );
}

export default ErrorFindProfile;