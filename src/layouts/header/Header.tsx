export const Header = () => {
  return (
    <header className="w-full py-4 border-b border-gray-200 flex items-center justify-center shadow-md bg-white">
      <div className="flex items-center space-x-3">
        <img src="/icons/favicon-32x32.png" width={32} height={32} alt="App logo" />
        <div className="font-logo font-bold text-4xl text-gray-800">Random Kana</div>
      </div>
    </header>
  );
};
