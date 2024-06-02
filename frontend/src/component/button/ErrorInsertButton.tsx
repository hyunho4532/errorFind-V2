import { useRecoilValue } from 'recoil'
import '../../view/write/scss/component/Button.scss'
import { ErrorBoard } from '../../model/ErrorBoard'
import { errorBoard } from '../../recoil/Atom'
import axios from 'axios';
import { useState } from 'react'
import { Button, Modal, Typography } from '@mui/material'
import uuid from 'react-uuid';

function ErrorInsertButton() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const errorBoardData = useRecoilValue<ErrorBoard>(errorBoard);

    const authUid: any = localStorage.getItem('authuid');
    const user: any = localStorage.getItem('user');

    const auth = JSON.parse(authUid);
    const authFromJson = JSON.parse(user);

    const randomUid = uuid();

    const date = new Date();
    const formattedDateData = date.toLocaleDateString('ko-KR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const data = {
        id: randomUid,
        authuid: auth.authuid,
        author: authFromJson.userData.nickname,
        selectedPlatform: errorBoardData.selectedPlatform,
        errorType: errorBoardData.errorType,
        errorFile: errorBoardData.errorFile,
        errorSituation: errorBoardData.errorSituation,
        profile: authFromJson.userData.profile,
        errorStatus: "진행 중",
        formattedDate: formattedDateData,
    };

    const errorInsertDialog = () => {
        setModalIsOpen(true);
    }

    const errorInsertButton= () => {
        axios.post('http://localhost:50000/errorBoardData', data)
            .then(response => {
                console.log('응답 받음:', response.data);
            })
            .catch(error => {
                console.error('에러 발생:', error);
        });
    }

    const handleClose = () => {
        setModalIsOpen(false);
    }

    return (
        <>
            <button className ="error-insert-button" onClick={errorInsertDialog}>
                에러 등록 완료!
            </button>

            <Modal
                open={modalIsOpen}
                onClose={handleClose}>

                <div className="modal">
                    <Typography className='modal-error-insert'>에러 등록하기!</Typography>
                    <Typography className='modal-confirm-registration'>정말 등록하시겠습니까?</Typography>
                    <Button className='modal-error-check' onClick={errorInsertButton}>확인</Button>
                    <Button className='modal-error-cancel' onClick={handleClose}>닫기</Button>
                </div>
                
            </Modal>
            
        </>
    )
}


export default ErrorInsertButton