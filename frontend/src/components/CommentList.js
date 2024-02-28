import { useEffect, useState } from "react";
import { getComments } from "../api/Posts";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { Button } from "@mui/material";

function CommentList({ post }) {
  const [comments, setComments] = useState(null);
  const [count, setCount] = useState(1);

  function addComment(comment) {
    setComments([...comments, comment]);
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
      {comments && count < comments.length && (
        <Button variant="outlined" onClick={() => setCount(count + 5)}>
          Load more
        </Button>
      )}
      {comments ? (
        comments
          .slice(comments.length - count)
          .map((comment) => (
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
