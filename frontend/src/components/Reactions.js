import { IconButton, Menu, MenuItem } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useRef, useState } from "react";
import { postPostReaction } from "../api/Posts";
import { Reaction } from "./Reaction";

const variantBackgroundColor = {
  filled: "primary.main",
};

const variantColor = {
  filled: "white",
};

export function Reactions({ post }) {
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-4 items-center">
      <IconButton
        color="primary"
        sx={{
          backgroundColor: variantBackgroundColor["filled"],
          color: variantColor["filled"],
          "&:hover": { backgroundColor: variantBackgroundColor["filled"] },
        }}
        ref={anchorEl}
        onClick={() => setOpen(!open)}
      >
        <ThumbUpIcon />
      </IconButton>

      <div className="flex gap-1">
        <Reaction reaction="🔥" value={post.reactions["+1"]} />
        <Reaction reaction="🚽" value={post.reactions["-1"]} />
        <Reaction reaction="🤠" value={post.reactions["laugh"]} />
        <Reaction reaction="🙃" value={post.reactions["confused"]} />
        <Reaction reaction="🍕" value={post.reactions["heart"]} />
        <Reaction reaction="💸" value={post.reactions["hooray"]} />
        <Reaction reaction="🦆" value={post.reactions["rocket"]} />
        <Reaction reaction="🙈" value={post.reactions["eyes"]} />
      </div>

      <Menu
        anchorEl={anchorEl.current}
        open={open}
        onClose={() => setOpen(false)}
        className="horiz-menu"
        MenuListProps={{
          style: {
            display: "flex",
          },
        }}
      >
        <MenuItem onClick={() => postPostReaction(post, "+1")}>🔥</MenuItem>
        <MenuItem onClick={() => postPostReaction(post, "-1")}>🚽</MenuItem>
        <MenuItem onClick={() => postPostReaction(post, "laugh")}>🤠</MenuItem>
        <MenuItem onClick={() => postPostReaction(post, "confused")}>
          🙃
        </MenuItem>
        <MenuItem onClick={() => postPostReaction(post, "heart")}>🍕</MenuItem>
        <MenuItem onClick={() => postPostReaction(post, "hooray")}>💸</MenuItem>
        <MenuItem onClick={() => postPostReaction(post, "rocket")}>🦆</MenuItem>
        <MenuItem onClick={() => postPostReaction(post, "eyes")}>🙈</MenuItem>
      </Menu>
    </div>
  );
}
