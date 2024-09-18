import { Outlet } from 'react-router-dom';

import { RootHeader } from './RootHeader';

export const RootLayout = () => {
  return (
    <>
      <header className="border-b-1 py-38 w-full border-b border-border">
        <RootHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Root Footer</footer>
    </>
  );
};
