import '@toast-ui/editor/dist/toastui-editor.css';
import FirstGroup from './group/FirstGroup';
import SecondGroup from './group/SecondGroup';
import ThirdGroup from './group/ThirdGroup';
import ErrorInsertButton from '../../component/button/ErrorInsertButton';
import Card from '@mui/material/Card';
import FourthGroup from './group/FourthGroup';

function errorWriteBoard() {

    return (
        <>
            <Card variant="outlined">
                <FirstGroup />

                <SecondGroup />

                <ThirdGroup />

                <FourthGroup />

                <ErrorInsertButton />
            </Card>
        </>
    )
}

export default errorWriteBoard;