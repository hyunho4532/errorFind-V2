import ErrorBoardCommentViewProps from "./props/ErrorBoardCommentViewProps"
import './scss/ErrorBoardCommentView.scss'
import CommentView from "../../component/comment/CommentView";

function ErrorBoardCommentView(props : ErrorBoardCommentViewProps) {

    return (
        <CommentView
            commentCount={props.commentCount}
            commentData={props.commentData} />
    )
}

export default ErrorBoardCommentView