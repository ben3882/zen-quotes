import { useState } from "react";
import Head from "./Head.jsx";
import Quote from "./Quote.jsx";
import Button from "./Button.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Head />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
