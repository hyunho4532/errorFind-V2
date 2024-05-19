import { Modal, Typography } from "@mui/material"
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import UserSetItem from "../../storage/UserSetItem";
import { jwtDecode } from "jwt-decode";
import { LoginDialogProps } from "./props/LoginDialogProps";

function LoginDialog(props: LoginDialogProps) {

    const clientId = '975201873312-kkmb6gv4usaond240kaecujn4vmqd695.apps.googleusercontent.com'

    return (
        <Modal
            open={props.modalIsOpen}
            onClose={() => props.setModalIsOpen(false)}>

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
                                        const profile = credentialResponseDecoded.picture;

                                        UserSetItem(email, authuid, profile);
                                        
                                        props.setUserData({ ...props.userData, authuid: authuid, email: email, profile: profile });
                                        
                                        props.setModalIsOpen(false);
                                        props.setUserModalIsOpen(true);
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
    )
}

export default LoginDialog