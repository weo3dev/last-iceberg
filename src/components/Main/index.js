import React from 'react';

import Masthead from '../Masthead';
import VideoPlayer from '../VideoPlayer';
// import About from '../About';
import FAQ from '../FAQ';
import GetInvolved from '../GetInvolved';
// import Featuring from '../Featuring';
// import Support from '../Support';
// import Sponsors from '../Sponsors';

/*
Imports in all other sections:

- masthead (top)
- video player 1
- get involved
- featuring
- about
- support
- video player 2
- sponsors

*/

const Main = () => {
  return (
    <>
      <main>
        <Masthead />
        <VideoPlayer videoClass="top-player" videoID={'88ZRducXpgc'} />
        <GetInvolved />
        {/* <Featuring /> */}
        {/* <About /> */}
        <FAQ />
        {/* <Support /> */}
        {/* <VideoPlayer videoClass="bottom-player" videoTitle={'Africa Mokili Mobimba'} videoID={'0tpj505RZxA'} /> */}
        {/* <Sponsors /> */}
      </main>
    </>
  );
};

export default Main;
