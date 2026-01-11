export const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <div className="py-4 px-5 flex flex-wrap items-center justify-center">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          © {new Date().getFullYear()} — Powered by
          <a
            className="text-blue-400 font-medium transition hover:text-blue-600"
            href="https://wanakana.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            &nbsp;Wanakana
          </a>
        </p>
      </div>
    </footer>
  );
};
