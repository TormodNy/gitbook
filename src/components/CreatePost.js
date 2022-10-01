import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { postPost } from "../api/Posts";

function CreatePost () {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [token, setToken] = useState("");

  function publishPost () {
    postPost(title, body, token);
    setTitle("");
    setBody("");
  }

  return (
    <div className="flex flex-col gap-2 p-2 bg-slate-100">
      <h2>Create a post</h2>
      <TextField label="Title" value={title} onChange={e => setTitle(e.target.value)} className="bg-white"></TextField>
      <TextField multiline rows={4} label="Body" value={body} onChange={e => setBody(e.target.value)} className="bg-white"></TextField>
      <TextField label="Token" value={token} onChange={e => setToken(e.target.value)} className="bg-white" helperText="Used for authentication"></TextField>
      <Button variant="contained" onClick={publishPost}>Publish</Button>
    </div>
  );
}

export default CreatePost;