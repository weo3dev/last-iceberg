import React from 'react';
import useTranslations from '../useTranslations';
import PTMSlider from '../PTMSlider';
import ArtistList from '../ArtistList';

const Featuring = () => {

  const {
    featuringHeader,
    featuringInfoOne,
    featuringInfoTwo
  } = useTranslations();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    centerPadding: '100px',
    variableWidth: true,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <article className="featuring" id="featuring">
        <span className="faux-hr"></span>
        <h3 data-aos="custom-animation">{featuringHeader}</h3>
        <PTMSlider />
        <ArtistList />
      </article>
    </>
  );

}

export default Featuring;