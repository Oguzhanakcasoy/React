import { useState } from "react";
import Component1 from "./components/Component1";

function App() {
  const {user, setUser} = useState("Jesse Hall");
  return (
    <>
    <Component1 user ={user} />
    </>
  );
}

export default App;
