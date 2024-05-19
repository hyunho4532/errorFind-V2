import Comment from "../../../model/Comment";

export interface CommentViewProps {
    commentCount: number | null,
    commentData: Comment[]
}