import { useContext } from "react";
import PostList from "../components/PostList";
import UserMenu from "../components/UserMenu";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";

export function FeedPage() {
  const { token } = useContext(UserContext);

  if (!token) {
    return <Navigate to={"/login"} />
  }

  return (
    <>
      <PostList />
      <UserMenu />
    </>
  );
}
