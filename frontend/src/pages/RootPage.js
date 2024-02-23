import { Navigate, Outlet } from "react-router-dom";

export function RootPage() {
  return (
    <div className="flex flex-col gap-2 w-full p-2 pb-16">
      <div className="text-center">
        <h1 className="mt-12">Welcome to GitBook</h1>
        <p>
          This is a social media platform utilizing a GitHub repository as a
          database.
        </p>
      </div>

      <Outlet />
    </div>
  );
}
