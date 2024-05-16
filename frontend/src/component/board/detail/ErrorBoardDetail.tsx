import { useLocation } from "react-router-dom";
import './scss/ErrorBoardDetaill.scss'

function ErrorBoardDetail() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const author = searchParams.get('author');
    const type = searchParams.get('type');
    const profile = searchParams.get('profile');
    const date = searchParams.get('date');

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

            <section className="error-board-detail-error">
                <p>에러가 발생했습니다!</p>
                <p>에러: </p>
            </section>
            
        </article>
    )
}

export default ErrorBoardDetail