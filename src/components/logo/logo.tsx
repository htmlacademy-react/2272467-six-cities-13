import React from 'react';
import { AppRoute } from '../../constants/app-route.ts';
import { Link } from 'react-router-dom';

type TLogoProps = {
  block: 'header' | 'footer';
}

function Logo({ block } : TLogoProps): React.JSX.Element {
  return (
    <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
      <img className={`${block}__logo`} src="img/logo.svg" alt="6 cities logo" width={block === 'header' ? 81 : 64} height={block === 'header' ? 41 : 33}/>
    </Link>
  );
}

export default Logo;
