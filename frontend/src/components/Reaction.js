import { Typography } from "@mui/material";

export function Reaction({
  post,
  refreshPost,
  reaction,
  value,
  handleReaction,
}) {
  if (value === 0) {
    return null;
  }

  return (
    <button
      className="rounded-full flex gap-1 p-1 px-3 bg-blue-200 hover:bg-blue-300 items-center"
      onClick={handleReaction}
    >
      <Typography fontSize={14}>{reaction}</Typography>
      <Typography fontSize={16}>{value}</Typography>
    </button>
  );
}
