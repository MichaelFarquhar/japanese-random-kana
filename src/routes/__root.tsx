import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Provider } from 'jotai';
import { Header } from '../layouts/Header/Header';
import { Footer } from '../layouts/Footer/Footer';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}
