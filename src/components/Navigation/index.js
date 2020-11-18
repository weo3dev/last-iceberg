import React from 'react';
import useMenu from '../useMenu';
import useTranslations from '../useTranslations';
import LocalizedLink from '../LocalizedLink';
import { Link } from 'gatsby';



const Navigation = ({ isActive, handleToggleMenu }) => {
  const menuItems = useMenu();
  const { button } = useTranslations();

  return (
    <>
      <nav>
        
          {menuItems.map((menu, index) => (
            <LocalizedLink
              to={menu.link}
              aria-label={menu.name}
              activeClassName="active"
              key={`${menu.link}${index}`}
              >
              {menu.name}
            </LocalizedLink>
          ))}
        
      </nav>

    </>
  );
};

export default Navigation;
