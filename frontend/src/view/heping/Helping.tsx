import { Link } from 'react-router-dom'
import './Helping.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '@mui/material';

function Helping() {

    const [errorHelpingData, setErrorHelpingData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:50000/errorHelpingData/get")
            .then(response => {
                setErrorHelpingData(response.data);
            })
            .catch(error => {
                console.error(error);  
            })
    }, [setErrorHelpingData])


    console.log(errorHelpingData);

    return (
        <div>
            <div>
                <Link to="/error/helping/insert">
                    <button className="helping-button">
                        헬핑! 등록하기 🎈
                    </button>
                </Link>

                <div className="helping-main-title">
                    <h3>헬핑 리스트</h3>
                    <h4>* 에러 분석을 기여할 시 포인트가 지급됩니다!</h4>
                </div>

                <Link to="/error/helping/chat">
                    <div className="helping-main-list">
                        <Card className="helping-main-card">
                            { errorHelpingData.map((data: any, index : any) => (
                                <>
                                    <div key={index} className="helping-main-card-content">
                                        <p>에러 발생: {data.helpingName}</p>
                                        <p className="helping-main-situation">{data.helpingSituation}</p>
                                        <p className="helping-main-request">{data.helpingRequest}</p>
                                    </div>

                                    <div key={index} className="helping-main-card-footer">
                                        <p>제시자: {data.helpingUserName}</p>
                                    </div>
                                </>

                            ))}
                        </Card>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Helping