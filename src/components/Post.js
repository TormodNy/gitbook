function Post ({ post }) {
  return (
    <div className="flex flex-col p-2 bg-slate-100 text-left gap-4">
      <h3>{post.title}</h3>
      <p className="whitespace-normal">{post.body}</p>
      <i className="font-light">Posted by {post.user.login} on {post.created_at}</i>
    </div>
  );
}

export default Post;