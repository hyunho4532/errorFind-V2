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
                console.log(errorHelpingData);
            })
            .catch(error => {
                console.error(error);  
            })
    }, [errorHelpingData])


    console.log(errorHelpingData);

    return (
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

            <div className="helping-main-list">
                {errorHelpingData.map((data: any, index: any) => (
                    <div className="helping-main-card" key={index}>
                        <Link to={`/error/helping/chat?uid=${data.id}`}>
                            <Card>
                                <div className="helping-main-card-content">
                                    <p>에러 발생: {data.helpingName}</p>
                                    <p className="helping-main-situation">{data.helpingSituation}</p>
                                    <p className="helping-main-request">{data.helpingRequest}</p>
                                </div>
                                <div className="helping-main-card-footer">
                                    <p>제시자: {data.helpingUserName}</p>
                                </div>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Helping