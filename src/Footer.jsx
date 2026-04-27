export default function Footer() {
  return (
    <footer className="mt-auto text-center text-gray-500 text-sm py-4">
      &copy; 2026 - {new Date().getFullYear()}{" "}
      <a
        href="mailto:info@thehabaneropress.com"
        className="text-blue-600 underline"
      >
        The Habanero Press
      </a>{" "}
      All rights reserved.
      <br />
      Inspirational quotes provided by{" "}
      <a
        href="https://zenquotes.io/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline"
      >
        ZenQuotes API
      </a>
    </footer>
  );
}
