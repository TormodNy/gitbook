import { Typography } from "@mui/material";

export function Reaction({ reaction, value }) {
  if (value === 0) {
    return null;
  }

  return (
    <button className="rounded-full flex gap-1 p-1 px-3 bg-blue-200 hover:bg-blue-300 items-center">
      <Typography fontSize={14}>{reaction}</Typography>
      <Typography fontSize={16}>{value}</Typography>
    </button>
  );
}
