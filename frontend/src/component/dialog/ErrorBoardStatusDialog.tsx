import { Dialog } from "@mui/material"
import ErrorBoardStatusDialogProps from "./props/ErrorBoardStatusDialogProps"

function ErrorBoardStatusDialog(props: ErrorBoardStatusDialogProps) {
    
    const handleClose = () => {
        props.setDialogOpen(false);
    }

    return (
        <div>
            <Dialog
                style={{ width: '740px', margin: '0 auto' }}
                open={props.dialogOpen}
                onClose={handleClose}>

                <div>
                    <h2>현재 진행 중인 에러는 해결하셨나요?? 🤗</h2>
                    <button onClick={handleClose}>Close</button>
                </div>
            </Dialog>
        </div>
    )
}

export default ErrorBoardStatusDialog