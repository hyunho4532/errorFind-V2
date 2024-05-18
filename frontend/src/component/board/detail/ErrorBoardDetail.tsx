import './scss/ErrorBoardDetaill.scss'
import React from "react";
import ErrorBoardDetailState from "../../../state/ErrorBoardDetailState";
import ErrorBoardCommentForm from "../../form/ErrorBoardCommentForm";
import axios from 'axios';

class ErrorBoardDetail extends React.Component<{}, ErrorBoardDetailState> {

    constructor(props: any) {
        super(props);

        this.state = {
            searchParams: new URLSearchParams(window.location.search),
            commentData: []
        }
    }

    componentDidMount(): void {
        axios.get('http://localhost:50000/commentData/get')
            .then(response => {
                this.setState({ commentData: response.data });
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

                <ErrorBoardCommentForm authuid={searchParams.get('uid')} />

            </article>
        )
    }
}

export default ErrorBoardDetail