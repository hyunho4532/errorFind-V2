import { Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserProfileCard = () => {
    
    const userAuth = localStorage.getItem('user');
    const userAuthFromJson = JSON.parse(userAuth!);

    const [userAuthBoardCount, setUserAuthBoardCount] = useState(0);

    const data = {
        authuid: userAuthFromJson.userData.authuid
    }

    useEffect(() => {

        axios.post('http://localhost:50000/profile/boardData/count', data)
            .then(response => {
                setUserAuthBoardCount(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    });
    
    return (
        <div>
            <Card className="header-profile">
                <p className="header-profile-nickname">
                    { userAuthFromJson.userData.nickname }
                </p>

                <div> 
                    <div className="header-profile-info">
                        <p>게시 글</p>
                        <p>포인트</p>
                    </div>

                    <div className="header-profile-info-data">
                        <p>
                            { userAuthBoardCount }개
                        </p>

                        <p>
                            0점
                        </p>
                    </div>
                </div>

                <p className="header-profile-position">
                    포지션: {userAuthFromJson.userData.position}
                </p>

                <p className="header-profile-errorhandler">
                    에러가 났을 때: {userAuthFromJson.userData.errorhandler}
                </p>

                <Link to="error/profile">
                        <button className="header-profile-button-component">
                            프로필 꾸미기
                        </button>
                </Link>
            </Card>
        </div>
    )
}

export default UserProfileCard