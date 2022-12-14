import ReactTimeAgo from 'react-time-ago'
import CommentList from './CommentList';

function Post ({ post }) {
  return (
    <div className="flex bg-slate-100 p-4 gap-2 rounded-md">
      <div className="min-w-[48px]">
        <img src={post.user.avatar_url} className="rounded-full w-12" />
      </div>
      <div className="flex flex-col p-2 w-full gap-4">
    
        <h3>{post.title}</h3>
        <p className="whitespace-normal">{post.body}</p>
        <i className="font-light text-sm">Posted by {post.user.login} <ReactTimeAgo date={new Date(post.created_at)} locale="en-US"/></i>

        <CommentList post={post} />
      </div>
    </div>
  );
}

export default Post;
