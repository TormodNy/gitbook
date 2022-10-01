import { useEffect, useState } from "react";
import { getPosts } from "./api/Posts";

function App() {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (!posts) {
      getPosts().then(data => setPosts(data));
    }
  }, [])

  return (
    <div className="flex flex-col gap-2 w-full text-center">
      <h1 className="mt-12">Welcome to GitBook</h1>
      <p>This is a social media platform utilizing a GitHub repository as a database.</p>
      
      <div className="m-auto pt-1 p-4 w-[50vw] flex flex-col gap-2 bg-slate-200">
        <h2 className="underline">Posts</h2>
        {posts
          ? posts.map(post => (
              <div className="flex flex-col p-2 bg-slate-100 text-left gap-4">
                <h3>{post.title}</h3>
                <p className="whitespace-normal">{post.body}</p>
                <i className="font-light">Posted by {post.user.login} on {post.created_at}</i>
              </div>)
            )
          : <p>No posts found</p>
        }
      </div>
    </div>
  );
}

export default App;
