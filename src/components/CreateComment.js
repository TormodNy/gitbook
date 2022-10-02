import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { postComments } from "../api/Posts";
import { TokenContext } from "../App";

function CreateComment ({ post }) {
  const [body, setBody] = useState("");

  const { token } = useContext(TokenContext);

  function publishComment () {
    postComments(post, body, token);
    setBody("");
  }

  return (
    <div className="flex flex-col gap-2 pt-1 p-2 bg-slate-100">
      <TextField multiline rows={2} label="Comment" value={body} onChange={e => setBody(e.target.value)} className="bg-white"></TextField>
      <Button variant="contained" onClick={publishComment}>Publish</Button>
    </div>
  );
}

export default CreateComment;
