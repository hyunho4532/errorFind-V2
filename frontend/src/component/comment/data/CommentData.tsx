import React from "react";
import { CommentDataProps } from "./props/CommentDataProps";

class CommentData extends React.Component<CommentDataProps> {
    render() {
        return (
            <div>
                { this.props.commentData.map((comment: any, index: any) => (
                    <div key={index} className="errorboard-comment-view">
                        <div className="errorboard-comment-info">
                            <p className="errorboard-comment-info-data">{comment.conickname} • {comment.todayDate}</p>
                        </div>

                        <p className="errorboard-comment-comment">{comment.comment}</p>

                        <div style={{ display: "flex" }}>
                            <p>좋아요: {comment.like}</p>
                            <p className="errorboard-comment-unlike">싫어요: {comment.unlike}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default CommentData