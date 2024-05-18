interface ErrorBoardCommentState {
    
    // 에러 게시 글 올린 사람의 uid
    authid: string

    // 댓글 내용
    comment: string

    // 댓글 단 사람의 uid
    couid: string

    // 댓글 단 사람의 닉네임
    conickname: string

    // 좋아요 표시
    like: number

    // 싫어요 표시
    unlike: number
}

export default ErrorBoardCommentState