import React from "react";
import './scss/ErrorBoardCommendForm.scss'

class ErrorBoardCommentForm extends React.Component {
    render(): React.ReactNode {
        return (
            <footer className="error-board-comment">
                <input className="error-board-comment-input" type="text" placeholder="댓글을 입력하세요"></input>
                <button className="error-board-comment-button">입력</button>
            </footer>
        )
    }
}

export default ErrorBoardCommentForm;