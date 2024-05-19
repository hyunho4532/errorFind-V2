import { Card } from '@mui/material';
import './ErrorBoard.scss'
import { Link } from 'react-router-dom';

function ErrorBoard(props: any) {
    const itemsPerPage = 2;
    const startIndex = (props.page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayData = props.errorBoardData.slice(startIndex, endIndex);

    const deleteOnClick = (e: any) => {
        alert(e);
    }

    return (
        <>
            <h2 className="main-component-title">최근에 등록한 에러 목록들 🥇</h2>
            <div className="main-component">
                {displayData.map((error: any, index: any) => (
                    <Card className="main-card">
                        <Link to={`http://localhost:50000/detail?author=${error.author}&uid=${error.authuid}&type=${error.errorType}&profile=${error.profile}&date=${error.formattedDate}&content=${error.errorFile}&situation=${error.errorSituation}`} className="main-link-style">
                            <div key={index} className="main-card-component">
                                
                                <div className="main-card-board-datas">
                                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                        <p className="main-type-text">{error.errorType}</p>
                                        <img onClick={(e) => {
                                            e.preventDefault();
                                            deleteOnClick(e);
                                        }} className="main-type-delete" src="../../../public/delete.svg" width={20} height={20}></img>
                                    </div>
                                    
                                    {error.errorFile.length >= 13 ? (
                                        <p className="main-content-text">{`에러 내용: ${error.errorFile.substring(0, 32)}...`}</p>
                                    ) : (
                                        <p className="main-content-text">{`에러 내용: ${error.errorFile}`}</p>
                                    )}
                                    
                                    <div className="main-card-board-data">
                                        <p className="main-author-text">{error.author}</p>
                                        <img className="main-profile" src={error.profile} width="50px" height="50px" />
                                    </div>

                                    <div>
                                        <p className="main-formatted-date-text">{error.formattedDate}</p>
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