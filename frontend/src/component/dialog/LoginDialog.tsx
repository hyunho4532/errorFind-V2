import { Modal } from "@mui/material"
import './index.scss'
import { Dispatch, SetStateAction } from "react"
import { User } from "../../model/User";
import { supabase } from "../../config";

export interface LoginDialogProps {
    userData: User
    setUserData: (user: User) => void
    modalIsOpen: boolean,
    setModalIsOpen: Dispatch<SetStateAction<boolean>>,
    setUserModalIsOpen: Dispatch<SetStateAction<boolean>>,
}

function LoginDialog(props: LoginDialogProps) {

    const googleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
              redirectTo: 'https://cvbkuzrehmguxtilpgkl.supabase.co/auth/v1/callback',
              queryParams: {
                access_type: 'offline',
                prompt: 'consent',
              },
            },
          })
    }

    return (
        <Modal
            open={props.modalIsOpen}
            onClose={() => props.setModalIsOpen(false)}>

            <div className="modal">
                <p className="Title">ErrorFind를 이용해주셔서 감사합니다.</p>
                <p className="SubTitle">에러를 공유하여 서로 해결해봅시다!</p>
                <p className="SubLogin">프로젝트 진행 전에 로그인을 진행해주세요!</p>

                <div className="modal-login-kind">
                    <div>
                        <button onClick={googleLogin}>
                            <img width={60} height={60} src="../../../public/google.png" />
                        </button>

                        <p className="modal-login-google-text">구글 로그인</p>
                    </div>

                    <div>
                        <button>
                            <img width={60} height={60} src="../../../public/kakao.svg" />
                        </button>

                        <p className="modal-login-kakao-text">카카오 로그인</p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default LoginDialog