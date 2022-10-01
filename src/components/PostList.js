import { useEffect, useState } from "react";
import { getPosts } from "../api/Posts";
import Post from "./Post";

function PostList () {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (!posts) {
      getPosts().then(data => setPosts(data));
    }
  })

  return (
    <div className="m-auto pt-1 p-4 w-[50vw] flex flex-col gap-2 bg-slate-200">
      <h2 className="underline">Posts</h2>
      {posts
        ? posts.map(post => (<Post post={post} />))
        : <p>No posts found</p>
      }
    </div>
  );
}

export default PostList;