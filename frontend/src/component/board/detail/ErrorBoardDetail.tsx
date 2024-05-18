import { useLocation } from "react-router-dom";
import './scss/ErrorBoardDetaill.scss'
import ErrorBoardCommentForm from "../../form/ErrorBoardCommentForm";

function ErrorBoardDetail() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const author = searchParams.get('author');
    const uid = searchParams.get('uid');
    const type = searchParams.get('type');
    const profile = searchParams.get('profile');
    const date = searchParams.get('date');
    const content = searchParams.get('content');
    const situation = searchParams.get('situation');

    return (
        <article className="error-board-detail">
            <section className="error-board-detail-auth-info">
                <p className="error-board-detail-author">{author}</p>
                <img className="error-board-detail-profile" src={profile!} />
            </section>

            <section>
                <p className="error-board-detail-date">{date}</p>
            </section>

            <hr />

            <div>
                <section className="error-board-detail-error">
                    <p className="error-board-detail-error-title">1. 에러 발생!</p>
                    <p className="error-board-detail-error-text">에러: {type}</p>
                </section>
            </div>

            <div>
                <section className="error-board-detail-content">
                    <p className="error-board-detail-content-title">2. 로그 내용</p>
                    <p className="error-board-detail-content-text">{content}</p>
                </section>
            </div>

            <div>
                <section className="error-board-detail-content">
                    <p className="error-board-detail-content-title">3. 에러가 발생된 시점</p>
                    <p className="error-board-detail-content-text">{situation}</p>
                </section>
            </div>

            <ErrorBoardCommentForm authuid={uid!} />

        </article>
    )
}

export default ErrorBoardDetail