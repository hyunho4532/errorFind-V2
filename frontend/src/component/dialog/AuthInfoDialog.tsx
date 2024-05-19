import { Modal, Typography } from "@mui/material"
import userInfoInsert from "../../data/user/UserInfo"
import { AuthInfoDialogProps } from "./props/AuthInfoDialogProps"

function AuthInfoDialog(props: AuthInfoDialogProps) {

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

    return (
        <Modal
            open={props.userModalIsOpen}
            onClose={() => props.setUserModalIsOpen(false)}>

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
    )
}

export default AuthInfoDialog