import { useEffect, useState } from "react"
import ErrorBoardCommentViewProps from "./props/ErrorBoardCommentViewProps"
import './scss/ErrorBoardCommentView.scss'

function ErrorBoardCommentView(props : ErrorBoardCommentViewProps) {

    const [likeCounts, setLikeCounts] = useState<{ [key: string]: number }>({});

    const commentLikeOnClick = () => {

    };

    useEffect(() => {
        console.log(likeCounts);
    }, [likeCounts]);

    return (
        <div className="errorboard-component-view-main">
            <p className="errorboard-comment">{props.commentCount}개의 댓글</p>

            <hr />

            { props.commentData.map((comment: any, index: any) => (
                <div key={index} className="errorboard-comment-view">
                    <div className="errorboard-comment-info">
                        <p className="errorboard-comment-info-data">{comment.conickname} • {comment.todayDate}</p>
                    </div>

                    <p className="errorboard-comment-comment">{comment.comment}</p>

                    <div style={{ display: "flex" }}>
                        <p onClick={() => commentLikeOnClick}>좋아요: {comment.like}</p>
                        <p className="errorboard-comment-unlike">싫어요: {comment.unlike}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ErrorBoardCommentView