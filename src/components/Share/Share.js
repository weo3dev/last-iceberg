import React from 'react';
import styled from 'styled-components';
import { TEXT, COLORS } from 'src/theme';
import useTranslations from 'src/components/useTranslations';
import { PledgeHeader } from 'src/components/Pledge';
import useScript from 'src/hooks/useScript';
import fbLogo from 'src/images/logos/facebook.png';
import twLogo from 'src/images/logos/twitter.png';
import shareImg from 'src/images/share.png';

// const StyledShare = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-height: 70vh;
//   overflow-y: auto;
// `;

// const StyledCTA = styled.p`
//   font-size: 28px;
//   text-transform: uppercase;
//   font-family: ${TEXT.FONT_FAMILY};
// `;
// const StyledShareLogos = styled.div``;
// const StyledShareLogo = styled.img`
//   width: 70px;
//   height: 70px;
//   margin: 0 8px;
//   filter: grayscale(1) brightness(3);
// `;

const SHARE_URL = 'https://playingforchange.com/';
const FB_APP_ID = '1846237485637972';

export default function Share() {
  const { pledgePopUp, pledgeSocialText } = useTranslations();

  useScript({
    src: 'https://connect.facebook.net/en_US/sdk.js',
    id: 'fb-script',
    onload: () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: FB_APP_ID,
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v9.0',
        });
      };
    },
  });

  function handleClickFbShare() {
    window.FB.ui(
      {
        method: 'share',
        href: SHARE_URL,
      },
      function(response) {},
    );
  }

  return (
    <>
    </>
    // <StyledShare>
    //   <PledgeHeader />
    //   <section className="preview">
    //     <img alt="Playing for Change hero image" src={shareImg} />
    //     <p className="description">{pledgePopUp}</p>
    //   </section>
    //   <p className="cta">Share</p>
      
    //   <StyledShareLogos>
    //     <StyledShareLogo onClick={handleClickFbShare} src={fbLogo} />
    //     <a
    //       href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
    //         pledgeSocialText,
    //       )}`}
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <StyledShareLogo src={twLogo} />
    //     </a>
    //   </StyledShareLogos>
    // </StyledShare>
  );
}
