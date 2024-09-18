import { Link } from 'react-router-dom';

import { paths } from '@/router/paths';

export const RootHeader = () => {
  return (
    <div className="container mr-auto">
      <Link to={paths.listings}>
        <img alt="Redberry logo" src="logo/redberry_logo.png" />
      </Link>
    </div>
  );
};
