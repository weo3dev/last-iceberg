import React from 'react';
import SEO from '../components/seo';


import useTranslations from '../components/useTranslations';


const Index = () => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const {
    hello,
  } = useTranslations();

  return (
    <div className="homepage">
      <SEO title="Home" />
      <h2>{hello}</h2>
    </div>
  );
};

export default Index;
