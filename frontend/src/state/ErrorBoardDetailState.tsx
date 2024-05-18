interface ErrorBoardDetailState {
    searchParams: URLSearchParams,
    commentData: Comment[],
    uid: string | null,
    errorType: string | null
}

export default ErrorBoardDetailState