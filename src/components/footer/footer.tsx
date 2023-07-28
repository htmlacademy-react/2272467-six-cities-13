import React from 'react';
import Logo from '../logo/logo.tsx';

function Footer(): React.JSX.Element {
  return (
    <footer className="footer container">
      <Logo block={'footer'}/>
    </footer>
  );
}

export default Footer;
