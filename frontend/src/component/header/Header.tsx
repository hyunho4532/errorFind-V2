import { useEffect, useState } from 'react'
import './Header.scss'
import { Modal, Typography } from '@mui/material';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { User } from '../../model/User';
import { useRecoilState } from 'recoil';
import { user } from '../../recoil/Atom';
import userInfoInsert from '../../data/user/UserInfo';
import { Link } from 'react-router-dom';
import UserProfileCard from '../card/UserProfileCard';

function Header() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [userModalIsOpen, setUserModalIsOpen] = useState(false);
    const [userProfileSelect, setUserProfileSelect] = useState(false);

    const [userData, setUserData] = useRecoilState<User>(user)

    const storedEmail = localStorage.getItem('userEmail');

    const clientId = '975201873312-kkmb6gv4usaond240kaecujn4vmqd695.apps.googleusercontent.com'

    const loginClick = () => {
        setModalIsOpen(true);
    }

    const modalClose = () => {
        setModalIsOpen(false);
    }

    const userModalClose = () => {
        setUserModalIsOpen(false);
    }

    const errorInsertClick = () => {
        if (userData.email === '') {
            alert('로그인을 먼저 진행해주세요.');
        } else {
            location.href = "/error/write";
        }
    }

    const nicknameChange = (e: any) => {
        setUserData({ ...userData, nickname: e.target.value });
    }

    const positionChange = (e: any) => {
        setUserData({ ...userData, position: e.target.value });
    }

    const errorHandlerCahnge = (e: any) => {
        setUserData({ ...userData, errorhandler: e.target.value });
    }

    const profileSelect = (userProfileSelect: boolean) => {
        setUserProfileSelect(!userProfileSelect);
    }

    useEffect(() => {
        
        console.log(storedEmail);
    
        if (storedEmail !== null) {
            const userEmail = JSON.parse(storedEmail);
    
            setUserData(prevUserData => ({ ...prevUserData, email: userEmail.email }));
    
            console.log(userEmail.email);
        }
    
    }, [storedEmail]);

    return (
        <>
            <div className="header-main">
                <img width={140} height={60} className="header-logo" src="../../../public/errorfind_logo.jpg" />
                <nav style={{ display: 'flex' }}>
                    <Link to="/error/average" style={{ width: '90px', paddingLeft: '24px' }}>
                        <div className="header-nav-link">
                            <p>에러 통계</p>
                        </div>
                    </Link>

                    <Link to="/error/helping" style={{  width: '90px', paddingLeft: '50px', paddingRight: '60px' }}>
                        <div className="header-nav-link">
                            <p>헬핑!</p>
                        </div>
                    </Link>
                </nav>

                <div className="header-main-title">
                    <p className="header-main-email" onClick={() => profileSelect(userProfileSelect)}>{userData.email}</p>

                    {
                        userData.email === '' 
                        ? <button className="header-login" onClick={loginClick}>로그인</button>
                        : ''
                    }

                    
                    <p className="header-error-write" onClick={errorInsertClick}>에러 등록하기</p>
                </div>
            </div>

            { userProfileSelect ? 
                <UserProfileCard /> : <p></p>
            }        

            <Modal
                open={modalIsOpen}
                onClose={modalClose}>

                <div className="modal">
                    <Typography className="modal-login-title">ErrorFind를 이용해주셔서 감사합니다.</Typography>
                    <Typography className="modal-login-errorfind-platform">erorrFind는 다른 사람들에게 에러를 공유해 서로 공유하면서 해결하는 플랫폼을 지원하겠습니다!</Typography>
                    <Typography className="modal-login-options-prompt">아래 카카오, 구글 로그인 중 원하는 로그인을 선택해주세요!!</Typography>

                    <div className="modal-login-kind">
                        <div>
                            <GoogleOAuthProvider clientId={clientId}>
                                <GoogleLogin
                                    onSuccess={(res) => {
                                        if (res.credential != undefined) {
                                            const credentialResponseDecoded: any = jwtDecode(res.credential);

                                            const email = credentialResponseDecoded.email;
                                            const authuid = credentialResponseDecoded.jti;

                                            
                                            localStorage.setItem('userEmail', JSON.stringify({ email }));
                                            localStorage.setItem('authuid', JSON.stringify({ authuid }));
                                            

                                            setUserData({ ...userData, email: email })
                                            setUserData({ ...userData, authuid: authuid });
                                            
                                            setModalIsOpen(false);
                                            setUserModalIsOpen(true);
                                        }
                                    }}
                                    onError={() => {
                                        console.error('에러'); 
                                    }} 
                                />
                            </GoogleOAuthProvider>
                            
                            <p className="modal-login-google-text">구글 로그인</p>
                        </div>

                        <div>
                            <button>
                                <img width={60} height={60} src="../../../public/kakao.jpg" />
                            </button>

                            <p className="modal-login-kakao-text">카카오 로그인</p>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                open={userModalIsOpen}
                onClose={userModalClose}>


                <div className="modal">
                    <Typography className="modal-login-welcome">ErrorFind 처음 방문하시는건가요?</Typography>
                    <Typography className="modal-login-information">그럼 간단한 정보들을 입력해주세요</Typography>

                    <div className="modal-form">
                        <div style={{ "display": "flex" }}>
                            <p className="modal-login-nickname-field">닉네임</p>
                            <div className="modal-login-nickname-input">
                                <input className="modal-login-nickname-form" onChange={nicknameChange} type='text'></input>
                            </div>
                        </div>

                        <div style={{ "display": "flex" }}>
                            <p className="modal-login-position-field">포지션</p>
                            <div className="modal-login-position-input">
                                <input className="modal-login-position-form" onChange={positionChange} type='text' placeholder='포지션은 어디신가요? (ex: 안드로이드, 웹)'></input>
                            </div>
                        </div>

                        <div style={{ "display": "flex" }}>
                            <p className="modal-login-error-field">저는 에러가 났을 때</p>
                            <select className="modal-login-error-select" onChange={errorHandlerCahnge} style={{ "width": "100px", "height": "30px", "marginTop": "60px", "marginLeft": "16px" }}>
                                <option>ChatGPT</option>
                                <option>블로그</option>
                                <option>구글링</option>
                            </select>
                            <p className="modal-login-error-field-content">를 이용하여 해결합니다!</p>
                        </div>
                    </div>

                    <button className="modal-login-button" onClick={() => userInfoInsert(userData)}>
                        정보 입력 완료! 
                    </button>
                </div>

            </Modal>
        </>
    )
}

export default Header