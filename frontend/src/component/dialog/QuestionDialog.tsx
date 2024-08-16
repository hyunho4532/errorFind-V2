import { Modal } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import './index.scss'

export interface LoginDialogProps {
    modalIsOpen: boolean,
    setModalIsOpen: Dispatch<SetStateAction<boolean>>,
}

export function QuestionDialog(props: LoginDialogProps) {

    const questionClick = () => {
        props.setModalIsOpen(false);
    }

    return (
        <Modal 
            open={props.modalIsOpen}
            onClose={questionClick}>
            
            <div className="modal">
                <h3 className="Title">질문 등록</h3>
            </div>
        </Modal>
    )
}