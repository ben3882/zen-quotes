import { useState } from "react";
import Button from "./Button";

export default function Quote() {
  const [quote, setQuote] = useState("Get a daily quote from Zen Quotes");
  // 1. We mark the function as 'async' so we can use 'await' inside it
  async function getDailyQuote() {
    try {
      // 2. The 'await' pauses this function until the network request finishes
      const response = await fetch("https://zenquotes.io/api/random");

      // 3. Always check if the response is okay (status 200)
      if (!response.ok) {
        throw new Error("Could not fetch the quote");
      }

      // 4. We must await the conversion of the data into a JSON object
      const data = await response.json();

      // 5. ZenQuotes returns an array. The quote is in the first item [0]
      // 'q' is the quote text, 'a' is the author
      const quote = data[0].q;
      const author = data[0].a;

      console.log(`"${quote}" - ${author}`);
      const newQuote = `${quote} - ${author}`;

      // You could then update your HTML here:
      // document.getElementById('quote-box').innerText = quote;
      setQuote(newQuote);
    } catch (error) {
      // 6. If the internet is down or the URL is wrong, this block catches it
      console.error("Oops, something went wrong:", error);
    }
  }

  // Call the function

  return (
    <>
      <main className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <blockquote className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            {quote}
          </blockquote>
          <Button getQuote={getDailyQuote} />
        </div>
      </main>
    </>
  );
}
