import { useEffect } from "react"
import ErrorBoardCommentViewProps from "./props/ErrorBoardCommentViewProps"
import './scss/ErrorBoardCommentView.scss'

function ErrorBoardCommentView(props: ErrorBoardCommentViewProps) {

    useEffect(() => {

    });

    return (
        <div className="errorboard-component-view-main">
            <p className="errorboard-comment">댓글</p>

            { props.commentData.map((comment: any, index: any) => (
                <div key={index} className="errorboard-comment-view">
                    <p className="errorboard-comment-nickname">{comment.conickname}</p>
                    <p className="errorboard-comment-comment">{comment.comment}</p>
                </div>
            ))}
        </div>
    )
}

export default ErrorBoardCommentView