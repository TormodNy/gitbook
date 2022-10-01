import { TextField, Button } from "@mui/material";

function CreatePost () {
  return (
    <div className="flex flex-col gap-2 p-2 bg-slate-100">
      <h2>Create a post</h2>
      <TextField label="Title" className="bg-white"></TextField>
      <TextField multiline rows={4} label="Body" className="bg-white"></TextField>
      <Button variant="contained">Post</Button>
    </div>
  );
}

export default CreatePost;