import React from 'react';
import useTranslations from '../useTranslations';
import SponsorLogosFooter from '../SponsorLogosFooter';

const Sponsors = () => {

  const {
    collageR1,
    collageR2G1,
    collageR2G2,
    collageR2G3,
    collageR3G1,
    collageR3G2,
    collageR4G1,
    collageR4G2,
    collageR5G1,
    collageR5G2
  } = useTranslations();

  return (
    <>
      <article className="sponsors">
        <section className="cosmetic">
          <article className="word-collage-art">
            <p><span>{collageR1}</span></p>
            <p>{collageR2G1}&nbsp;<span className="flex-center">{collageR2G2}</span>&nbsp;{collageR2G3}</p>
            <p><span className="flex-bottom">{collageR3G1}</span>&nbsp;{collageR3G2}</p>
            <p>{collageR4G1}&nbsp;<span className="flex-bottom">{collageR4G2}</span></p>
            <p><span>{collageR5G1}</span>&nbsp;{collageR5G2}</p>
          </article>
          <SponsorLogosFooter />
          <svg height="0" width="0">
            <clipPath id="svgPath">
              <path className="cls-1" d="M0,80S250,10,600,100s400,150,1000,0V2000H0"/>
            </clipPath>
          </svg>
        </section>
      </article>
    </>
  );

}

export default Sponsors;