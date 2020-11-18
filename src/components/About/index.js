import React, { useEffect } from 'react';
import useTranslations from '../useTranslations';
import groupImage from '../../images/about-grouping.png';

import SponsorLogos from '../SponsorLogos';

import 'aos/dist/aos.css';

const About = () => {

  const {
    aboutHeaderOne,
    aboutHeaderTwo,
    aboutTitleOne,
    aboutTitleTwo,
    aboutTitleThree,
    aboutTitleFour,
    aboutParagraphOne,
    aboutParagraphTwo,
    aboutParagraphThree
  } = useTranslations();

  let AOS;

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require('aos');
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });  

  return (
    <>
      <article className="about" id="about">
        <h3><span>{aboutHeaderOne},</span>{aboutHeaderTwo}.</h3>
        
        <section className="left-column subtitle">
          <h4>
            <span >{aboutTitleOne}</span>
            <span >{aboutTitleTwo}:</span>
            <span className="text-color-mauve" >{aboutTitleThree}</span>
            <span className="text-color-mauve" >{aboutTitleFour}</span>
          </h4>
        </section>
        <section className="left-column grid-row-2">
          <p className="louder" >{aboutParagraphOne}</p>
          <p  >{aboutParagraphTwo}</p>
        </section>

        <section className="right-column" >
          <p>{aboutParagraphThree}</p>
          <SponsorLogos />
        </section>

        <img className="group-image" src={groupImage} />

      </article>
    </>
  );

}

export default About;