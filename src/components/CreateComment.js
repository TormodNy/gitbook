import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { postComments } from "../api/Posts";
import { UserContext } from "../App";

function CreateComment ({ post, addComment }) {
  const bodyCharLimit = 1000;

  const [body, setBody] = useState("");
  const { token } = useContext(UserContext);

  async function publishComment () {
    setBody("");
    
    const comment = await postComments(post, body, token);
    addComment(comment);
  }

  function updateBody (e) {
    setBody(e.target.value.substring(0, bodyCharLimit));
  }

  return (
    <div className="flex flex-col gap-2 pt-1 p-2 bg-slate-100">
      <TextField
        multiline
        minRows={2}
        maxRows={10}
        label="Comment"
        value={body}
        onChange={updateBody}
        InputProps={{className: "bg-white"}}
        helperText={bodyCharLimit - body.length + " characters remaining"}
      />
      <Button variant="contained" onClick={publishComment}>Publish</Button>
    </div>
  );
}

export default CreateComment;
