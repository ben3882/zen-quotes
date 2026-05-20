import { useState } from "react";
import Button from "./Button";

export default function Quote() {
  const [quote, setQuote] = useState("Get a daily quote from Zen Quotes");
  const [buttonText, setButtonText] = useState("Get Today's Quote");
  const [quoteHistory, setQuoteHistory] = useState([]);
  // 1. We mark the function as 'async' so we can use 'await' inside it
  async function getDailyQuote() {
    try {
      // 2. The 'await' pauses this function until the network request finishes
      const response = await fetch(
        "https://quotes-api.habaneropress.com/api/quote",
      );

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
      setQuoteHistory((prevHistory) => [newQuote, ...prevHistory]);

      setQuote(newQuote);
      setButtonText("Get another quote!");
    } catch (error) {
      // 6. If the internet is down or the URL is wrong, this block catches it
      console.error("Oops, something went wrong:", error);
    }
  }

  // Call the function
  return (
    <>
      <main className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <blockquote className="grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            {quote}
          </blockquote>
          <Button getQuote={getDailyQuote} buttonText={buttonText} />
        </div>

        <div className="mt-10 lg:w-2/3 mx-auto">
          <ul className="list-disc pl-5 space-y-2">
            {quoteHistory.slice(1).map((item, index) => (
              <li key={index} className="text-gray-600 italic">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
