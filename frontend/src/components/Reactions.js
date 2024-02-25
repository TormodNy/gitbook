import { IconButton, Menu, MenuItem } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useContext, useEffect, useRef, useState } from "react";
import {
  deletePostReaction,
  getPostReactions,
  postPostReaction,
} from "../api/Posts";
import { Reaction } from "./Reaction";
import { UserContext } from "../App";

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
  const [reactions, setReactions] = useState(null);
  const { user } = useContext(UserContext);

  async function handleAddReaction(reactionName) {
    const reaction = await postPostReaction(post, reactionName);
    refreshPost({
      ...post,
      reactions: {
        ...post.reactions,
        [reactionName]: post.reactions[reactionName] + 1,
      },
    });
    addReaction(reaction);
  }

  async function handleDeleteReaction(reactionName, userReaction) {
    await deletePostReaction(post, userReaction);
    refreshPost({
      ...post,
      reactions: {
        ...post.reactions,
        [reactionName]: post.reactions[reactionName] - 1,
      },
    });
    deleteReaction(userReaction);
  }

  useEffect(() => {
    if (!reactions) {
      getPostReactions(post).then((data) => setReactions(data));
    }
  }, [post, reactions]);

  function addReaction(reaction) {
    setReactions([reaction, ...reactions]);
  }

  function deleteReaction(deletedReaction) {
    setReactions(
      reactions.filter((reaction) => reaction.id !== deletedReaction.id)
    );
  }

  if (!reactions) {
    return;
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
            reaction={reaction}
            reactionName={reactionName}
            value={post.reactions[reactionName]}
            handleAddReaction={handleAddReaction}
            handleDeleteReaction={handleDeleteReaction}
            userReaction={reactions.find(
              (reaction) =>
                reaction.user.id === user.id &&
                reaction.content === reactionName
            )}
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
        {Object.entries(REACTION_MAP).map(([reaction, reactionName]) => {
          const userReaction = reactions.find(
            (reaction) =>
              reaction.user.id === user.id && reaction.content === reactionName
          );
          return (
            <MenuItem
              key={reaction}
              onClick={() =>
                userReaction
                  ? handleDeleteReaction(reactionName, userReaction)
                  : handleAddReaction(reactionName)
              }
            >
              {reaction}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
