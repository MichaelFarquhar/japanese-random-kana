import './Footer.scss';

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                Powered by{' '}
                <a href="https://wanakana.com/" target="_blank" rel="noreferrer">
                    Wanakana
                </a>
                <span className="footer__seperator">|</span>
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
