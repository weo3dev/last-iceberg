import React from 'react';
import useTranslations from '../useTranslations';
import SocialLinks from '../SocialLinks';

const Footer = () => {
  const {

  } = useTranslations();

  return (
    <>
      <footer className="footer-main">
        <SocialLinks />
      </footer>
    </>
  );
};

export default Footer;
