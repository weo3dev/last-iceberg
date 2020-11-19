import React from 'react';

import pfcfLogo from '../../images/logos/pfc-foundation_logo.png';
import sankofaLogo from '../../images/logos/sankofa.png';
import rocknrollLogo from '../../images/logos/rocknroll.png';
import unfpaLogo from '../../images/logos/unfpa.png';
import silkroadLogo from '../../images/logos/silkroad-20th.png';
import rememberLogo from '../../images/logos/remember-slavery-un.png';

const SponsorLogosAlt = () => {
  return (
    <article className="sponsor-logos alt">
      <img src={pfcfLogo} alt="Playing for Change Foundation logo" />
      <img src={sankofaLogo} alt="Sankofa logo" />
      <img src={rocknrollLogo} alt="Rock & Roll Hall of Fame logo" />
      <img src={unfpaLogo} alt="UNFPA logo" />
      <img src={silkroadLogo} alt="Silkroad 20th" />
      <img src={rememberLogo} alt="Remember Slavery" />
    </article>
  );
};

export default SponsorLogosAlt;
