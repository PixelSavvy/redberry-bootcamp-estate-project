import { Outlet } from 'react-router-dom';

import { RootHeader } from './RootHeader';

export const RootLayout = () => {
  return (
    <>
      <header className="border-b-1 w-full border border-b py-[2.375rem]">
        <RootHeader />
      </header>
      <main className="mt-20">
        <Outlet />
      </main>
      <footer />
    </>
  );
};
