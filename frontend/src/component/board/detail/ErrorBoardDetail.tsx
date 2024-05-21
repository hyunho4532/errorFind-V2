import './scss/ErrorBoardDetaill.scss';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ErrorBoardCommentForm from '../../form/ErrorBoardCommentForm';
import ErrorBoardCommentView from '../../../view/comment/ErrorBoardCommentView';

function ErrorBoardDetail() {
    const location = useLocation();
    const data = location.state || {};

    const [commentData, setCommentData] = useState([]);
    const [uid] = useState(data.uid);
    const [errorType] = useState(data.type);
    const [commentCount, setCommentCount] = useState(0);

    console.log(data.author);

    useEffect(() => {

        console.log(data.author);

        axios.post('https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app/commentData/get', {
            uid,
            type: errorType
        })
        .then(response => {
            setCommentData(response.data);
            setCommentCount(response.data.length);
        })
        .catch(error => {
            console.error(error);
        });
    }, [uid, errorType]);

    return (
        <article className="error-board-detail">
            <section className="error-board-detail-auth-info">
                <p className="error-board-detail-author">{data.uid}</p>
                <img className="error-board-detail-profile" src={data.profile} alt="profile"/>
            </section>

            <section>
                <p className="error-board-detail-date">{data.date}</p>
            </section>

            <hr />

            <div>
                <section className="error-board-detail-error">
                    <p className="error-board-detail-error-title">1. 에러 발생!</p>
                    <p className="error-board-detail-error-text">에러: {data.type}</p>
                </section>
            </div>

            <div>
                <section className="error-board-detail-content">
                    <p className="error-board-detail-content-title">2. 로그 내용</p>
                    <p className="error-board-detail-content-text">{data.content}</p>
                </section>
            </div>

            <div>
                <section className="error-board-detail-content">
                    <p className="error-board-detail-content-title">3. 에러가 발생된 시점</p>
                    <p className="error-board-detail-content-text">{data.situation}</p>
                </section>
            </div>

            <ErrorBoardCommentForm authuid={data.uid} type={data.type} />
            
            <ErrorBoardCommentView commentData={commentData} commentCount={commentCount} />
        </article>
    );
}

export default ErrorBoardDetail;
