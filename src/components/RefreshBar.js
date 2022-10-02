import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

function RefreshBar ({ setPosts }) {
  function refresh () {
    setPosts(null);
  }

  return (
    <div className="w-full sticky top-4 z-50">
      <Button variant="contained" fullWidth onClick={refresh}>
        <RefreshIcon className="mr-2" />
        Refresh
      </Button>
    </div>
  );
}

export default RefreshBar;
