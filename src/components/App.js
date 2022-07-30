import React, { useState } from "react";
import { UserProvider } from "../context/User";
import Header from "./Header";
import Profile from "./Profile";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      <UserProvider>
      <Header />
      <Profile theme={theme} />
      </UserProvider>
    </main>
  );
}

export default App;
