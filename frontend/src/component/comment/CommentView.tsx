import React from "react";
import { CommentViewProps } from "./props/CommentViewProps";
import CommentData from "./data/CommentData";

class CommentView extends React.Component<CommentViewProps> {

    render() {
        return (
            <div className="errorboard-component-view-main">
                <p className="errorboard-comment">{this.props.commentCount}개의 댓글</p>

                <hr />

                <CommentData
                    commentData={this.props.commentData} />
            </div>
        );
    }
}

export default CommentView