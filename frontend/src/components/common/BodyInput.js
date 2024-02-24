import { TextField } from "@mui/material";

export const BODY_CHAR_LIMIT = 1000;

export function BodyInput({ body, setBody, ...props }) {
  function updateBody(e) {
    setBody(e.target.value.substring(0, BODY_CHAR_LIMIT));
  }

  return (
    <TextField
      multiline
      minRows={4}
      maxRows={10}
      label="Body"
      value={body}
      onChange={updateBody}
      InputProps={{ className: "bg-white" }}
      helperText={BODY_CHAR_LIMIT - body.length + " characters remaining"}
      {...props}
    />
  );
}
