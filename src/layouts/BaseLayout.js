import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocale } from '../hooks/locale';

const BaseLayout = ({ children, pageContext: { locale } }) => {
  // Using the useLocale() hook to define the correct locale 
  // that will be available in all components of the tree thought its context
  const { changeLocale } = useLocale();
  changeLocale(locale);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};

export { BaseLayout };
