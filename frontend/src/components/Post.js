import ReactTimeAgo from "react-time-ago";
import CommentList from "./CommentList";
import { useState, useContext } from "react";
import { UserContext } from "../App";
import { patchPost } from "../api/Posts";
import { EditButtons } from "./EditButtons";
import { BODY_CHAR_LIMIT, TITLE_CHAR_LIMIT } from "./CreatePost";
import { TextField } from "@mui/material";

function Post({ post, refreshPost }) {
  const [editing, setEditing] = useState(false);
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  function updateTitle(e) {
    setTitle(e.target.value.substring(0, TITLE_CHAR_LIMIT));
  }

  function updateBody(e) {
    setBody(e.target.value.substring(0, BODY_CHAR_LIMIT));
  }

  async function publishEdit() {
    const updatedPost = await patchPost(post, title, body);
    refreshPost(updatedPost);
    setEditing(false);
  }

  return (
    <div className="flex bg-slate-100 p-4 gap-2 rounded-md">
      <div className="min-w-[48px]">
        <img src={post.user.avatar_url} className="rounded-full w-12" />
      </div>
      <div className="flex flex-col p-2 pt-0 w-full gap-4">
        <div className="flex justify-between items-center min-h-12 gap-2">
          {!editing ? (
            <h3>{post.title}</h3>
          ) : (
            <TextField
              label="Title"
              className="flex-grow"
              value={title}
              onChange={updateTitle}
              InputProps={{ className: "bg-white" }}
              helperText={
                TITLE_CHAR_LIMIT - title.length + " characters remaining"
              }
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
          <TextField
            multiline
            minRows={4}
            maxRows={10}
            label="Body"
            value={body}
            onChange={updateBody}
            InputProps={{ className: "bg-white" }}
            helperText={BODY_CHAR_LIMIT - body.length + " characters remaining"}
          />
        )}
        <i className="font-light text-sm">
          Posted by {post.user.login}{" "}
          <ReactTimeAgo date={new Date(post.created_at)} locale="en-US" />
        </i>

        <CommentList post={post} />
      </div>
    </div>
  );
}

export default Post;
