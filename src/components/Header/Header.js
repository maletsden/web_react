import React from 'react';

import MobileMenu from './MobileHeader/ModileMenu';
import Hidden from "@material-ui/core/Hidden";

export default function Header() {
  return (
    <header>
      {/* TODO: add Router*/}

      <Hidden lgUp>
        <MobileMenu/>
      </Hidden>
    </header>
  );
};
