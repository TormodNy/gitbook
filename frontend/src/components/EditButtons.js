import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export function EditButtons({ editing, setEditing, publishEdit }) {
  if (editing) {
    return (
      <div className="flex gap-2 h-10">
        <IconButton onClick={() => publishEdit()} color="primary">
          <CheckIcon />
        </IconButton>
        <IconButton onClick={() => setEditing(false)} color="primary">
          <CloseIcon />
        </IconButton>
      </div>
    );
  }

  return (
    <IconButton
      onClick={() => setEditing(true)}
      color="primary"
      className="h-10"
    >
      <EditIcon />
    </IconButton>
  );
}
