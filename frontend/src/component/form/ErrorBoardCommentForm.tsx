import React from "react";
import './scss/ErrorBoardCommendForm.scss';
import ErrorBoardCommentState from "../../state/ErrorBoardCommentState";
import ErrorBoardCommentProps from "./props/ErrorBoardCommentProps";
import axios from "axios";
import uuid from "react-uuid";
import formatDate from "../../util/FormatDate";
import EmojiPicker from "emoji-picker-react";

class ErrorBoardCommentForm extends React.Component<ErrorBoardCommentProps, ErrorBoardCommentState> {

    token = localStorage.getItem('sb-cvbkuzrehmguxtilpgkl-auth-token');
    userFromJson = JSON.parse(this.token!);

    date = new Date();

    todayDate = formatDate(this.date!);

    constructor(props: ErrorBoardCommentProps) {
        super(props);
        
        this.state = {
            id: uuid(),
            authid: props.authuid,
            type: props.type,
            comment: '', 
            couid: this.userFromJson.user.id,
            conickname: this.userFromJson.user.user_metadata.name,
            like: 0,
            unlike: 0,
            todayDate: this.todayDate,
            emojiStatus: false
        };

        this.commentInsert = this.commentInsert.bind(this);
        this.onEmojiClick = this.onEmojiClick.bind(this);
    }

    commentOnChange = (e: any) => {
        this.setState({ comment: e.target.value });
    }

    emojiOnChange = (e: boolean) => {
        this.setState({ emojiStatus: e });
    }

    onEmojiClick(data: any) {
        this.setState({ comment: this.state.comment + data.emoji });
    }

    commentInsert() {
        axios.post('https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app/commentData', this.state) 
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            }); 
    }

    render(): React.ReactNode {
        return (
            <footer className="error-board-comment">
                <input 
                    className="error-board-comment-input" 
                    type="text" 
                    placeholder="댓글을 입력하세요" 
                    value={this.state.comment}
                    onChange={this.commentOnChange}
                />
                <section className="error-board-comment-section">
                    <img 
                        src="../../../public/emoji_logo.png" 
                        className="error-board-comment-emoji" 
                        onClick={() => this.emojiOnChange(!this.state.emojiStatus)}
                    />
                    <button className="error-board-comment-button" onClick={this.commentInsert}>
                        입력
                    </button>
                </section>

                {this.state.emojiStatus && (
                    <EmojiPicker 
                        className="error-board-comment-emoji-picker" 
                        onEmojiClick={this.onEmojiClick}
                    />
                )}
            </footer>
        ); 
    }
}

export default ErrorBoardCommentForm;
