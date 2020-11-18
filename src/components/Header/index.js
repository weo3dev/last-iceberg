import React from 'react';
import useTranslations from '../useTranslations';
import Navigation from '../Navigation';
import Languages from '../Languages';

import { useMenu } from '../../hooks/menu';


const Header = () => {
  const { home } = useTranslations();
  const { openedMenu, toggleMenu } = useMenu();

  return (
    <>
      <header className="header-main">

          <Languages />
          <Navigation />
        
      </header>
    </>
  );
};

export default Header;
