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

export const REACTION_MAP = {
  "🔥": "+1",
  "🚽": "-1",
  "🤠": "laugh",
  "🙃": "confused",
  "🍕": "heart",
  "💸": "hooray",
  "🦆": "rocket",
  "🙈": "eyes",
};

export function Reactions({ post, refreshPost }) {
  const anchorEl = useRef(null);
  const [open, setOpen] = useState(false);

  async function handleReaction(reactionName) {
    await postPostReaction(post, reactionName);
    refreshPost({
      ...post,
      reactions: {
        ...post.reactions,
        [reactionName]: post.reactions[reactionName] + 1,
      },
    });
  }

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
        {Object.entries(REACTION_MAP).map(([reaction, reactionName]) => (
          <Reaction
            key={reaction}
            post={post}
            refreshPost={refreshPost}
            reaction={reaction}
            value={post.reactions[reactionName]}
            handleReaction={() => handleReaction(reactionName)}
          />
        ))}
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
        {Object.entries(REACTION_MAP).map(([reaction, reactionName]) => (
          <MenuItem key={reaction} onClick={() => handleReaction(reactionName)}>
            {reaction}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
