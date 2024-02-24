import { Button } from "@mui/material";
import { useState } from "react";
import { postPost } from "../api/Posts";
import { TitleInput } from "./common/TitleInput";
import { BodyInput } from "./common/BodyInput";

function CreatePost({ addPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function publishPost() {
    setTitle("");
    setBody("");

    const post = await postPost(title, body);
    addPost(post);
  }

  return (
    <div className="flex flex-col gap-2 pt-1 p-4 bg-slate-100 rounded-md">
      <h2>Create a post</h2>
      <TitleInput title={title} setTitle={setTitle} />
      <BodyInput body={body} setBody={setBody} />
      <Button variant="contained" onClick={publishPost}>
        Publish
      </Button>
    </div>
  );
}

export default CreatePost;
