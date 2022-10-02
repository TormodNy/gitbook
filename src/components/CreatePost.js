import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { postPost } from "../api/Posts";
import { UserContext } from "../App";

function CreatePost () {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { token } = useContext(UserContext);

  function publishPost () {
    postPost(title, body, token);
    setTitle("");
    setBody("");
  }

  return (
    <div className="flex flex-col gap-2 pt-1 p-4 bg-slate-100 rounded-md">
      <h2>Create a post</h2>
      <TextField label="Title" value={title} onChange={e => setTitle(e.target.value)} InputProps={{className: "bg-white"}}></TextField>
      <TextField multiline rows={4} label="Body" value={body} onChange={e => setBody(e.target.value)} InputProps={{className: "bg-white"}}></TextField>
      <Button variant="contained" onClick={publishPost}>Publish</Button>
    </div>
  );
}

export default CreatePost;
