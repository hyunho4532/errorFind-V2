import { Modal, Typography } from "@mui/material"
import { useState } from "react"

function LoginDialog() {

    const [modalIsOpen, setModalIsOpen] = useState(true);

    const modalClick = () => {
        setModalIsOpen(false);
    }

    return (
        <Modal
            open={modalIsOpen}
            onClose={modalClick}>

            <div className="modal">
                <Typography className="modal-login-title">ErrorFind를 이용해주셔서 감사합니다.</Typography>
            </div>

        </Modal>
    )
}

export default LoginDialog