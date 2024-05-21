import Comment from "../model/Comment"

interface ErrorBoardDetailState {
    commentData: Comment[],
    uid: string | null,
    errorType: string | null,
    commentCount: number | null
}

export default ErrorBoardDetailState