import { useEffect, useState } from "react";
import { getPosts } from "../api/Posts";
import CreatePost from "./CreatePost";
import Post from "./Post";
import RefreshBar from "./RefreshBar";

function PostList() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (!posts) {
      getPosts().then((data) => setPosts(data));
    }
  }, [posts]);

  function addPost(post) {
    setPosts([post, ...posts]);
  }

  function refreshPost(updatedPost) {
    setPosts(
      posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  }

  return (
    <div className="m-auto pt-2 p-6 xl:w-[50vw] md:w-[80vw] flex flex-col gap-2 bg-slate-200 rounded-lg">
      <h2>Posts</h2>
      <CreatePost addPost={addPost} />

      <RefreshBar setPosts={setPosts} />

      {posts ? (
        posts.map((post) => <Post key={post.id} post={post} refreshPost={refreshPost} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}

export default PostList;
