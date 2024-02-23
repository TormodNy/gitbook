import ReactTimeAgo from 'react-time-ago';

function Comment ({ comment }) {
  return (
    <div className="flex bg-slate-200 p-4 gap-2 rounded-md">
      <div className="min-w-[48px]">
        <img src={comment.user.avatar_url} className="rounded-full w-12" />
      </div>
      <div className="flex flex-col p-2 gap-4">
        <p className="whitespace-normal">{comment.body}</p>
        <i className="font-light text-sm">Posted by {comment.user.login} <ReactTimeAgo date={new Date(comment.created_at)} locale="en-US"/></i>
      </div>
    </div>
  );
}

export default Comment;
