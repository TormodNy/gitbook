import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import PostList from "./components/PostList";
import UserMenu from "./components/UserMenu";

export const TokenContext = React.createContext();

function App() {
  const [token, setToken] = useState("");

  return (
    <TokenContext.Provider value={{token, setToken}}>
      <div className="flex flex-col gap-2 w-full p-2">
        <div className="text-center">
          <h1 className="mt-12">Welcome to GitBook</h1>
          <p>This is a social media platform utilizing a GitHub repository as a database.</p>
        </div>
        
        {token
          ?
            <>
              <PostList />
              <UserMenu />
            </>
          : <LoginPage />
        }
        
      </div>
    </TokenContext.Provider>
  );
}

export default App;
