import ReactTimeAgo from "react-time-ago";
import CommentList from "./CommentList";
import { useState, useContext } from "react";
import { UserContext } from "../App";
import { patchPost } from "../api/Posts";
import { EditButtons } from "./EditButtons";
import { TitleInput } from "./common/TitleInput";
import { BodyInput } from "./common/BodyInput";
import { Reactions } from "./Reactions";

function Post({ post, refreshPost }) {
  const [editing, setEditing] = useState(false);
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  async function publishEdit() {
    const updatedPost = await patchPost(post, title, body);
    refreshPost(updatedPost);
    setEditing(false);
  }

  return (
    <div className="flex bg-slate-100 p-2 gap-2 rounded-md">
      <div className="min-w-[48px]">
        <img src={post.user.avatar_url} className="rounded-full w-12" />
      </div>
      <div className="flex flex-col p-2 pt-0 w-full gap-4">
        <div className="flex justify-between items-center min-h-12 gap-2">
          {!editing ? (
            <h3>{post.title}</h3>
          ) : (
            <TitleInput
              title={title}
              setTitle={setTitle}
              className="flex-grow"
            />
          )}
          {user.id === post.user.id && (
            <EditButtons
              editing={editing}
              setEditing={setEditing}
              publishEdit={publishEdit}
            />
          )}
        </div>
        {!editing ? (
          <p className="whitespace-normal">{post.body}</p>
        ) : (
          <BodyInput body={body} setBody={setBody} />
        )}
        <i className="font-light text-sm">
          Posted by {post.user.login}{" "}
          <ReactTimeAgo date={new Date(post.created_at)} locale="en-US" />
        </i>

        <Reactions post={post} refreshPost={refreshPost} />

        <CommentList post={post} />
      </div>
    </div>
  );
}

export default Post;
