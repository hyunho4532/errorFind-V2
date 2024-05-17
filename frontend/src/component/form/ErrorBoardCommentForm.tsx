import React from "react";
import './scss/ErrorBoardCommendForm.scss'
import ErrorBoardCommentState from "../../state/ErrorBoardCommentState";

class ErrorBoardCommentForm extends React.Component<{}, ErrorBoardCommentState> {

    constructor(props: any) {
        super(props)
        
        this.state = {
            comment: ''
        }

        this.commentInsert = this.commentInsert.bind(this);
    }

    commentOnChange = (e: any) => {
        this.setState({ comment: e.target.value });
    }

    commentInsert() {
        console.log(this.state.comment);
    }

    render(): React.ReactNode {
        return (
            <footer className="error-board-comment">
                <input className="error-board-comment-input" type="text" placeholder="댓글을 입력하세요" onChange={this.commentOnChange}></input>
                <button className="error-board-comment-button" onClick={this.commentInsert}>입력</button>
            </footer>
        )
    }
}

export default ErrorBoardCommentForm;