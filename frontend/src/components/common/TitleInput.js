import { TextField } from "@mui/material";

export const TITLE_CHAR_LIMIT = 60;

export function TitleInput({ title, setTitle, ...props }) {
  function updateTitle(e) {
    setTitle(e.target.value.substring(0, TITLE_CHAR_LIMIT));
  }

  return (
    <TextField
      label="Title"
      value={title}
      onChange={updateTitle}
      InputProps={{ className: "bg-white" }}
      helperText={TITLE_CHAR_LIMIT - title.length + " characters remaining"}
      {...props}
    />
  );
}
