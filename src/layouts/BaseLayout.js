import React from 'react';
import SEO from '../components/seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocale } from '../hooks/locale';

// import 'src/styles/main.scss';

import '../styles/main.scss';

const BaseLayout = ({ children, pageContext: { locale } }) => {
  // Using the useLocale() hook to define the correct locale 
  // that will be available in all components of the tree thought its context
  const { changeLocale } = useLocale();
  changeLocale(locale);

  return (
    <>
      <SEO title="Home" />
      <Header />
      {children}
      <Footer />
    </>
  )
};

export { BaseLayout };
