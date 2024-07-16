import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactProjeComponent from "./components/ContactProjeComponent/ContactProjeComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ContactProjeComponent />
    </>
  );
}

export default App;
