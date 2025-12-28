export default function Button({getQuote}) {
  return (
    <button onClick = {getQuote} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 my-8">
      Get Today's Quote
    </button>
  );
}
