import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { postPost } from "../api/Posts";

export const TITLE_CHAR_LIMIT = 60;
export const BODY_CHAR_LIMIT = 1000;

function CreatePost ({ addPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function publishPost () {
    setTitle("");
    setBody("");
    
    const post = await postPost(title, body);
    addPost(post);
  }

  function updateTitle (e) {
    setTitle(e.target.value.substring(0, TITLE_CHAR_LIMIT));
  }

  function updateBody (e) {
    setBody(e.target.value.substring(0, BODY_CHAR_LIMIT));
  }

  return (
    <div className="flex flex-col gap-2 pt-1 p-4 bg-slate-100 rounded-md">
      <h2>Create a post</h2>
      <TextField
        label="Title"
        value={title}
        onChange={updateTitle}
        InputProps={{className: "bg-white"}}
        helperText={TITLE_CHAR_LIMIT - title.length + " characters remaining"}
      />
      <TextField
        multiline
        minRows={4}
        maxRows={10}
        label="Body"
        value={body}
        onChange={updateBody}
        InputProps={{className: "bg-white"}}
        helperText={BODY_CHAR_LIMIT - body.length + " characters remaining"}
      />
      <Button variant="contained" onClick={publishPost}>Publish</Button>
    </div>
  );
}

export default CreatePost;
