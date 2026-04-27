import { useState } from "react";

export default function Button({ getQuote, buttonText, setButtonText }) {
  // const [buttonText, setButtonText] = useState("Get Today's Quote");

  return (
    <button
      type="button"
      onClick={getQuote}
      className=" text-white bg-emerald-300 border-0 py-2 px-8 focus:outline-none hover:bg-emerald-400 rounded text-lg mt-10 sm:mt-0"
    >
      {buttonText}
    </button>
  );
}
