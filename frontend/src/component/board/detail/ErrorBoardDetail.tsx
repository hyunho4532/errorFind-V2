import { useLocation } from "react-router-dom";

function ErrorBoardDetail() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const author = searchParams.get('author');
    const type = searchParams.get('type');

    return (
        <div>
            <h1>에러 발생: {type}</h1>
            <p>{author}</p>
        </div>
    )
}

export default ErrorBoardDetail