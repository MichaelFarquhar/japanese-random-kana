export const Footer = () => {
    return (
        <footer className="bg-white py-6 flex justify-center gap-4 w-full">
            <div className="flex space-x-2">
                <div>
                    <span>Powered by </span>
                    <a href="https://wanakana.com/" target="_blank" rel="noreferrer">
                        Wanakana
                    </a>
                </div>
                <span>|</span>
                <a
                    href="https://github.com/MichaelFarquhar/random-kana"
                    target="_blank"
                    rel="noreferrer"
                >
                    Source Code
                </a>
            </div>
        </footer>
    );
};
