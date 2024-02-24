import { useContext, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import { UserContext } from "../App";
import { BodyInput } from "./common/BodyInput";
import { EditButtons } from "./EditButtons";
import { patchComment } from "../api/Posts";

function Comment({ comment, refreshComment }) {
  const [editing, setEditing] = useState(false);
  const { user } = useContext(UserContext);

  const [body, setBody] = useState(comment.body);

  async function publishEdit() {
    const updatedComment = await patchComment(comment, body);
    refreshComment(updatedComment);
    setEditing(false);
  }

  return (
    <div className="flex bg-slate-200 p-4 gap-2 rounded-md">
      <div className="min-w-[48px]">
        <img src={comment.user.avatar_url} className="rounded-full w-12" />
      </div>
      <div className="flex flex-col p-2 gap-4 w-full">
        <div className="flex justify-between gap-2">
          {!editing ? (
            <p className="whitespace-normal">{comment.body}</p>
          ) : (
            <BodyInput body={body} setBody={setBody} className="flex-grow" />
          )}
          {user.id === comment.user.id && (
            <EditButtons
              editing={editing}
              setEditing={setEditing}
              publishEdit={publishEdit}
            />
          )}
        </div>
        <i className="font-light text-sm">
          Posted by {comment.user.login}{" "}
          <ReactTimeAgo date={new Date(comment.created_at)} locale="en-US" />
        </i>
      </div>
    </div>
  );
}

export default Comment;
