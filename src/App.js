import React, { useState } from "react";
import { PageRouter } from "./pages/PageRouter";

export const UserContext = React.createContext();

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser }}>
      <PageRouter />
    </UserContext.Provider>
  );
}

export default App;
