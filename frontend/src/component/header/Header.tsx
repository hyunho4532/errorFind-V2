import { useMemo, useState } from 'react'
import './Header.scss'
import UserProfileCard from '../card/UserProfileCard';
import { HeaderProps } from './props/HeaderProps';
import LoginDialog from '../dialog/LoginDialog';
import AuthInfoDialog from '../dialog/AuthInfoDialog';
import HeaderInfo from './HeaderInfo';

function Header(props: HeaderProps) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [userModalIsOpen, setUserModalIsOpen] = useState(false);
    const [userProfileSelect, setUserProfileSelect] = useState(false);

    useMemo(() => {
    
        if (localStorage.getItem('userEmail') !== null) {
            const userEmail = JSON.parse(localStorage.getItem('userEmail')!);
            const userAuthUid = JSON.parse(localStorage.getItem('authuid')!);

            props.setUserData({ ...props.userData, email: userEmail.email, authuid: userAuthUid.authuid });
        }
    
    }, [localStorage.getItem('userEmail')]);

    return (
        <>
            <HeaderInfo
                userData={props.userData}
                userProfileSelect={userProfileSelect}
                setUserProfileSelect={setUserProfileSelect}
                setModalIsOpen={setModalIsOpen} />

            { userProfileSelect ? 
                <UserProfileCard /> : <p></p>
            }

            <LoginDialog
                userData={props.userData} 
                setUserData={props.setUserData} 
                modalIsOpen={modalIsOpen} 
                setModalIsOpen={setModalIsOpen} 
                setUserModalIsOpen={setUserModalIsOpen} />

            <AuthInfoDialog 
                userData={props.userData}
                setUserData={props.setUserData}
                userModalIsOpen={userModalIsOpen}
                setUserModalIsOpen={setUserModalIsOpen}
            />
        </>
    )
}

export default Header