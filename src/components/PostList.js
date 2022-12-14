import { useContext, useEffect, useState } from "react";
import { getPosts } from "../api/Posts";
import { UserContext } from "../App";
import CreatePost from "./CreatePost";
import Post from "./Post";
import RefreshBar from "./RefreshBar";

function PostList () {
  const [posts, setPosts] = useState(null);
  const { token } = useContext(UserContext);

  useEffect(() => {
    if (!posts) {
      getPosts(token).then(data => setPosts(data));
    }
  }, [posts])

  function addPost (post) {
    setPosts([post, ...posts])
  }

  return (
    <div className="m-auto pt-2 p-6 xl:w-[50vw] md:w-[80vw] flex flex-col gap-2 bg-slate-200 rounded-lg">
      <h2>Posts</h2>
      <CreatePost addPost={addPost} />

      <RefreshBar setPosts={setPosts} />

      {posts
        ? posts.map(post => (<Post key={post.id} post={post} />))
        : <p>No posts found</p>
      }
    </div>
  );
}

export default PostList;
