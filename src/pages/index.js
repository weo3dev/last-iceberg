import React from 'react';
import SEO from '../components/seo';

import useTranslations from '../components/useTranslations';

const Index = () => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const {
    involvedPledgeParagraph,
  } = useTranslations();

  return (
    <>
      <main>
        <SEO title="Home" />
        <h2>{involvedPledgeParagraph}</h2>
      </main>
    </>
  );
};

export default Index;
