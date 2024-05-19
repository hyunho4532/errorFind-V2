import './scss/ErrorBoardDetaill.scss'
import React from "react";
import ErrorBoardDetailState from "../../../state/ErrorBoardDetailState";
import ErrorBoardCommentForm from "../../form/ErrorBoardCommentForm";
import axios from 'axios';
import ErrorBoardCommentView from '../../../view/comment/ErrorBoardCommentView';

class ErrorBoardDetail extends React.Component<{}, ErrorBoardDetailState> {

    constructor(props: any) {
        super(props);

        const searchParams = new URLSearchParams(window.location.search);

        this.state = {
            searchParams: searchParams,
            commentData: [],
            uid: searchParams.get('uid'),
            errorType: searchParams.get('type'),
            commentCount: 0
        }

        console.log(this.state.commentData);
    }

    componentDidMount(): void {
        axios.post('http://localhost:50000/commentData/get', {
            uid: this.state.uid,
            type: this.state.errorType
        })
            .then(response => {
                this.setState({ commentData: response.data, commentCount: response.data.length });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {

        const searchParams = this.state.searchParams

        return (
            <article className="error-board-detail">
                <section className="error-board-detail-auth-info">
                    <p className="error-board-detail-author">{searchParams.get('author')}</p>
                    <img className="error-board-detail-profile" src={searchParams.get('profile')!} />
                </section>

                <section>
                    <p className="error-board-detail-date">{searchParams.get('date')}</p>
                </section>

                <hr />

                <div>
                    <section className="error-board-detail-error">
                        <p className="error-board-detail-error-title">1. 에러 발생!</p>
                        <p className="error-board-detail-error-text">에러: {searchParams.get('type')}</p>
                    </section>
                </div>

                <div>
                    <section className="error-board-detail-content">
                        <p className="error-board-detail-content-title">2. 로그 내용</p>
                        <p className="error-board-detail-content-text">{searchParams.get('content')}</p>
                    </section>
                </div>

                <div>
                    <section className="error-board-detail-content">
                        <p className="error-board-detail-content-title">3. 에러가 발생된 시점</p>
                        <p className="error-board-detail-content-text">{searchParams.get('situation')}</p>
                    </section>
                </div>

                <ErrorBoardCommentForm authuid={searchParams.get('uid')} type={searchParams.get('type')} />
              
                <ErrorBoardCommentView commentData={this.state.commentData} commentCount={this.state.commentCount} />

            </article>
        )
    }
}

export default ErrorBoardDetail