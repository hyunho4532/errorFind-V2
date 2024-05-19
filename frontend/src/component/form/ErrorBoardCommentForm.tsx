import React from "react";
import './scss/ErrorBoardCommendForm.scss'
import ErrorBoardCommentState from "../../state/ErrorBoardCommentState";
import ErrorBoardCommentProps from "./props/ErrorBoardCommentProps";
import axios from "axios";
import uuid from "react-uuid";
import formatDate from "../../util/FormatDate";

class ErrorBoardCommentForm extends React.Component<ErrorBoardCommentProps, ErrorBoardCommentState> {

    user = localStorage.getItem('user');
    userFromJson = JSON.parse(this.user!);

    date = new Date();

    todayDate = formatDate(this.date!);

    constructor(props: ErrorBoardCommentProps) {
        super(props)
        
        this.state = {
            id: uuid(),
            authid: props.authuid,
            type: props.type,
            comment: '', 
            couid: this.userFromJson.userData.authuid,
            conickname: this.userFromJson.userData.nickname,
            like: 0,
            unlike: 0,
            todayDate: this.todayDate
        }

        this.commentInsert = this.commentInsert.bind(this);
    }

    commentOnChange = (e: any) => {
        this.setState({ comment: e.target.value });
    }

    commentInsert() {
        axios.post('http://localhost:50000/commentData', this.state) 
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            }) 
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