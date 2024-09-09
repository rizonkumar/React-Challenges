import React from "react";
import ReplyComment from "./ReplyComment";

const CommentBox = () => {
  return (
    <div className="comment-container">
      <div className="comment-header">
        <p className="comment-value">Comment</p>
        <div className="comment-actions">
          <button className="reply-btn">Reply</button>
          <button className="reply-delete">Delete</button>
        </div>
      </div>
      <ReplyComment />
    </div>
  );
};

export default CommentBox;
