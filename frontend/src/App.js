import React, { useEffect, useState } from "react";
import { PageRouter } from "./pages/PageRouter";
import { getUser } from "./api/Users";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    setUser(await getUser());
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <PageRouter />
    </UserContext.Provider>
  );
}

export default App;
