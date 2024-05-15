import { Card } from '@mui/material';
import './ErrorBoard.scss'
import { Link } from 'react-router-dom';

function ErrorBoard(props: any) {
    const itemsPerPage = 2;
    const startIndex = (props.page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayData = props.errorBoardData.slice(startIndex, endIndex);

    return (
        <>
            <h2 className="main-component-title">최근에 등록한 에러 목록들 🥇</h2>
            <div className="main-component">
                {displayData.map((error: any, index: any) => (
                    <Card className="main-card">
                        <Link to={`https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app/detail?author=${error.author}&type=${error.errorTypeData}`} className="main-link-style">
                        <div key={index} className="main-card-component">
                            
                            <div className="main-card-board-datas">
                                <p className="main-type-text">{error.errorTypeData}</p>
                                
                                {error.errorFileData.length >= 13 ? (
                                    <p className="main-content-text">{`에러 내용: ${error.errorFileData.substring(0, 32)}...`}</p>
                                ) : (
                                    <p className="main-content-text">{`에러 내용: ${error.errorFileData}`}</p>
                                )}
                                
                                <div className="main-card-board-data">
                                    <p className="main-author-text">{error.author}</p>
                                    <p className="main-formatted-date-text">{error.formattedDateData}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default ErrorBoard;