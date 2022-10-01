import { useEffect, useState } from "react";
import { getComments, getPosts } from "../api/Posts";
import Comment from "./Comment";

function CommentList ({ post }) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    if (!comments) {
      getComments(post).then(data => setComments(data));
    }
  })

  return (
    <div className="flex flex-col gap-2">
      {comments
        ? comments.map(comment => (<Comment key={comment.id} comment={comment} />))
        : <p>No comments found</p>
      }

      {/* <CreateComment /> */}
    </div>
  );
}

export default CommentList;