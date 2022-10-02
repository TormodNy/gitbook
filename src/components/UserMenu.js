import { useContext, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Card, CardContent, TextField, Typography } from "@mui/material";
import { TokenContext } from "../App";

function UserMenu () {
  const [open, setOpen] = useState(false);

  const {token, setToken} = useContext(TokenContext);

  return (
    <div className="fixed right-4 top-4 bg-blue-500 w-16 h-16 rounded-full">
      <button onClick={() => setOpen(!open)}>
        <PersonIcon className="m-2" sx={{fontSize: 48}} htmlColor="white" />
      </button>

      {open
        ? 
        <Card className="relative top-4 right-48 w-64 p-2">
          <CardContent>
            <Typography variant="h6">Add token</Typography>
            <TextField label="Token" value={token} onChange={e => setToken(e.target.value)} className="bg-white" helperText="Used for authentication"></TextField>
          </CardContent>
        </Card>
        : null
      }
    </div>
  );
}

export default UserMenu;
