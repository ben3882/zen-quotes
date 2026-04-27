import zenImage from "./assets/favicon-32x32.png";
export default function Head() {
  return (
    <header className=" mx-auto max-w-sm md:max-w-lg">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl my-8 pl-5">
        <img className="inline" src={zenImage} alt="zen image" /> &nbsp; Zen
        Quotes
      </h1>
    </header>
  );
}
