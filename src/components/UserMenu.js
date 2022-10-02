import { useContext, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { UserContext } from "../App";

function UserMenu () {
  const [open, setOpen] = useState(false);
  const {setToken, user, setUser} = useContext(UserContext);

  function logOut () {
    setUser(null);
    setToken("");
  }

  return (
    <div className="fixed right-4 top-4 w-16 h-16">
      <button onClick={() => setOpen(!open)} className="bg-blue-500 rounded-full w-16 h-16 transition-opacity hover:opacity-50">
        <img src={user.avatar_url} className="rounded-full w-14 h-14 ml-1"/>
      </button>

      {open
        ? 
        <Card className="relative top-4 right-48 w-64 p-2 pb-0">
          <CardContent className="flex flex-col">
            <Typography variant="h6" fontWeight="bold">{user.login}</Typography>
            <Typography fontWeight="light">{user.name}</Typography>
            <br />
            <Button onClick={logOut} variant="contained">Log out</Button>
          </CardContent>
        </Card>
        : null
      }
    </div>
  );
}

export default UserMenu;
