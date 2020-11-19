import React from 'react';

import Navigation from '../Navigation';
import DonateButton from '../../parts/DonateButton';
import Languages from '../Languages';

// import '../../styles/main.scss';

const Header = () => {

  return (
    <header className="header-main">
        <Languages />
        <Navigation />
        <DonateButton />
    </header>
  );
};

export default Header;
