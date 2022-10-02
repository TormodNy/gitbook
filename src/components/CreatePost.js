import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { postPost } from "../api/Posts";
import { UserContext } from "../App";

function CreatePost ({ addPost }) {
  const titleCharLimit = 60;
  const bodyCharLimit = 1000;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { token } = useContext(UserContext);

  async function publishPost () {
    setTitle("");
    setBody("");
    
    const post = await postPost(title, body, token);
    addPost(post);
  }

  function updateTitle (e) {
    setTitle(e.target.value.substring(0, titleCharLimit));
  }

  function updateBody (e) {
    setBody(e.target.value.substring(0, bodyCharLimit));
  }

  return (
    <div className="flex flex-col gap-2 pt-1 p-4 bg-slate-100 rounded-md">
      <h2>Create a post</h2>
      <TextField
        label="Title"
        value={title}
        onChange={updateTitle}
        InputProps={{className: "bg-white"}}
        helperText={titleCharLimit - title.length + " characters remaining"}
      />
      <TextField
        multiline
        minRows={4}
        maxRows={10}
        label="Body"
        value={body}
        onChange={updateBody}
        InputProps={{className: "bg-white"}}
        helperText={bodyCharLimit - body.length + " characters remaining"}
      />
      <Button variant="contained" onClick={publishPost}>Publish</Button>
    </div>
  );
}

export default CreatePost;
