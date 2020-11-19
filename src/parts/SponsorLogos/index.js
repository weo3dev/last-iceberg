import React from 'react';

import pfcfLogo from 'src/images/logos/pfcf.png';
import unfpaLogo from 'src/images/logos/unfpa.png';
import un75Logo from 'src/images/logos/un75.png';
import blackLogo from 'src/images/logos/blackbird.png';


const SponsorLogos = () => {
  return (
    <article className="sponsor-logos">
      <img src={pfcfLogo} alt="Playing for Change Foundation logo" />
      <img src={unfpaLogo} alt="UNFPA logo" />
      <img src={un75Logo} alt="UN75 logo" />
      {/* <section className="blackbird">
        <p>produced by</p>
        <img src={blackLogo} alt="Blackbird logo" />
      </section> */}
    </article>
  );
};

export default SponsorLogos;
