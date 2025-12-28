import { useState } from "react";
import Head from "./Head.jsx";
import Quote from "./Quote.jsx";
import Button from "./Button.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head />
      <Quote />
    </>
  );
}

export default App;
