import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="m-auto flex flex-col items-center mt-12 rounded-md bg-white p-8 shadow-md">
      <Typography variant="h4">GitBook is not GitBooking...</Typography>
      <Typography variant="subtitle1">
        {error.statusText || error.message}
      </Typography>
    </div>
  );
}
