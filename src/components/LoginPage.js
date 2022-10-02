import { Button, Checkbox, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { getTokenValidity } from "../api/Authorization";
import { TokenContext } from "../App";

function LoginPage () {

  const [tempToken, setTempToken] = useState("");
  const [tokenMessage, setTokenMessage] = useState("");
  const [accept, setAccept] = useState(false);
  const { setToken } = useContext(TokenContext);

  async function authenticate () {
    if (tempToken) {
      const tokenValidity = await getTokenValidity(tempToken);
      
      if (tokenValidity) {
        setToken(tempToken);
        setTokenMessage("");
      }else {
        setTokenMessage("Invalid token");
        console.warn("Invalid token");
      }
    }
  }

  return (
    <div className="m-auto pt-1 p-4 xl:w-[50vw] md:w-[80vw] flex flex-col gap-2 bg-slate-200">
      <div className="flex flex-col p-2 w-full gap-4">
        <h2>Log in</h2>

        <p>
          To be able to use GitBook you have to authenticate yourself with a GitHub access token
          which gives the app access to reading and publishing to public repositories on your behalf.
        </p>

        <TextField
          label="Token"
          value={tempToken}
          onChange={e => setTempToken(e.target.value)}
          InputProps={{className: "bg-white"}}
          helperText={tokenMessage}
          color={tokenMessage ? "error" : ""}
          error={!!tokenMessage}
        />

        <span className="flex gap-2 items-center">
          <Checkbox value={accept} onChange={() => setAccept(!accept)} />
          <p>
            I have read and accept <a className="text-blue-600 underline" target="_blank" href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">
              GitHub's Terms of Service
            </a> and <a className="text-blue-600 underline" target="_blank" href="https://docs.github.com/en/site-policy/github-terms/github-community-guidelines">
              GitHub's Community Guidelines
            </a>.
          </p>
        </span>

        <Button variant="contained" onClick={authenticate} disabled={!accept || !tempToken}>Authenticate</Button>
      </div>
    </div>
  );
}

export default LoginPage;
