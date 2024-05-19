import { useEffect, useState } from 'react'
import './Header.scss'
import { Modal, Typography } from '@mui/material';
import userInfoInsert from '../../data/user/UserInfo';
import { Link } from 'react-router-dom';
import UserProfileCard from '../card/UserProfileCard';
import { HeaderProps } from './props/HeaderProps';
import LoginDialog from '../dialog/LoginDialog';

function Header(props: HeaderProps) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [userModalIsOpen, setUserModalIsOpen] = useState(false);
    const [userProfileSelect, setUserProfileSelect] = useState(false);

    const storedEmail = localStorage.getItem('userEmail');
    const storedAuthUid = localStorage.getItem('authuid');


    const errorInsertClick = () => {
        if (props.userData.email === '') {
            alert('로그인을 먼저 진행해주세요.');
        } else {
            location.href = "/error/write";
        }
    }

    const statusChange = (type: string, e: any) => {
        if (type == 'nickname') {
            props.setUserData({ ...props.userData, nickname: e.target.value });
        }
        
        else if (type == 'position') {
            props.setUserData({ ...props.userData, position: e.target.value });
        }

        else if (type == 'errorhandler') {
            props.setUserData({ ...props.userData, errorhandler: e.target.value })
        }
    }

    const profileSelect = (userProfileSelect: boolean) => {
        setUserProfileSelect(!userProfileSelect);
    }

    useEffect(() => {
    
        if (storedEmail !== null) {
            const userEmail = JSON.parse(storedEmail);
            const userAuthUid = JSON.parse(storedAuthUid!);

            props.setUserData({ ...props.userData, email: userEmail.email, authuid: userAuthUid.authuid });
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
                    <p className="header-main-email" onClick={() => profileSelect(userProfileSelect)}>{props.userData.email}</p>

                    {
                        props.userData.email === '' 
                        ? <button className="header-login" onClick={() => setModalIsOpen(true)}>로그인</button>
                        : ''
                    }

                    
                    <p className="header-error-write" onClick={errorInsertClick}>에러 등록하기</p>
                </div>
            </div>

            { userProfileSelect ? 
                <UserProfileCard /> : <p></p>
            }

            <LoginDialog
                userData={props.userData} 
                setUserData={props.setUserData} 
                modalIsOpen={modalIsOpen} 
                setModalIsOpen={setModalIsOpen} 
                setUserModalIsOpen={setUserModalIsOpen} />

            <Modal
                open={userModalIsOpen}
                onClose={() => setUserModalIsOpen(false)}>


                <div className="modal">
                    <Typography className="modal-login-welcome">ErrorFind 처음 방문하시는건가요?</Typography>
                    <Typography className="modal-login-information">그럼 간단한 정보들을 입력해주세요</Typography>

                    <div className="modal-form">
                        <div style={{ "display": "flex" }}>
                            <p className="modal-login-nickname-field">닉네임</p>
                            <div className="modal-login-nickname-input">
                                <input className="modal-login-nickname-form" onChange={(status: any) => statusChange('nickname', status)} type='text'></input>
                            </div>
                        </div>

                        <div style={{ "display": "flex" }}>
                            <p className="modal-login-position-field">포지션</p>
                            <div className="modal-login-position-input">
                                <input className="modal-login-position-form" onChange={(status: any) => statusChange('position', status)} type='text' placeholder='포지션은 어디신가요? (ex: 안드로이드, 웹)'></input>
                            </div>
                        </div>

                        <div style={{ "display": "flex" }}>
                            <p className="modal-login-error-field">저는 에러가 났을 때</p>
                            <select className="modal-login-error-select" onChange={(status: any) => statusChange('errorhandler', status)} style={{ "width": "100px", "height": "30px", "marginTop": "60px", "marginLeft": "16px" }}>
                                <option>ChatGPT</option>
                                <option>블로그</option>
                                <option>구글링</option>
                            </select>
                            <p className="modal-login-error-field-content">를 이용하여 해결합니다!</p>
                        </div>
                    </div>

                    <button className="modal-login-button" onClick={() => userInfoInsert(props.userData)}>
                        정보 입력 완료! 
                    </button>
                </div>

            </Modal>
        </>
    )
}

export default Header