import { useEffect, useState } from "react";
import { getComments } from "../api/Posts";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function CommentList({ post }) {
  const [comments, setComments] = useState(null);

  function addComment(comment) {
    setComments([comment, ...comments]);
  }

  function refreshComment(updatedComment) {
    setComments(
      comments.map((comment) =>
        comment.id === updatedComment.id ? updatedComment : comment
      )
    );
  }

  useEffect(() => {
    if (!comments) {
      getComments(post).then((data) => setComments(data));
    }
  }, [comments, post]);

  return (
    <div className="flex flex-col gap-2">
      {comments ? (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            refreshComment={refreshComment}
          />
        ))
      ) : (
        <p>No comments found</p>
      )}

      <CreateComment post={post} addComment={addComment} />
    </div>
  );
}

export default CommentList;
