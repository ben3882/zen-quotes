export default function Button({ getQuote }) {
  return (
    <button
      onClick={getQuote}
      className=" text-white bg-emerald-300 border-0 py-2 px-8 focus:outline-none hover:bg-emerald-400 rounded text-lg mt-10 sm:mt-0"
    >
      Get Today's Quote
    </button>
  );
}
