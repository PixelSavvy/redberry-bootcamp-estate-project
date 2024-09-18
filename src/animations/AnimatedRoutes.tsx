import { AnimatePresence, m } from 'framer-motion';
import { Outlet } from 'react-router-dom';

export const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <m.div className="flex h-full flex-col place-items-center">
        <Outlet />
      </m.div>
    </AnimatePresence>
  );
};
