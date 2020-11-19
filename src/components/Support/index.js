import React from 'react';
import useTranslations from '../useTranslations';
import JellyButton from '../JellyButton';
import merchandiseImage from "../../images/ptm-merchandise-lg.png";

const Support = () => {

  const {
    supportHeaderOne,
    supportHeaderTwo,
    supportParagraph,
    supportButtonShopOne,
    supportButtonShopTwo
  } = useTranslations();

  function openShop() { 
    window.open( 
      "https://shop.playingforchange.com/collections/peace-through-music-global-event", "_blank"); 
  } 

  return (
    <>
      <article className="support" id="merchandise">
        <span className="faux-hr"></span>
          <img className="merchandise-image" src={merchandiseImage} />
          <h3 data-aos="custom-animation"><span>{supportHeaderOne}</span>{supportHeaderTwo}!</h3>
          <p>{supportParagraph}</p>
          <JellyButton buttonTextOne={supportButtonShopOne} buttonTextTwo={supportButtonShopTwo} addBreak={false} buttonStyle="shop" buttonMethod={openShop} />
      </article>
    </>
  );

}

export default Support;