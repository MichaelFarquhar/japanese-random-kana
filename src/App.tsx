import { Footer } from './layouts/footer/Footer';
import { Header } from './layouts/header/Header';
import { RandomKana } from './RandomKana';

export default function App() {
    return (
        <div className="App">
            <Header />
            <RandomKana />
            <Footer />
        </div>
    );
}
