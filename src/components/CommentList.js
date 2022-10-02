import { useContext, useEffect, useState } from "react";
import { getComments, getPosts } from "../api/Posts";
import { TokenContext } from "../App";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function CommentList ({ post }) {
  const [comments, setComments] = useState(null);

  const { token } = useContext(TokenContext);

  useEffect(() => {
    if (!comments) {
      getComments(post, token).then(data => setComments(data));
    }
  })

  return (
    <div className="flex flex-col gap-2">
      {comments
        ? comments.map(comment => (<Comment key={comment.id} comment={comment} />))
        : <p>No comments found</p>
      }

      <CreateComment post={post} />
    </div>
  );
}

export default CommentList;
