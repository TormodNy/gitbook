import { useContext, useEffect, useState } from "react";
import { getPosts } from "../api/Posts";
import { TokenContext } from "../App";
import CreatePost from "./CreatePost";
import Post from "./Post";

function PostList () {
  const [posts, setPosts] = useState(null);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    if (!posts) {
      getPosts(token).then(data => setPosts(data));
    }
  })

  return (
    <div className="m-auto pt-1 p-4 xl:w-[50vw] md:w-[80vw] flex flex-col gap-2 bg-slate-200">
      <h2>Posts</h2>
      {posts
        ? posts.map(post => (<Post key={post.id} post={post} />))
        : <p>No posts found</p>
      }

      <CreatePost />
    </div>
  );
}

export default PostList;
