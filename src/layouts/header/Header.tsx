export const Header = () => {
    return (
        <header className="w-full py-4 border-b flex items-center justify-center shadow-md bg-white">
            <div className="flex items-center space-x-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-10 h-10 "
                >
                    <path
                        fill="none"
                        stroke="#58b4ff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5h6.586a1 1 0 0 1 .707 1.707L11 8M8 8c0 1.5.5 3-2 5m6 7l4-9l4 9m-.9-2h-6.2"
                    ></path>
                </svg>
                <div className="font-logo font-bold text-4xl text-gray-800">
                    Random Kana
                </div>
            </div>
        </header>
    );
};
